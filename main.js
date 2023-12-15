// if mu type ka diri bin automatic nani e enter lang sa keyboard

var searchInput = document.getElementById('search-input');
var goIcon = document.getElementById('go-icon');
var resultMessage = document.getElementById('result-message');

// Show/hide search and go icons based on input
searchInput.addEventListener('input', function () {
    if (searchInput.value.trim() !== '') {
        document.getElementById('search-button').style.display = 'none';
        goIcon.style.display = 'inline-block';
    } else {
        document.getElementById('search-button').style.display = 'inline-block';
        goIcon.style.display = 'none';
    }
});

// Toggle visibility of the search input and go icon on search button click
document.getElementById('search-button').addEventListener('click', function () {
    searchInput.style.display = (searchInput.style.display === 'none' || searchInput.style.display === '') ? 'inline-block' : 'none';
    goIcon.style.display = 'none';
});

// Handle the click event on the go icon
goIcon.addEventListener('click', search);

// Handle the "Enter" key press event
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        search();
    }
});

// kevin diri ra add ug mga search query sa search icon i copy lang ang kanang mga else if 

// Search function
function search() {
    var searchQuery = searchInput.value.trim().toLowerCase();

    // Customize the redirection or result message based on the lowercase search query
    if (searchQuery === 'ge1' || searchQuery === 'ge 1') {
        window.location.href = "ge1.html"; // Replace with the actual URL for GE1 books
        resultMessage.style.display = 'none'; // Hide the result message
    } else if (searchQuery === 'ge2' || searchQuery === 'ge 2') {
        window.location.href = "ge2.html"; // Replace with the actual URL for GE2 books
        resultMessage.style.display = 'none'; // Hide the result message
    } else if (searchQuery === 'ge3' || searchQuery === 'ge 3') {
        window.location.href = "ge3.html"; // Replace with the actual URL for GE3 books
        resultMessage.style.display = 'none'; // Hide the result message
    } else {
        // Display a result message for other search queries
        resultMessage.style.display = 'block';
    }
}


// dark themee 
var themeButton = document.getElementById('theme-button');
var body = document.body;

// Add an event listener to the theme button
themeButton.addEventListener('click', function () {
    // Toggle the dark mode class on the body element
    body.classList.toggle('dark-mode');

    // Customize additional dark mode logic here if needed
});


//log in button ni sya
var loginButton = document.getElementById('login-button');

// Add an event listener to the login button
loginButton.addEventListener('click', function () {
    // Redirect to the login page (change the URL as needed)
    window.location.href = "login.html";
});