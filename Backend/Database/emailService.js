// import http from 'http';
// import nodemailer from 'nodemailer';


// const transport = nodemailer.createTransport({
   
    
//         host:'smtp.gmail.com',
//         port:465,
//         secure:true,
//     auth:{
//         user:process.env.EMAIL,
//         pass:process.env.EMAIL_PASS,
        
//     }
// });

// async function sendEmail(to,subject,text,html) {
//     try {
//         const info = await transport.sendMail({
//             from:process.env.EMAIL,
//             to,
//             subject,
//             text,
//             html,
//         });
        
//         return{success:true,messageId:info.messageId};
//     } catch (error) {
//         console.error(`Error sending email:`,error);
//         return {success:false,error:error.message}
        
//     }
// }

// export default sendEmail;



import { config } from 'dotenv';
import http from 'http';
import nodemailer from 'nodemailer';

config({path:'./Config/config.env'})

const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
   pass:process.env.EMAIL_PASS,
  },
});

async function sendEmail(to, subject, text, html) {
  try {
    const info = await transport.sendMail({
      from: process.env.EMAIL,
      to,
      subject,
      text,
      html,
    });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`Error sending email:`, error);
    return { success: false, error: error.message };
  }
}

export {sendEmail};
