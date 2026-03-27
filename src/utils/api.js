const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export function getNews(query) {
  if (!query || !query.trim()) {
    return Promise.resolve([]);
  }

  const today = new Date();
  const weekAgo = new Date();
  weekAgo.setDate(today.getDate() - 7);

  const params = new URLSearchParams({
    q: query.trim(),
    from: weekAgo.toISOString().split("T")[0],
    to: today.toISOString().split("T")[0],
    pageSize: "100",
    sortBy: "publishedAt",
    language: "en",
    apiKey: API_KEY,
  });

  return fetch(`${BASE_URL}?${params}`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    })
    .then((data) =>
      (data.articles || []).map((article, index) => ({
        id: index,
        title: article.title || "Untitled",
        description: article.description || "No description available.",
        date: new Date(article.publishedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        source: article.source?.name || "Unknown",
        image: article.urlToImage || "https://via.placeholder.com/300",
        url: article.url,
      })),
    );
}
