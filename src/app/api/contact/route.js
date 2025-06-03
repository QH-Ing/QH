import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { nombre, email, telefono, mensaje } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "mail.qhingenieria.com.ar",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Nueva consulta desde el formulario web",
      html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || "No informado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error enviando email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
