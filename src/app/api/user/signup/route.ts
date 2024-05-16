import { connectToMongo } from "@/db/dbInit";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user.model";
import bcrypt from "bcryptjs";
import { sendMail } from "@/helper/sendMail";
import { VERIFY } from "@/constants";

connectToMongo();
export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({
        message: "user already exist",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPass,
    });

    const savedUser = await newUser.save();

    // sending email for verification
    await sendMail(email, VERIFY, savedUser._id);

    return NextResponse.json({
      message: "user registered",
      user: savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    },{
      status:500
    });
  }
}
