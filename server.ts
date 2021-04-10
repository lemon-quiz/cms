import accepts from 'accepts';
import crypto from 'crypto';
import { sync as globSync } from 'glob';
import { createServer } from 'http';
import next from 'next';
import { basename } from 'path';

import { polyfill } from './polyfills';
// Get the supported languages by looking for translations in the `lang/` dir.
const supportedLanguages = globSync('./compiled-lang/*.json').map((f) => basename(f, '.json'));

const SUPPORTED_LOCALES = ['nl-NL'];

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

Promise.all([app.prepare(), ...SUPPORTED_LOCALES.map(polyfill)]).then(() => {
  createServer((req, res) => {
    const accept = accepts(req);
    const locale = accept.language(supportedLanguages) || 'nl-NL';
    (req as any).locale = locale;
    const nonce = crypto.randomBytes(20).toString('hex');
    (req as any).nonce = nonce;
    // TODO: This will blow up other next inline JS but next.js should prob fix this
    // res.setHeader('Content-Security-Policy', `script-src 'nonce-${nonce}'`);
    handle(req, res);
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
