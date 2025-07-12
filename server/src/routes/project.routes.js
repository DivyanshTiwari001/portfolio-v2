import {Router} from 'express'
import { all, create } from '../controllers/project.controller.js'
import { verifyJWT } from '../middlewares/verifyJWT.js'

const router = Router()

router.post('/',verifyJWT,create)
router.get('/',all)


export default router