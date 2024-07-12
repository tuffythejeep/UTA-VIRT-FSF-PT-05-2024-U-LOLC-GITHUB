// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
function BlogPost(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.printMetaData = function() {
        console.log('Created by ${this.authorName} on ${this.createdOn}');
    }

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