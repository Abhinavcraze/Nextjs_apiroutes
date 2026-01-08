import { NextResponse } from 'next/server';

export function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  
  const name = searchParams.get('name');
  const ageString = searchParams.get('age');

  if (!ageString) {
    //return new Response(JSON.stringify({ msg: "Hello" })   //nextResponse makes it easy
    return NextResponse.json(
      { error: `${name}, Please provide an 'age' parameter in the URL.` }, 
      { status: 400 } // Bad Request
    );
  }

  const age = parseInt(ageString); 

  let message = "";
  
  if (isNaN(age)) {
    return NextResponse.json({ error: "Age must be a number!" }, { status: 400 });
  } else if (age >= 18) {
    message = `${name}, You are ${age} years old. You are an Adult.`;
  } else {
    message = `${name}, You are ${age} years old. You are a Minor.`;
  }

  return NextResponse.json({ 
    success: true,
    data: message, 
    receivedAge: age 
  }, { status: 200 });
}


//url should be like this "http://localhost:3000/users?age=16"
//http://localhost:3000/users?age=16&name=abhinav
