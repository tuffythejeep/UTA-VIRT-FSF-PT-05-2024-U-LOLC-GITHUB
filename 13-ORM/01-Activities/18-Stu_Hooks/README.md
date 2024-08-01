# 🏗️ Use Hooks to Hash a Password

Work with a group to implement the following user story:

* As a user, I want to be able to log in with my password.

* As a user, I want to be able to change my password.

* As a user, I want to know that my password is being stored securely.

## Acceptance Criteria

* It's done when `User.init()` includes Hooks to hash the user's password before it is created.

* It's done when `User.init()` includes Hooks to hash the user's password before it is updated.

## 💡 Hints

* What have you learned about hashing a password, `async` and `await`, and `try...catch`?

* What are three methods for adding Hooks to your code? How is adding a Hook via `init()` different from the other options?

* How can we make sure that the hash only occurs when the password has [updated](https://sequelize.org/docs/v6/other-topics/upgrade/#modelchanged)? 

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your group to further your knowledge:

* Hooks are considered **middleware** in programming terms. What are some other examples of middleware used in Node applications?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
