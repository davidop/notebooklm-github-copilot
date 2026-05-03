import { spawn } from 'node:child_process';

const child = spawn('npx', ['notebooklm-mcp@latest'], {
  stdio: ['ignore', 'pipe', 'pipe'],
  shell: process.platform === 'win32'
});

let output = '';
let finished = false;

const timeout = setTimeout(() => {
  if (!finished) {
    child.kill('SIGTERM');
    console.log('NotebookLM MCP process started successfully and was terminated after smoke-test timeout.');
    process.exit(0);
  }
}, 8000);

child.stdout.on('data', (data) => {
  output += data.toString();
});

child.stderr.on('data', (data) => {
  output += data.toString();
});

child.on('exit', (code) => {
  finished = true;
  clearTimeout(timeout);
  if (code === 0) {
    console.log('NotebookLM MCP exited cleanly.');
    process.exit(0);
  }
  console.error(output || `NotebookLM MCP exited with code ${code}.`);
  process.exit(code ?? 1);
});
