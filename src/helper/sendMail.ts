import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import { FORGOTPASS, VERIFY } from "@/constants";
import { User } from "@/models/user.model";

export const sendMail = async (
  email: string,
  emailType: string,
  userId: any
) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === VERIFY) {
      await User.findByIdAndUpdate(userId, {
        verifyEmailToken: encodeURI(hashedToken),
        verifyEmailTokenExpiry: Date.now() + 3600000, // 1 hour
      });
    } else if (emailType === FORGOTPASS) {
      await User.findByIdAndUpdate(userId, {
        changePasswordToken: hashedToken,
        changePasswordTokenExpiry: Date.now() + 3600000, // 1 hour
      });
    }

    let transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const mailOptions = {
      from: "nextapp@gmail.com",
      to: email,
      subject:
        emailType === VERIFY ? "Verify your email" : "Reset your password",
      html: `<p><a href="${process.env.DOMAIN}/verifyemail?token=${encodeURI(
        hashedToken
      )}">Click here</a> to ${
        emailType === "VERIFY" ? "Verify your email" : "Reset your password"
      }
        or copy and paste the link below in your browser. <br> <strong> ${
          process.env.DOMAIN
        }/verifyemail?token=${encodeURI(hashedToken)}
        </strong></p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
};
