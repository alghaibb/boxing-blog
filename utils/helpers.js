module.exports = {
  // Helper to format date
  format_date: (date) => {
    return `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear().toString().substr(-2)}`;
  },
};