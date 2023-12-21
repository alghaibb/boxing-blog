const bcrypt = require('bcrypt');
const { User } = require('../../models');
const router = require('express').Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user found with that ID!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// User registration
router.post('/signup', async (req, res) => {
  try {
    // Destructuring to extract name, email, and password from the request body
    const { name, email, password } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !password) {
      res.status(400).json({ message: 'Please provide name, email, and password' });
      return;
    }

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password, // The password will be hashed by the hook in the User model
    });

    // Saving the session with user information
    req.session.save(() => {
      req.session.name = newUser.name;
      req.session.user_id = newUser.user_id;
      req.session.logged_in = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Login user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(404).json({ message: 'No user found with that email address!' });
      return;
    }

    const validPassword = await bcrypt.compare(req.body.password, userData.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.name = userData.name;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Update password by ID
router.put('/:id', async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userData = await User.findByPk(req.session.user_id);

    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }

    const validPassword = await bcrypt.compare(currentPassword, userData.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Incorrect current password' });
    }

    await userData.update({ password: newPassword });

    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
});

// Delete user by ID and destroy session
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        user_id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with that ID!' });
      return;
    }

    req.session.destroy(() => {
      res.status(204).end();
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;