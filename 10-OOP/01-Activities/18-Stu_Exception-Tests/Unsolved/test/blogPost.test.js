const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  describe('constructor', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  it('should throw an error when authorName provided to constructor is < 2 characters', () => {
  // Arrange
const invaliInput ="J"; //single character should be invalid
  // Act
let error;
  const newPost = new BlogPost(invalidInput);
  } catch (err) {
    error = err;
  }
  // Assert
expect(error).toBeDefined();
ex  
});
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
it('should throw an error when authorName provided to constructor is < 2 characters', () => {
  // Arrange

  // Act

  // Assert
  });