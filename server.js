const terminal = document.getElementById('terminal');
const commandInput = document.getElementById('commandInput');
const sendCommand = document.getElementById('sendCommand');
const clearConsole = document.getElementById('clearConsole');

function addLog(text) {
  const line = document.createElement('div');
  line.innerHTML = `<em>[preview]</em> ${text}`;
  terminal.querySelector('.cursor')?.before(line);
  terminal.scrollTop = terminal.scrollHeight;
}

sendCommand?.addEventListener('click', () => {
  const command = commandInput.value.trim();
  if (!command) return;
  addLog(`&gt; ${command}`);
  commandInput.value = '';
  addLog('Preview mode: command was not sent because API is not connected.');
});

commandInput?.addEventListener('keydown', event => {
  if (event.key === 'Enter') sendCommand.click();
});

clearConsole?.addEventListener('click', () => {
  terminal.innerHTML = '<div class="cursor">▌</div>';
});

document.querySelectorAll('.power').forEach(button => {
  button.addEventListener('click', () => {
    addLog(`Preview action: ${button.textContent} requested.`);
  });
});

document.getElementById('uploadBtn')?.addEventListener('click', () => {
  alert('Preview mode: file upload will be connected later.');
});
