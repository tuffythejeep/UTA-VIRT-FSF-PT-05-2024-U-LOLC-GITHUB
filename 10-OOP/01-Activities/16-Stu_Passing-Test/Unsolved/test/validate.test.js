const Validate = require('../validate.js');

describe('Validate', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
    it ('should return false if the password is less than 8 characters' , () => {
      const validate = new Validate();
      const password = 'abcd';
      const result = validate.isPassword(password);
      expect(result).toBe(false);
    });
// TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
it ('should return false if the password does not contain at least 1 uppercase' , () => {
  const validate = new Validate();
  const password = 'abcd1234';
  const result = validate.isPassword(password);
  expect(result).toBe(false);
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  it ('should ')
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
});

// TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  // TOO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
});
