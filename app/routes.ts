import { Router } from "express";
import { FindContatoController } from "./controllers/FindContatoController";
import { CreateContatoController } from "./controllers/CreateContatoController";

const router = Router();
const example = {};

const contactFind = new FindContatoController();
const contactCreate = new CreateContatoController();

router.get("/contact/find", contactFind.handle);
router.post("/contact/create", contactCreate.handle);

router.get("/", function (req, res) {
    res.json(example);
});

export { router };
