const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const results = document.querySelector("#results");

searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value;

    console.log(searchTerm);
});