// /app/api/news/route.js (App Router) or /pages/api/news.js (Pages Router)
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get('country') || 'us';
  const category = searchParams.get('category') || 'general';
  const page = searchParams.get('page') || 1;
  const pageSize = searchParams.get('pageSize') || 12;

  const apiKey = process.env.NEWS_API_KEY;
  console.log("News API Key:", apiKey);

  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`);

  const data = await res.json();

  return Response.json(data, { status: res.status });
}
