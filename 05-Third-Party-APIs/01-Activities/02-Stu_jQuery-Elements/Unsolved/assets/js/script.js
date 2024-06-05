// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/
const newRoot = $('#root');

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
const authName = $('<p>');

// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
authName.text('~ Carol Dweck');

// TODO: Add the class `plain` to the author element
authName.addClass('plain')

// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
const newH1 = $('<h1>');

// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
newH1.text('Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.');

// TODO: Apply the class `fancy` to the quote element
newH1.addClass('fancy');

// TODO: Append the author element to the quote element
newH1.append(authName);

// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
newRoot.append(newH1);