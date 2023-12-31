import express from 'express'
import { deleteUser, test, updateUser, getUserListings, getUserInfo } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.route('/test').get(test)
router.post('/update/:id', verifyToken , updateUser)
router.delete('/delete/:id', verifyToken , deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', verifyToken, getUserInfo)

export default router