import {NextResponse} from "next/server"

export function middleware(request){
  console.log("middleware triggered");
  //return NextResponse.next();  //if need to avoid headerappend on authToken and userType

  //adding header content globally

  let response = NextResponse.next();
  response.headers.append("authToken","34534gDFG#$534");
  response.headers.append("userType","admin");
  return response;

}

//can add matching path in middleware if not given it matches to all 
export const config = {
  matcher : "/users/:userId",   //if we need multiple route add it in arrays
}




//connects with next response give changes in terminal

//middleware trigger for only given matcher if no matcher is given it trigger for all routes