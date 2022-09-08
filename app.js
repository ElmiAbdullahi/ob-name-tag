// import functions and grab DOM elements
const nameEl = document.getElementById('name-input');
const changeButton = document.getElementById('change-name');
const nameDisplay = document.getElementById('name-display');
// let state

// set event listeners
changeButton.addEventListener('click', () => {
    // get user input
    const name = nameEl.value;
    console.log(name);
    // use user input to update state
    nameDisplay.textContent = name;
    // update DOM to reflect the new state
});
