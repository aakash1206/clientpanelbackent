import express from "express";
import { createClientController, deleteClientController, getClientController, getClientsController, updateClientController } from "../controllers/clientController.js";

export let routes = express.Router()


routes.post("/create", createClientController)
routes.get("/get-all-clients", getClientsController)
routes.get("/get-single-client/:id", getClientController)
routes.put("/update-single/:id", updateClientController)
routes.delete("/delete/:id", deleteClientController)


