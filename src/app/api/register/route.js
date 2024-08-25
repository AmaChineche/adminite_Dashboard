import { NextResponse } from "next/server";

export  function GET(params) {

    return new NextResponse(JSON.stringify({msg:"this is my First GET request"}))
}