module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  is_true: (value) => {
    return value !== false;
  },
};
