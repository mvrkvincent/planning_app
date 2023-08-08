import express from "express";

const app = express();

app.get("/firstwordsaidonline", (_, res) => res.json("lo"));
//
// TODO: Create + Ignore .config
//
const callback = () => console.log("Planning App is running on port 5001!");
app.listen(5001, callback);
