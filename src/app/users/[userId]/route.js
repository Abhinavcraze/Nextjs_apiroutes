export async function GET(req, {params}){
  const {userId} = await params;
  return new Response(JSON.stringify({ id : userId}));
}

export async function POST(req){
  console.log(req);     //req comes from an middleware
  const data = await req.json();
  return new Response(JSON.stringify(data));
}