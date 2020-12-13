const {Router} = require('express');
const router = Router();

const {getUsers} = require('../controllers/index.controller');


router.get('/api', getUsers);

module.exports = router;