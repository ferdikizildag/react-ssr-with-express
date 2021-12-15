import express from "express";
import ssr from "./routes/ssr";
import csr from "./routes/csr";
const app = express();

app.use(express.static("public"));

app.use("/ssr", ssr);
app.use("/csr", csr);

const port = process.env.PORT || 8080;
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});
