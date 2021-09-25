const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

  function checkBoardExists(obj) {
    return obj.hasOwnProperty('board');
  }

  function sayHello() {
    return 'hello';
  }

  app.get('/', async (req, res, next) => {
    try {
      let boardExists = await checkBoardExists(req.query);
      let greeting = await sayHello();
      if (!boardExists) {
        res.status(400).end();
      } else {
        res.send(greeting);
      }
    }
    catch(error) {
      next(error);
    }
  });

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
