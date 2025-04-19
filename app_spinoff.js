// Create our initial global array of names
let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

/**
 * Function to build the table dynamically
 * and display the names in the array.
 * No parameters are needed.
 * @returns {void}
 */
function build() {
    // Select the table container
    const tableContainer = document.getElementById('tableContainer');

    // Create the HTML for the table
    let html = '<table>';
    html += '<tr><th>Index</th><th>Name</th></tr>'; // Add table headers

    // Loop through the names array and build rows
    names.forEach((name, index) => {
        html += `
            <tr data-row="${index}" data-name="${name}" onclick="getData(this)">
                <td class="box">${index}</td>
                <td>${name}</td>
            </tr>
        `;
    });

    html += '</table>';

    // Add the table to the page
    tableContainer.innerHTML = html;
}

/**
 * Helper function to capitalize the first
 * letter of the user input name.
 * @param {string} name - The name to capitalize
 * @return {string} - The capitalized name
 */
function capitalizeName(name) {
    // Check if the name is empty or null
    if (!name) return '';

    // Capitalize the first letter and return
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

/**
 * Function to get the data from the clicked table row
 * and display it in the message element.
 * @param {*} element - The clicked table row element
 * @returns {void}
 */
function getData(element) {
    // Get the attribute values
    const rowIndex = element.getAttribute('data-row');
    const name = element.getAttribute('data-name');

    // Select the message element
    const messageElement = document.getElementById('message');

    // Output the values into the message element
    messageElement.textContent = `Row: ${rowIndex}, Name: ${name}`;
}

/**
 * Function to add a new name to the array
 * and update the table.
 * @returns {void}
 */
function addName() {
    // Prompt the user for a new name
    const newName = prompt('Enter a new name:');

    // Exit if no name is provided
    if (!newName) return;

    // Capitalize the new name
    // This is a good practice to ensure consistent formatting
    const capitalizedName = capitalizeName(newName);

    // Add the new name to the array
    names.push(capitalizedName);

    // Rebuild the table to include the new name
    build();
}

/**
 * Function to remove a name from the array
 * and update the table.
 * @returns {void}
 */
function removeName() {
    // Prompt the user for a name to remove
    const nameToRemove = prompt('Enter the name you want to remove:');

    // Capitalize the first letter of the name
    const capitalizedNameToRemove = capitalizeName(nameToRemove);

    // Find the index of the name
    const index = names.indexOf(capitalizedNameToRemove);

    if (index !== -1) {
        // Remove the name from the array
        names.splice(index, 1);

        // Rebuild the table to reflect the changes
        build();
    } else {
        // Alert if not found, since we can't remove a
        // name that doesn't exist in the array
        alert(`Name "${capitalizedNameToRemove}" not found in the list.`);
    }
}

// Add event listeners for each button
document.getElementById('addNameButton').addEventListener('click', addName);
document.getElementById('removeNameButton').addEventListener('click', removeName);

// Initial invoke to build the table
build();