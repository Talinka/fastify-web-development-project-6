// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import app from '../server/plugin.js';

const port = process.env.PORT || 3000;
const host = ('RENDER' in process.env) ? '0.0.0.0' : 'localhost';

const fastify = require('fastify')({
  logger: true,
});

app(fastify).listen({ host, port }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
