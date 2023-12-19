const { Comment } = require('../models');

const commentData = [
  // Comment on "The Greatest Boxers of All Time"
  {
    comment_body: 'Fantastic roundup! Ali will always be the GOAT in my book.',
    comment_date: '2023-12-09',
    active_ind: '1',
    user_id: '2',
    blog_id: '1',
  },
  // Comment on "The Evolution of Boxing Techniques"
  {
    comment_body: 'Intriguing perspective on how boxing strategies have evolved. Makes me appreciate the sport even more.',
    comment_date: '2023-12-09',
    active_ind: '1',
    user_id: '3',
    blog_id: '2',
  },
  // Comment on "Diet and Training Regimens of Elite Boxers"
  {
    comment_body: 'This article motivated me to revamp my own training routine. Thanks for the detailed info!',
    comment_date: '2023-12-09',
    active_ind: '1',
    user_id: '4',
    blog_id: '3',
  },
  // Comment on "Analyzing the Upcoming Mega Fights"
  {
    comment_body: 'Your fight analysis is spot on. Can’t wait to see how these predictions turn out!',
    comment_date: '2023-12-09',
    active_ind: '1',
    user_id: '1',
    blog_id: '4',
  },
  // Comment on "The Impact of Boxing on Mental Health"
  {
    comment_body: 'It’s so important to talk about mental health in combat sports. Thank you for addressing this!',
    comment_date: '2023-12-09',
    active_ind: '1',
    user_id: '2',
    blog_id: '5',
  },
  // Comment on "The Business of Boxing: Behind the Scenes"
  {
    comment_body: 'The business side is just as fascinating as the matches themselves. Learned a lot from this post!',
    comment_date: '2023-12-09',
    active_ind: '1',
    user_id: '3',
    blog_id: '6',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
