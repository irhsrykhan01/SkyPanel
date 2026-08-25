import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { panelCore } from './core/panel-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..')));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'SkyPanel Core' });
});

app.get('/api/servers', (_req, res) => {
  res.json({ servers: panelCore.listServers() });
});

app.get('/api/servers/:id', (req, res) => {
  const server = panelCore.getServer(req.params.id);
  if (!server) return res.status(404).json({ error: 'Server not found' });
  return res.json({ server });
});

app.post('/api/servers/:id/:action', async (req, res) => {
  const actions = { start: 'startServer', stop: 'stopServer', restart: 'restartServer' };
  const method = actions[req.params.action];
  if (!method) return res.status(404).json({ error: 'Unknown action' });

  try {
    const result = await panelCore[method](req.params.id);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`SkyPanel Core listening on http://localhost:${PORT}`);
});
