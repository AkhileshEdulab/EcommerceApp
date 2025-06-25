const VerificationEmail = (username, otp) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      color:#333
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      background-color: #4CAF50;
      padding: 20px;
      color: white;
      border-radius: 8px 8px 0 0;
    }
    .content {
      padding: 20px;
      color: #333333;
    }
    .otp {
      font-size: 24px;
      font-weight: bold;
      color: #4CAF50;
      margin: 20px 0;
      text-align: center;
    }
    .footer {
      font-size: 12px;
      color: #777777;
      text-align: center;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h2>Email Verification</h2>
    </div>
    <div class="content">
      <p>Hi <strong>${username}</strong>,</p>
      <p>Thank you for signing up. Please use the following One-Time Password (OTP) to verify your email address:</p>
      <div class="otp">${otp}</div>
      <p>This OTP is valid for the next 10 minutes. If you did not request this, please ignore this email.</p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`;
};

export default VerificationEmail;