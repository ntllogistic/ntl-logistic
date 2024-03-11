"use server";

import { createTransport } from "nodemailer";

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;
const recipient = process.env.EMAIL_RECIPIENT;

const transporter = createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

export async function sendForm(formData: FormData) {
  const firstName = formData.get("first-name");
  const email = formData.get("email");
  const message = formData.get("message");
  try {
    console.log("feaefaf");
    const err = await new Promise<string>((resolve, reject) => {
      transporter.sendMail(
        {
          from: user,
          to: recipient,
          subject: `Nowe zatwierdzenie formularza ${new Date().toLocaleDateString()} - NTL LOGISTIC`,
          text: `
Imię: ${firstName}
E-mail: ${email}
Wiadomość: 
${message}
            `,
        },
        (error) => {
          if (error) {
            console.log({ error: error.message || "efafeafaf" });
            reject(error.message);
          } else {
            resolve("");
          }
        }
      );
    });
    return { error: err ? "Wystąpił błąd, spróbuj ponownie później!" : null };
  } catch (err) {
    console.log(err);
    return {
      error:
        typeof err === "string"
          ? err
          : "Wystąpił błąd, spróbuj ponownie później!",
    };
  }
}
