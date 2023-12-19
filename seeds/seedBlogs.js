const { Blog } = require('../models');

const blogData = [
  {
    blog_title: 'The Greatest Boxers of All Time',
    blog_body: 'Discussing the most legendary figures in the sport of boxing, from heavyweight icons like Muhammad Ali and Mike Tyson to pound-for-pound kings such as Floyd Mayweather and Manny Pacquiao.',
    blog_date: '2023-06-01',
    active_ind: '1',
    user_id: '1'
  },
  {
    blog_title: 'The Evolution of Boxing Techniques',
    blog_body: 'An in-depth look at how boxing techniques have evolved over the decades, influenced by great trainers and fighters who have brought new strategies and methods to the ring.',
    blog_date: '2023-07-15',
    active_ind: '1',
    user_id: '3'
  },
  {
    blog_title: 'Diet and Training Regimens of Elite Boxers',
    blog_body: 'Exploring the rigorous diet and training regimens that shape the world\'s top boxers, including insights into their workout routines, nutrition plans, and recovery methods.',
    blog_date: '2023-08-10',
    active_ind: '1',
    user_id: '2'
  },
  {
    blog_title: 'Analyzing the Upcoming Mega Fights',
    blog_body: 'A preview of upcoming high-stakes boxing matches, analyzing the strengths and weaknesses of each fighter, the stakes involved, and predictions based on their fighting styles and records.',
    blog_date: '2023-09-05',
    active_ind: '1',
    user_id: '1'
  },
  {
    blog_title: 'The Impact of Boxing on Mental Health',
    blog_body: 'A discussion on how the sport of boxing can affect an athlete\'s mental health, covering the psychological stresses of competition, the role of sports psychology, and stories of resilience.',
    blog_date: '2023-10-21',
    active_ind: '1',
    user_id: '2'
  },
  {
    blog_title: 'The Business of Boxing: Behind the Scenes',
    blog_body: 'Delving into the business side of boxing, this post explores the roles of promoters, managers, and broadcasters, and how money and contracts influence the sport beyond the ring.',
    blog_date: '2023-11-11',
    active_ind: '1',
    user_id: '4'
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
