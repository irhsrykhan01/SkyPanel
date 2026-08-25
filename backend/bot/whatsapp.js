import makeWASocket, { DisconnectReason, useMultiFileAuthState } from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import qrcode from 'qrcode-terminal';

const authPath = process.env.WA_AUTH_PATH || 'auth_info_baileys';

export async function startWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState(authPath);
  const sock = makeWASocket({ auth: state });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', ({ connection, lastDisconnect, qr }) => {
    if (qr) qrcode.generate(qr, { small: true });

    if (connection === 'open') {
      console.log('SkyPanel WhatsApp Bot connected.');
    }

    if (connection === 'close') {
      const statusCode = (lastDisconnect?.error instanceof Boom)
        ? lastDisconnect.error.output?.statusCode
        : undefined;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

      if (shouldReconnect) startWhatsApp().catch(error => console.error('WhatsApp reconnect failed:', error));
      else console.log('WhatsApp session logged out.');
    }
  });

  return sock;
}

if (process.env.SKYPANEL_START_WHATSAPP === 'true') {
  startWhatsApp().catch(error => {
    console.error('WhatsApp startup failed:', error);
    process.exitCode = 1;
  });
}
