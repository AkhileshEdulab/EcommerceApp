import {sendEmail} from "./emailService.js";

//  const sendEmailFun = async({sendTo, subject, text, html})=>{
//       console.log('📧 sendEmailFun called with:', {sendTo, subject });
//     const result = await sendEmail(sendTo, subject, text, html)
//     if(result.success){
//         return true;
//     }else{
//         return false;
//     }
// }

const sendEmailFun = async ({ to, subject, text, html }) => {
    console.log('📧 sendEmailFun called with:', { to, subject });

    if (!to) {
        console.error("❌ sendEmailFun error: 'to' is undefined.");
        return false;
    }

    const result = await sendEmail(to, subject, text, html);
    return result?.success ?? false;
};


export default sendEmailFun;