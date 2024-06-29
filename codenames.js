const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const RPC = require("discord-rpc");

const app = express();
const client = new RPC.Client({ transport: "ipc" });
const clientId = "847099781292490782";

app.use(cors());
app.use(bodyParser.json());

let playercount = "1";
let roomcode = "no room";
let username = "";
let team = "";
let gamecount = 1;
let teamscore = "";
const startdate = Date.now();

// Setup Discord RPC
client.on("ready", () => {
    console.log("RPC is ready");
    username = client.user.username;
    function setActivity() {
        client.request("SET_ACTIVITY", {
            pid: process.pid,
            activity: {
                details: `${username} playing ${team} ${teamscore}`,
                state: `${roomcode} #${gamecount}`,
                assets: {
                    large_image: "codenames",
                    large_text: "codenames"
                },
                party: {
                    id: clientId,
                    size: [parseInt(playercount), 4]
                },
                instance: true,
                timestamps: {
                    start: startdate
                }
            }
        }).catch(console.error);
    }
    setActivity();

    // data endpoint for extention
    app.post("/data", (req, res) => {
        console.log(req.body);
        playercount = req.body.playercount;
        roomcode = req.body.roomcode;
        username = req.body.username;
        team = req.body.team;
        gamecount = req.body.gamecount;
        teamscore = req.body.teamscore;
        setActivity();
        res.sendStatus(200);
    });

    app.listen(3000, () => {
        console.log("Server running on http://localhost:3000");
    });
});

client.login({ clientId }).catch(console.error);