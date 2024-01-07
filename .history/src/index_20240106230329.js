// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import fastify from 'fastify';
// import plugin from '../server/plugin.js';

const port = process.env.PORT || 3000;
const host = ('RENDER' in process.env) ? '0.0.0.0' : 'localhost';

const app = fastify({
  logger: true,
});

app.listen({ host, port }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
