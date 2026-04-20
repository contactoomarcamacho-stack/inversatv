Deno.serve(async (req) => {
  const url = new URL(req.url);
  const target = url.searchParams.get("url");
  
  if (!target) {
    return new Response("Missing url param", { status: 400 });
  }

  const res = await fetch(target, {
    headers: { "User-Agent": "Mozilla/5.0" }
  });

  const headers = new Headers(res.headers);
  headers.set("Access-Control-Allow-Origin", "*");

  return new Response(res.body, {
    status: res.status,
    headers
  });
});
