import { Resend } from "resend";
import type { ContactType } from "~~/shared/types/contact";
export default defineEventHandler(async (event) => {
  const body: ContactType = await readBody<ContactType>(event);

  const config = useRuntimeConfig();

  try {
    const resend = new Resend(config.resendApiKey);

    resend.emails.send({
      from: config.contactEmailFrom,
      to: config.contactEmailTo,
      replyTo: body.mail,
      subject: `Nouveau contact sur le site - ${body.firstname} ${body.lastname}`,
      html: `
  <!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #090d16; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0; -webkit-font-smoothing: antialiased;">
      
      <!-- Conteneur principal -->
      <div style="max-width: 600px; margin: 40px auto; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);">
        
        <!-- En-tête -->
        <div style="padding: 24px 32px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(17, 24, 39, 0) 100%); border-bottom: 1px solid #1f2937;">
          <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #10b981; display: block; margin-bottom: 4px;">Portfolio</span>
          <h1 style="margin: 0; font-size: 20px; font-weight: 600; color: #f8fafc;">Nouveau message de contact</h1>
        </div>

        <!-- Contenu -->
        <div style="padding: 32px;">
          
          <!-- Grid des infos expéditeur -->
          <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-size: 14px; color: #94a3b8; width: 120px; vertical-align: top;">Expéditeur</td>
              <td style="padding: 8px 0; font-size: 14px; color: #f1f5f9; font-weight: 600; vertical-align: top;">${body.firstname}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 14px; color: #94a3b8; vertical-align: top;">E-mail</td>
              <td style="padding: 8px 0; font-size: 14px; vertical-align: top;">
                <a href="mailto:${body.mail}" style="color: #10b981; text-decoration: none; font-weight: 500;">${body.mail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 14px; color: #94a3b8; vertical-align: top;">Téléphone</td>
              <td style="padding: 8px 0; font-size: 14px; color: ${body.phonenumber ? "#f1f5f9" : "#64748b"}; vertical-align: top;">
                ${body.phonenumber ? body.phonenumber : "Non renseigné"}
              </td>
            </tr>
            ${
              body.reasons
                ? `
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #94a3b8; vertical-align: top;">Besoin(s)</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #38bdf8; font-weight: 500; vertical-align: top;">
                      ${Array.isArray(body.reasons) ? body.reasons.join(", ") : body.reasons}
                    </td>
                  </tr>
                `
                : ""
            }
          </table>

          <!-- Séparateur -->
          <hr style="border: none; border-top: 1px solid #1f2937; margin: 24px 0;" />

          <!-- Bloc Message -->
          <div style="margin-top: 20px;">
            <p style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin: 0 0 12px 0;">Message</p>
            <div style="background-color: #0b0f19; border: 1px solid #1f2937; border-left: 3px solid #10b981; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #cbd5e1; white-space: pre-wrap;">
              ${body.details}
            </div>
          </div>

        </div>

        <!-- Footer minimaliste -->
        <div style="padding: 16px 32px; background-color: #0b0f19; border-top: 1px solid #1f2937; text-align: center; font-size: 12px; color: #64748b;">
          Envoyé automatiquement depuis le formulaire de contact.
        </div>

      </div>
    </body>
  </html>
`,
    });
  } catch (e: unknown) {
    throw createError({
      statusCode: 500,
      statusMessage: String(e),
    });
  }
});
