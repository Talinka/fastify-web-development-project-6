// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import fastifyServer from 'fastify';
import plugin from '../server/plugin.js';

const port = process.env.PORT || 3000;
const host = ('RENDER' in process.env) ? '0.0.0.0' : 'localhost';

const fastify = fastifyServer({
  logger: true,
});

const app = await plugin(fastify);

app.listen({ host, port }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
