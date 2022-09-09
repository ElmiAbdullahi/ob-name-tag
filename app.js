// import functions and grab DOM elements
const nameEl = document.getElementById('name-input');
const changeButton = document.getElementById('change-name');
const myName = document.getElementById('name-display');
console.log(nameEl);
// let state

// set event listeners
changeButton.addEventListener('click', () => {
    const value = nameEl.value;
    myName.textContent = value;
});

// get user input
// use user input to update state
// update DOM to reflect the new state
