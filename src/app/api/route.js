export function GET(req){
  //return new Response(JSON.stringify({msg : "Hello User!"})   // run perfectly
  return new Response(JSON.stringify({msg : "Hello User!"}),
    { 
      status : 200 ,
      headers: { 
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json',
        'My-Custom-Header': 'ThunderClientTest' // Example custom header
      }
    }); //gives 500 internal server error while using GET on thunder client
} //add header if we need

export async function POST(req){
  // console.log(req.body); //To showcase an readable stream
  const data = await req.json(); //in json format
  console.log(data);

  //return new Response(JSON.stringify({msg : "Data Recieved!"}));   //it also works
    return redirect("/");
}


//api data from thunder client add a array of object in body on the POST
//thunder client  ----> alternative for postman which used in vs code itself


//status 200- ok
//404 - error
//500 - interval server error