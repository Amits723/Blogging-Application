import express from "express";
import { createUser,userLogin} from "../controllers/user-controller.js";

const router = express.Router();



//Handling routing for all HTTP Verbs
//auth route
router.post('/signUp',createUser);
router.post('/login',userLogin);


export default router;
