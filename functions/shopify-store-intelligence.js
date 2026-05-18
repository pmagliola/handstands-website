export async function onRequest(context) {
  const url = new URL("/shopify-store-intelligence/index.html", context.request.url);
  return context.env.ASSETS.fetch(url.toString());
}
