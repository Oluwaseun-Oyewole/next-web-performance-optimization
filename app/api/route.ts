// export async function GET(request: Request) {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   return Response.json({ data: data });
// }

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get("id");
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`,
//     {
//       cache: "no-cache",
//     }
//   );
//   const data = await response?.json();
//   return Response.json({ data });
// }

import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const revalidate = 30;
export async function GET(request: NextRequest) {
  const searchParams = request?.nextUrl.searchParams;
  console.log("search params -- ", searchParams);
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  return new Response("Token for tokens", {
    status: 200,
    headers: { "Set-Cookie": `token=${token?.value}` },
  });
}
