// script.js

// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = 'The text has been changed dynamically!';
    dynamicText.style.color = 'blue'; // Modify CSS style dynamically
});

// Add or remove an element when a button is clicked
const toggleBoxBtn = document.getElementById('toggle-box-btn');
const boxContainer = document.getElementById('box-container');

toggleBoxBtn.addEventListener('click', () => {
    const existingBox = document.getElementById('dynamic-box');
    if (existingBox) {
        boxContainer.removeChild(existingBox);
    } else {
        const box = document.createElement('div');
        box.id = 'dynamic-box';
        box.textContent = 'I am a dynamically added box!';
        box.style.width = '200px';
        box.style.height = '100px';
        box.style.backgroundColor = 'lightcoral';
        box.style.color = 'white';
        box.style.display = 'flex';
        box.style.justifyContent = 'center';
        box.style.alignItems = 'center';
        box.style.marginTop = '10px';
        boxContainer.appendChild(box);
    }
});
