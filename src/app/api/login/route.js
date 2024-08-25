import { NextResponse } from "next/server";

export  function GET(params) {

    return new NextResponse(JSON.stringify({msg:"im enjoying this class"}), {status: 200})
}
// export const GET = async ()=>{
  //  return new NextResponse(JSON.stringify({msg: ""im enjoying this class""}))
//}