import { enableProdMode } from '@angular/core';
import { createServer } from 'http';
import { AppServerModule } from './app/app.module.server';
import { renderModule } from '@angular/platform-server';

enableProdMode();

const PORT = process.env['PORT'] || 4000;

const server = createServer((req, res) => {
    renderModule(AppServerModule, {
        document: '<app-root></app-root>',
        url: req.url
    }).then(html => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    }).catch(err => {
        res.writeHead(500);
        res.end('Error: ' + err);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
