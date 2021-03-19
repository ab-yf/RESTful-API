
import express from 'express';
import { thisIsUserHomePage, letsCreateAUser, letsGetAUser, letsDeleteAUser, letsPatchAUser } from '../controllers/users.js';


// Intializing our router //
const router = express.Router(); 



/* All the routes below are starting with users, hence we do not
   need to add '/users' to our function */ 

router.get('/', thisIsUserHomePage); 

router.post('/' , letsCreateAUser); 

router.get('/:id', letsGetAUser )

router.delete ('/:id' , letsDeleteAUser)

router.patch ( '/:id', letsPatchAUser)


export default router;