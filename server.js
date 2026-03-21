import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SMTP
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT, 10) || 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify((error) => {
  if (error) {
    console.log("❌ Error SMTP:", error.message);
    // No hacer nada más, solo loguear
  } else {
    console.log("✅ SMTP listo");
  }
});

// Test
app.get("/api/test", (req, res) => {
  console.log("✅ HIT REAL EN /api/test");
  res.json({
    ok: true,
    message: "Servidor funcionando correctamente",
  });
});

// Contacto
app.post("/api/contact", (req, res) => {
  const { name, company, email, phone, message } = req.body;

  if (!name || !company || !email || !phone || !message) {
    return res.status(400).json({
      message: "Todos los campos son obligatorios.",
    });
  }

  const mailOptions = {
    from: `"Formulario Web Grinox" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_FROM,
    replyTo: email,
    subject: `Nueva solicitud de presupuesto - ${name} (${company})`,
    text: `
SOLICITUD DE PRESUPUESTO
========================

De: ${name}
Empresa: ${company}
Teléfono: ${phone}
Email de contacto: ${email}

MENSAJE:
${message}
    `,
    html: `
      <h2>Nueva solicitud de presupuesto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Empresa:</strong> ${company}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Mensaje:</strong><br>${message.replace(/\n/g, "<br>")}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("❌ Error enviando correo:", error);
      return res.status(500).json({
        message: "Error al enviar el mensaje",
        error: error.message,
      });
    }

    console.log("✅ Correo enviado:", info.messageId);
    return res.status(200).json({
      message: "Correo enviado con éxito",
    });
  });
});

// Servir React build
app.use(express.static(path.join(__dirname, "dist")));

// ✅ Correcto para Express 5
app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ App escuchando en puerto ${PORT}`);
});