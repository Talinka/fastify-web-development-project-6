const port = process.env.PORT || 3000;
const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;

const fastify = require('fastify')({
  logger: true
});

module.exports = function (fastify, options, next) {
  fastify.get('/', function (req, reply) {
    reply.type('text/html').send(html)
  })
  next()
};

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <h2>Hello!</h2>
  </body>
</html>
`;