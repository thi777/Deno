import { Router } from "https://deno.land/x/oak/mod.ts";

import {
  getAll,
  getById,
  create,
  update,
  remove,
} from "../src/app/controllers/usersController/createUsers.ts";

export const router = new Router();

router
  .get("/user", getAll)
  .get("/user/:id", getById)
  .post("/user", create)
  .put("/user/:id", update)
  .delete("/user/:id", remove);
