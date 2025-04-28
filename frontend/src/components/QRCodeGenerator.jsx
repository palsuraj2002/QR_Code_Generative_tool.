import React, { useState, useRef } from "react";
import axios from "axios";

const QRCodeGenerator = () => {
  const [data, setData] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const qrCodeRef = useRef(null);

  const generateQRCode = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(
        "http://localhost:3000/tools/generate-qr",
        {
          data,
        }
      );
      setQrCode(response.data.qrCode);
    } catch (err) {
      setError(err.message || "An error occurred while generating QR code.");
      setQrCode("");
    } finally {
      setLoading(false);
    }
  };

  const downloadQRCode = () => {
    if (qrCodeRef.current) {
      const link = document.createElement("a");
      link.href = qrCodeRef.current.src;
      link.download = "qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "300px",
          border: "1px dashed rgba(7, 7, 7, 0.75)",
          backgroundColor: "rgb(182, 206, 207)",
          color: "rgb(0, 0, 0)",
          borderRadius: "10px",
          padding: "10px",
          margin: "10px 10px",
        }}
      >
        <h2
          style={{
            padding: "5px",
            margin: "10px 10px",
          }}
        >
          QR Code Generator❣️
        </h2>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter Url Or Link"
          style={{
            width: "90%",
            border: "1px solid rgb(175, 178, 180)",
            padding: "10px",
            margin: "15px 15px",
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "15px",
            fontSize: "18px",
          }}
        />
        <button
          onClick={generateQRCode}
          disabled={loading}
          style={{
            width: "90%",
            border: "none",
            padding: "10px",
            margin: "15px 15px",
            backgroundColor: "rgb(253, 249, 9)",
            color: "rgb(73, 72, 72)",
            borderRadius: "15px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          {loading ? "Generating..." : "Click to Generate"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {qrCode && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={qrCode}
              alt="QR Code"
              style={{ borderRadius: "15px", marginBottom: "10px" }}
              ref={qrCodeRef}
            />
            <p style={{ textAlign: "center", marginBottom: "10px" }}>
              Scan this QR code📷 or Download🔽
            </p>
            <button
              onClick={downloadQRCode}
              style={{
                width: "90%",
                border: "none",
                padding: "10px",
                margin: "5px 15px",
                backgroundColor: "rgb(68, 165, 235)",
                color: "white",
                borderRadius: "15px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default QRCodeGenerator;