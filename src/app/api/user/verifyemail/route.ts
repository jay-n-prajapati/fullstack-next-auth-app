import { connectToMongo } from "@/db/dbInit";
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

connectToMongo();
export async function POST(req: NextRequest) {
  try {
    const { verifyEmailToken } = await req.json();
    
    // getting user who matches with verify mail token and token is not expired
    const user = await User.findOne(
      { verifyEmailToken , verifyEmailTokenExpiry: {$gt:Date.now()} }
    );
    
    if (!user) {
      return NextResponse.json(
        {
          message: "Token Expired",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    user.isVerified = true;
    user.verifyEMailToken = null;
    user.verifyEmailTokenExpiry = null;

    await user.save();
    return NextResponse.json({
      message: "Email verified successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    },{
      status : 500
    });
  }
}
