const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');
const shoppingInput = $('#shopping-input');
// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
event.preventDefault()

console.log('item', shoppingInput.val());

const item = $('<li>');
item.text(shoppingInput.val());

shoppingListEl.append(item);

}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", handleFormSubmit);