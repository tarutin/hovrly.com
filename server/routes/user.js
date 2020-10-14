const router = require('express-promise-router')();
const { getUsers, signInUser, signUpUser } = require('../controllers/user')
const { validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/users').get(getUsers)

router.route('/users/register').post(validateBody(schemas.authSchema), signUpUser)

router.route('/users/login').post(signInUser)


module.exports = router;
