// @ts-check

export default (app) => {
  console.log('wellcome');
  app
    .get('/', { name: 'root' }, (req, reply) => {
      req.log.info("RRRRRR");
      reply.render('welcome/index');
    })
    .get('/protected', { name: 'protected', preValidation: app.authenticate }, (req, reply) => {
      reply.render('welcome/index');
    });
};
