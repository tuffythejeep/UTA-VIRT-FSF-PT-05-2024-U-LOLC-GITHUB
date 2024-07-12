// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
class Cat {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  nap() {
    console.log('Zzzzzzzzz');
  }
}

// Sets the variables "catOne" and "catTwo" to a Cat object and initializes with name, age, and breed properties
const catOne = new Cat('Tom', 2, 'Shorthair');
const catTwo = new Cat('Garfield', 3, 'Bengal');

// Calling Cat's nap method
catOne.nap();
catTwo.nap();




class BlogPost {
    constructor(authorName, title, text, createdOn) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
        this.printMetaData = function() {
        console.log('Created by ${this.authorName} on ${this.createdOn}');
    }

class comment {
    constructor(authorName, title, text, createdOn) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
        this.printMetaData = function() {
        console.log('Created by ${this.authorName} on ${this.createdOn}');
    }    

    addComment(comment) {
        this.comments.push(comment);
    }

// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
function BlogPost(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.printMetaData = function() {
        console.log('Created by ${this.authorName} on ${this.createdOn}');
    }

// TODO: Give BlogPost a property called 'comments' that is set to an empty array.

// TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.

// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', and 'createdOn'.

// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) with (text)'.

// TODO: Create a new object using the Comment class constructor.

// TODO: Create a new object using the BlogPost class constructor.

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.

// TODO: Print the meta data for both the BlogPost and the Comment to the console.



// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'


// TODO: Create a new object using the 'BlogPost' constructor

const Post = new BlogPost(
    'John Doe',
    'My First Blog Post',
    'This is my first blog post!',
    '2022-01-01'
)

// TODO: Call the 'printMetaData()' method on the new object
Post.printMetaData();