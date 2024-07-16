// TODO: Import the Validate class.
const validate = require(../validate.js);

// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe('Validate', () => {
  it('should return false when passed an empty string', () => {
    const password = '';
    const validateInstance = new validate();
    expect(validateInstance.isPassword(password)).toBe(false);
  });
});

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
    