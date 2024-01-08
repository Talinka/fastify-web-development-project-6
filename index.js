import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import fastify from 'fastify';
import init from './server/plugin.js';
import 'dotenv/config';

const port = process.env.PORT || 3000;
const host = ('RENDER' in process.env) ? '0.0.0.0' : 'localhost';

const app = fastify({
  logger: true,
  exposeHeadRoutes: false,
});

await init(app);

try {
  await app.listen({ host, port });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
