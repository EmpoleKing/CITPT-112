// Chapter 9 Project
document.addEventListener('DOMContentLoaded', () => {

    // Get the output element class
    const outputElement = document.querySelector('.output');

    // Get the main list
    const mainList = outputElement.querySelector('ul');

    // Set the ID of the main list
    mainList.id = 'mainList';

    // Get the div elements & tag names
    const divElements = Array.from(outputElement.getElementsByTagName('div'));
    const divTagNames = divElements.map(div => div.tagName);

    // Log the div tags
    console.log(divTagNames);

    // For loop to add an ID to each div element
    for (let i = 0; i < divElements.length; i++) {
        divElements[i].id = `id${i + 1}`;

        // Alternate colors for each div element
        divElements[i].style.color = i % 2 === 0 ? 'pink' : 'purple';
    }
});

// Something fun to do with the DOM, haven't worked with buttons before
document.addEventListener('DOMContentLoaded', () => {

    // Select the element with the class "output"
    const outputElement = document.querySelector('.output');

    // Select the ul element
    const mainList = outputElement.querySelector('ul');

    // Set the ID of the ul tag
    mainList.id = 'mainList';

    // Select the button
    const itemButton = document.getElementById('itemButton');

    // Create an array of number words
    const numberWords = [
        "One", "Two", "Three", "Four", "Five",
        "Six", "Seven", "Eight", "Nine", "Ten"
    ];

    // Add an event listener to the button
    itemButton.addEventListener('click', () => {

        // Create a new list item
        const newItem = document.createElement('li');

        // Get the length of the list
        const currentCount = mainList.children.length;

        // Set the text content of the new list item using the number word
        if (currentCount < numberWords.length) {
            newItem.textContent = numberWords[currentCount];
        } else {
            newItem.textContent = `${currentCount + 1}`; // Fallback to numbers if we exceed the array
        }

        // Append the new list item
        mainList.appendChild(newItem);
    });
});