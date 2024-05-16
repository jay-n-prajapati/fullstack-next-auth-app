import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = async (req: NextRequest) => {
  try {
    // temporary for testing change to req.cookies here
    const {token} = await req.json();    
    const decodedToken: any = jwt.verify(token.value, process.env.TOKEN_SECRET!);    
    return decodedToken;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
