// Get the search input element
const searchInput = document.getElementById('search');

// Get the list element
const listItem = document.getElementById('list');
const listItems = list.getElementsByTagName('p');

// Add an event listener to the search input
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    // Loop through the list items
    for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        const text = listItem.textContent.toLowerCase();

        // Check if the search term is found in the list item
        if (text.includes(searchTerm)) {
            listItem.style.display = 'block'; // Show the item
        } else {
            listItem.style.display = 'none'; // Hide the item
        }
    }
});
