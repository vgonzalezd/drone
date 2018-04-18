
const express = require('express');
const router = express.Router();
const actionCtrl = require('./controllers/actionCtrl');

//home
router.get('/', function(req, res) {
  // Render search in views because in orther of called first we do/
  //1. app.set('views', path.join(__dirname, '/views'));
  //2. app.use('/', routes);
  return res.render('index');
});

// This route process the frontend actions
router.post('/action', actionCtrl.postAction);

router.get('/login', function(req, res){
  return res.send("mi Ruta login");
});

// Don't forget to export the router as an object
module.exports = router;
