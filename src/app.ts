import { Application } from 'https://deno.land/x/oak/mod.ts';
import "https://deno.land/x/dotenv/load.ts";

import { router } from "./routes.ts";

const env = Deno.env.toObject()
const PORT = env.PORT 
const HOST = env.HOST 

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT}...`)

await app.listen(`${HOST}:${PORT}`)
