const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const results = document.querySelector("#results");

searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value;

    console.log(searchTerm);
});
const image = document.getElementById('myImage');

// Add a click event listener
image.addEventListener('click', function() {
    // Redirect to the URL
    window.location.href = 'https://pixabay.com/photos/flag-sea-turkey-kusadasi-fisherman-1244649';
});