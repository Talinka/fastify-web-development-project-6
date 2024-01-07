const fastify = require('fastify')({
  logger: true
});

export default function (fastify, options, next) {
  fastify.get('/', function (req, reply) {
    reply.type('text/html').send(html)
  });
  next();
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