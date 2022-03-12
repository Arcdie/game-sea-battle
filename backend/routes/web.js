const router = require('express').Router();

const webControllers = require('../controllers/web');

router.get('/', webControllers.getMainPage);
router.get('/static/*', webControllers.getStaticFile);

module.exports = router;
