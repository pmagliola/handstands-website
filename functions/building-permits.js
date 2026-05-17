export async function onRequest(context) {
  const url = new URL("/building-permits/index.html", context.request.url);
  return context.env.ASSETS.fetch(url.toString());
}
