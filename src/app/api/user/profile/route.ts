import { connectToMongo } from "@/db/dbInit";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user.model";
import { getDataFromToken } from "@/helper/getDataFromToken";
import { use } from "react";

connectToMongo();
export async function POST(req: NextRequest) {

  const {id} = await getDataFromToken(req)
  const user = await User.findOne({_id:id}).select('-password')

  return NextResponse.json({
    message: "User found",
    data : user
  });
}
