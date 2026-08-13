import { HTTPError } from "h3";
import { Resend } from "resend";
import type { ContactType } from "~~/shared/types/contact";
export default defineEventHandler(async (event) => {
  const body: ContactType = await readBody<ContactType>(event);

  try {
    const resend = new Resend(useRuntimeConfig().resendApiKey);

    resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "contact@alexandre-larue.fr",
      replyTo: body.mail,
      subject: `Nouveau contact sur le site - ${body.firstname} ${body.lastname}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${body.firstname}</p>
        <p><strong>E-mail :</strong> ${body.mail}</p>
        <p><strong>N° de Téléphone :</strong>${body.phonenumber ? body.phonenumber : "Non renseigné"}</p>
        <p><strong>Raison(s) :</strong>${body.reasons}</p>
        <blockquote style="background: #f4f4f4; padding: 10px; border-left: 4px solid #ccc;">
          ${body.details.replace(/\n/g, "<br>")}
        </blockquote>
      `,
    });
  } catch (e: unknown) {
    throw createError({
      statusCode: 500,
      statusMessage: String(e),
    });
  }
});
