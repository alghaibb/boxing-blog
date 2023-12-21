const express = require('express');
const { Blog, User } = require('../../models');
const router = express.Router();

// GET all blogs
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User, attributes: ['name'] }],
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a blog by ID
router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['name'] }],
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new blog
router.post('/', async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
      name: req.session.name,
    });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT to update a blog by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.update(req.body, {
      where: {
        blog_id: req.params.id,
      },
    });

    if (!updatedBlog[0]) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a blog by ID
router.delete('/:id', async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        blog_id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
