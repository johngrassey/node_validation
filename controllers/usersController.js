const usersStorage = require("../storages/usersStorage");
const { body, validationResult } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
<<<<<<< HEAD
  body("email").trim().isEmail().withMessage("Email must be valid."),
  body("age")
    .isInt({ min: 18, max: 120 })
    .withMessage("Age must be between 18 and 120."),
  body("bio")
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage("Bio must be less than 200 characters."),
=======
>>>>>>> 6e0789e936c9ee45a775f136032bb65c522ba89b
];

exports.usersListGet = (req, res) => {
  res.render("index", {
    title: "Users List",
    users: usersStorage.getUsers(),
  });
};

exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create User",
  });
};

exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create User",
        errors: errors.array(),
      });
    }
<<<<<<< HEAD
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.addUser({ firstName, lastName, email, age, bio });
=======
    const { firstName, lastName } = req.body;
    usersStorage.addUser({ firstName, lastName });
>>>>>>> 6e0789e936c9ee45a775f136032bb65c522ba89b
    res.redirect("/");
  },
];

exports.usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update User",
    user: user,
  });
};

exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update User",
        user: user,
        errors: errors.array(),
      });
    }
<<<<<<< HEAD
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.updateUser(req.params.id, {
      firstName,
      lastName,
      email,
      age,
      bio,
=======
    const { firstName, lastName } = req.body;
    usersStorage.updateUser(req.params.id, {
      firstName,
      lastName,
>>>>>>> 6e0789e936c9ee45a775f136032bb65c522ba89b
    });
    res.redirect("/");
  },
];

exports.usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect("/");
};
