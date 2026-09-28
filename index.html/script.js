const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const results = document.getElementById("results");
const resultCount = document.getElementById("resultCount");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const query = input.value.trim();

    if (query === "") {
        return;
    }

    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url&iiurlwidth=300&format=json&origin=*`;

    const response = await fetch(url);

    if (!response.ok) {
        return;
    }

    const data = await response.json();

    results.innerHTML = "";

    const pages = Object.values(data.query?.pages || {});

    resultCount.textContent =
        `Showing ${pages.length} results for "${query}"`;

    pages.forEach(function (page) {

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = page.imageinfo[0].thumburl;
        img.alt = page.title;

        const title = document.createElement("p");
        title.textContent = page.title.replace("File:", "");

        card.appendChild(img);
        card.appendChild(title);

        results.appendChild(card);
    });
});

try {
  const res = await fetch(url);
  if (!res.ok) throw new Error(res.status);   // bad status -> jump to catch
  const data = await res.json();
  const items = Object.values(data.query.pages);

  if (items.length === 0) {
    status.textContent = "No results. Try another search.";  // EMPTY state
  } else {
    render(items);                                           // RESULTS state
  }
} catch (err) {
  status.textContent = "Something went wrong. Please try again."; // ERROR state
}