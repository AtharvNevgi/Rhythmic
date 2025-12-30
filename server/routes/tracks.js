import express  from "express";
import {getTracks} from "../controllers/tracksController.js";

const tracksRouter = express.Router();

tracksRouter.get("/", getTracks);

export default tracksRouter;