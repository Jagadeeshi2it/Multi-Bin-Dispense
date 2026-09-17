// Minimal static file server for the prototype.
// Takes an absolute root so it never calls process.cwd().
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PORT = Number(process.env.PORT || 4173);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

http
  .createServer((req, res) => {
    let pathname;
    try {
      pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    } catch {
      res.writeHead(400).end('Bad request');
      return;
    }

    if (pathname === '/') pathname = '/index.html';

    const target = path.join(ROOT, pathname);
    if (!target.startsWith(ROOT + path.sep)) {
      res.writeHead(403).end('Forbidden');
      return;
    }

    fs.readFile(target, (err, body) => {
      if (err) {
        console.error(`${res.statusCode = err.code === 'ENOENT' ? 404 : 500} ${pathname} (${err.code})`);
        res.end(err.code === 'ENOENT' ? 'Not found' : 'Server error');
        return;
      }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(target).toLowerCase()] || 'application/octet-stream' });
      res.end(body);
      console.log(`200 ${pathname}`);
    });
  })
  .listen(PORT, '127.0.0.1', () => console.log(`serving ${ROOT} on http://localhost:${PORT}`));
