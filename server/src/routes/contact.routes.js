import {Router} from 'express'
import { create,all } from '../controllers/contact.controller.js'
import { verifyJWT } from '../middlewares/verifyJWT.js'

const router = Router()

router.post('/',create)
router.get('/',verifyJWT,all)

export default router