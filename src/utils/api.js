const BASE_URL = "";

export const getNews = (keyword) => {
  return fetch(`${BASE_URL}/news?keyword=${encodeURIComponent(keyword)}`).then(
    (res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    },
  );
};
