import fastifyServer from 'fastify';
import plugin from './server/plugin.js';
import 'dotenv/config';

const port = process.env.PORT || 3000;
const host = ('RENDER' in process.env) ? '0.0.0.0' : 'localhost';

const fastify = fastifyServer({
  logger: true,
});

const app = await plugin(fastify);

try {
  await app.listen({ host, port });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
