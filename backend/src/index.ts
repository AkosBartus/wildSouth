import "express-async-errors";
import express from "express";
import cors from "cors";
import { logger } from "./middleware/logger";
import fs from "fs";
import { SlotMachine, SlotMachineSchema } from "./models/slot-machine.model";
import { User, UserSchema } from "./models/user.model";

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

const slotMachineFilePath = "../database/slot-machine.json"
const userFilePath = "../database/user.json"

const SlotMachine: SlotMachine[] = JSON.parse(fs.readFileSync(slotMachineFilePath, "utf8"))
const user: User[] = JSON.parse(fs.readFileSync(userFilePath, "utf8"))

app.get("/api/slot-machine", (req, res) => {
    // A slot adatai, pl.: Jelenlegi nyerővonalak, kifizetési táblák.
    return res.sendStatus(204)
})

app.post("/api/spin", (req, res) => {
    /* 
        A játékos által választott érme (pénz/pörgetés) értéke, 
        a pörgetés eredménye, pl.: nyerő kombináció és nyeremény
    */
})

app.patch("/api/user/:userId/balance", (res, req) => {
    // A felhasználó egyenlegének frissítése
})

app.get("/api/user/:userId", (req, res) => {
    // A felhasználó adatai kiírása a kliensre
})
