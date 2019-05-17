const Express = require("express");
const app = Express();
const bot = require("./bot");

app.get("/",(req,res)=>{
    console.log("pure get");
    res.send("testing");
})
app.get("/saymyname/:token", (req,res)=>{
    console.log("TOKEN PASTE REQUEST: ");
    bot.run(req.params.token);
    res.send("got it");
});

app.listen(process.env.PORT);