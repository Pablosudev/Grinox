import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

// Cargar las variables de entorno desde .env
dotenv.config();

console.log("✅ Variables de entorno cargadas:");
console.log("MAIL_HOST:", process.env.MAIL_HOST);
console.log("MAIL_PORT:", process.env.MAIL_PORT);
console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_SECURE:", process.env.MAIL_SECURE);

// Configuración CORS
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

app.use(express.json());

// Configuración del servidor SMTP con los datos de Arsys
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,        // smtp.serviciodecorreo.es
  port: parseInt(process.env.MAIL_PORT) || 465,
  secure: true,                        // SSL/TLS
  auth: {
    user: process.env.MAIL_USER,       // administracion@grinoxmontajeindustrial.com
    pass: process.env.MAIL_PASS,       // Tu contraseña
  },
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000
});

// Verificar la conexión SMTP
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Error en configuración SMTP:", error.message);
  } else {
    console.log("✅ Servidor SMTP listo para enviar correos");
  }
});

// Ruta de prueba
app.get("/api/test", (req, res) => {
  res.json({ 
    message: "Servidor funcionando correctamente",
    smtp: process.env.MAIL_HOST
  });
});

// Ruta para manejar la solicitud de contacto
app.post("/api/contact", (req, res) => {
  const { name, company, email, phone, message } = req.body;
  
  console.log("📨 Datos recibidos:", { name, company, email, phone, message });

  // Verificación de campos obligatorios
  if (!name || !company || !email || !phone || !message) {
    return res.status(400).json({ message: "Todos los campos son obligatorios." });
  }

  // Configuración del correo - CORREGIDA
  const mailOptions = {
    from: `"Formulario Web Grinox" <${process.env.MAIL_USER}>`, // Usa tu cuenta de Arsys
    to: process.env.MAIL_FROM, // administracion@grinoxmontajeindustrial.com
    replyTo: email, // El email del cliente para responder
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
      
      ========================
      IMPORTANTE: Responder a: ${email}
    `,
    html: `
      <h2>📋 Nueva solicitud de presupuesto</h2>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: #f0f0f0;">
          <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Campo</th>
          <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Valor</th>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Nombre</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Empresa</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${company}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Teléfono</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">
            <a href="mailto:${email}">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Mensaje</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${message.replace(/\n/g, '<br>')}</td>
        </tr>
      </table>
      
      <p style="color: #666; font-size: 0.9em; border-top: 2px solid #eee; padding-top: 10px;">
        ⚡ Puedes responder directamente a este correo o hacer clic en el email del cliente: 
        <a href="mailto:${email}">${email}</a>
      </p>
    `
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("❌ Error al enviar el correo:", error);
      return res.status(500).json({ 
        message: "Error al enviar el mensaje", 
        error: error.message 
      });
    }
    
    console.log("✅ Correo enviado con éxito:", info.messageId);
    res.status(200).json({ 
      message: "Correo enviado con éxito",
      info: "El mensaje se ha enviado correctamente"
    });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor backend en http://localhost:${PORT}`);
});