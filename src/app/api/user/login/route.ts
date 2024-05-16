import { NextRequest, NextResponse } from "next/server";
import { connectToMongo } from "@/db/dbInit";
import { User } from "@/models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connectToMongo();
export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json(
      {
        message: "User Not Exist , Please signup First",
        success : false
      },
      { status: 400 }
    );
  }

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    return NextResponse.json(
      {
        message: "Invalid Credential , Try Again",
        success : false
      },
      { status: 400 }
    );
  }

  const tokenData = {
    id: user._id,
    username: user.username,
    email: user.email,
  };

  const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!);
  
  const response = NextResponse.json({
    message: "Login Successful",
    success : true
  });

  response.cookies.set("token", token, {
    httpOnly: true,
  });

  return response;
}
