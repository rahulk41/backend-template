export default function otpTemplate({
  otp,
  url,
}: {
  otp: string;
  url: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse:collapse;border-spacing:0;margin:0;}
    div, td {padding:0;}
    div {margin:0 !important;}
  </style>
  <noscript>
  <xml>
    <o:OfficeDocumentSettings>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;word-spacing:normal;background-color:#f7f7f7;">
  <div role="article" aria-roledescription="email" lang="en" style="text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#f7f7f7;">
    <table role="presentation" style="width:100%;border:none;border-spacing:0;">
      <tr>
        <td align="center" style="padding:0;">
          <!--[if mso]>
          <table role="presentation" align="center" style="width:600px;">
          <tr>
          <td>
          <![endif]-->
          <table role="presentation" style="width:94%;max-width:600px;border:none;border-spacing:0;text-align:left;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#363636;">
            <!-- Logo and Header -->
            <tr>
              <td style="padding:40px 30px 30px 30px;text-align:center;font-size:24px;font-weight:bold;">
                <a href="https://yourcompany.com" style="text-decoration:none;">
                  <img src="https://via.placeholder.com/150x50" width="150" alt="Logo" style="width:150px;max-width:80%;height:auto;border:none;text-decoration:none;color:#ffffff;">
                </a>
              </td>
            </tr>
            <!-- Main Content Area -->
            <tr>
              <td style="padding:30px;background-color:#ffffff;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                <h1 style="margin-top:0;margin-bottom:16px;font-size:26px;line-height:32px;font-weight:bold;letter-spacing:-0.02em;color:#4338ca;">Verify Your Email</h1>
                <p style="margin:0;margin-bottom:24px;font-size:16px;line-height:24px;">We need to verify your email address. Please use the verification code below to complete your registration:</p>
                <div style="padding:20px;background-color:#f3f4f6;border-radius:6px;text-align:center;margin-bottom:24px;">
                  <p style="margin:0;font-size:14px;line-height:20px;color:#6b7280;">Your verification code is:</p>
                  <p style="margin:0;font-size:32px;line-height:40px;font-weight:bold;letter-spacing:4px;color:#4338ca;font-family:monospace;">${otp}</p>
                </div>
                <p style="margin:0;margin-bottom:24px;font-size:16px;line-height:24px;">This code will expire in <strong>10 minutes</strong>. If you didn't request this code, you can safely ignore this email.</p>
                <p style="margin:0;margin-bottom:24px;font-size:16px;line-height:24px;">Alternatively, you can click the button below to verify your email:</p>
                <!-- Button : BEGIN -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: auto;">
                  <tr>
                    <td style="border-radius:4px;background:#4338ca;text-align:center;">
                      <a href="${url}" target="_blank" style="display:inline-block;padding:16px 36px;font-size:16px;color:#ffffff;font-weight:bold;text-decoration:none;border-radius:4px;">
                        Verify Email
                      </a>
                    </td>
                  </tr>
                </table>
                <!-- Button : END -->
                <p style="margin:24px 0 0 0;font-size:14px;line-height:20px;color:#6b7280;">If the button doesn't work, you can also copy and paste this URL into your browser:</p>
                <p style="margin:8px 0 0 0;font-size:14px;line-height:20px;color:#6b7280;word-break:break-all;">${url}</p>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding:30px;text-align:center;font-size:14px;background-color:#f7f7f7;color:#6b7280;">
                <p style="margin:0;margin-bottom:16px;font-size:14px;line-height:20px;">&copy; 2024 Your Company. All rights reserved.</p>
                <p style="margin:0;font-size:14px;line-height:20px;">
                  If you have any questions, please contact our support team at 
                  <a href="mailto:support@cosedge.com" style="color:#4338ca;text-decoration:underline;">support@cosedge.com</a>
                </p>
                <p style="margin:16px 0 0 0;font-size:14px;line-height:20px;">
                  <a href="https://yourcompany.com/terms" style="color:#6b7280;text-decoration:underline;margin-right:10px;">Terms of Service</a> • 
                  <a href="https://yourcompany.com/privacy" style="color:#6b7280;text-decoration:underline;margin-left:10px;">Privacy Policy</a>
                </p>
              </td>
            </tr>
          </table>
          <!--[if mso]>
          </td>
          </tr>
          </table>
          <![endif]-->
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
 `;
}
