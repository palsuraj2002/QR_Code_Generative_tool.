const express = require("express");
const qrcode = require("qrcode"); //QR code library
const router = express.Router();

router.post("/generate-qr", async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(400).send("Data is required to generate QR code.");
    }

    const qrCodeDataURL = await qrcode.toDataURL(data);
    res.json({ qrCode: qrCodeDataURL });
  } catch (error) {
    console.error("Error generating QR code:", error);
    res.status(500).send("Failed to generate QR code");
  }
});

module.exports = router;

