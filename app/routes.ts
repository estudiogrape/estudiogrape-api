import { Router } from "express";
import { FindContatoController } from "./controllers/FindContatoController";
import { CreateContatoController } from "./controllers/CreateContatoController";
import { GoodSunCreateEmail } from "./controllers/GoodSunCreateEmail";

const router = Router();
const example = {};

const contactFind = new FindContatoController();
const contactCreate = new CreateContatoController();

router.get("/contact/find", contactFind.handle);
router.post("/contact/create", contactCreate.handle);

router.get("/", function (req, res) {
    res.json(example);
});


// GOOD SUN
const goodSunCreateEmail = new GoodSunCreateEmail();
router.post("/goodsun/email/create", goodSunCreateEmail.handle);

export { router };
