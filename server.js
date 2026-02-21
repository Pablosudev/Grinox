import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

// Cargar las variables de entorno desde .env
dotenv.config();

console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS:", process.env.MAIL_PASS);

const corsOptions = {
  origin: "http://localhost:5173", // Permite solicitudes solo desde este dominio
  methods: ["GET", "POST"], // Métodos permitidos
  allowedHeaders: ["Content-Type"], // Encabezados permitidos
};

// Middleware
app.use(cors());
app.use(express.json());
app.use(cors(corsOptions));

console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS:", process.env.MAIL_PASS);
// Configuración del servidor SMTP con Nodemailer
const transporter = nodemailer.createTransport({
  // service: "gmail",
  host: process.env.MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
 
});

// Ruta para manejar la solicitud de contacto
app.post("/api/contact", (req, res) => {
  const { name, company, email, phone, message } = req.body;
   console.log(req.body);
  // Verificación de campos obligatorios
  if (!name || !company || !email || !phone || !message) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios." });
  }

  // Configuración del correo que se enviará
  const mailOptions = {
    from:email,
    to: process.env.MAIL_USER,
    subject: `Nuevo mensaje de ${name}`,
    text: `
      Nombre: ${name}
      Empresa: ${company}
      Teléfono: ${phone}
      Email: ${email}
      Mensaje: ${message}
    `,
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error al enviar el correo:", error); // Esto mostrará más detalles del error en la consola
      return res
        .status(500)
        .json({ message: "Error al enviar el mensaje", error: error.message });
    }
    res.status(200).json({ message: "Correo enviado con éxito" });
  });
});

// Iniciar el servidor en el puerto 5000
app.listen(5000, () => {
  console.log("Servidor backend en http://localhost:5000");
});
