import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const theHtml = `
    <html>
    <head><title>Client Side Rendering</title></head>
    <body>
    <h1>Client Side Render</h1>
    <div id="root"></div>
    <script src="/app.js" charset="utf-8"></script>
    <script src="/vendor.js" charset="utf-8"></script>
    </body>
    </html>
    `;
  res.send(theHtml);
});

export default router;
