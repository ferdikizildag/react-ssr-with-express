import express from "express";
import App from "../client/app";
import React from "react";
import { renderToString } from "react-dom/server";

const router = express.Router();

router.get("/", async (req, res) => {
  const reactComp = renderToString(<App />);
  const theHtml = `
    <html>
    <head><title>Server Side Rendering</title></head>
    <body>
    <h1>Server Side Render</h1>
    <div id="root">${reactComp}</div>
    <script src="/app.js" charset="utf-8"></script>
    <script src="/vendor.js" charset="utf-8"></script>
    </body>
    </html>
    `;
  res.send(theHtml);
});

export default router;
