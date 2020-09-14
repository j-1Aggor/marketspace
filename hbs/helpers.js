const moment = require("moment");
const humanize = require("humanize");

const formatDate = (date) => {
  return moment(date).format("DD / MM / YY");
};

const formatText = (str) => {
  return humanize.linebreaks(str);
};

const formatLongText = (str) => {
  return humanize.truncatechars(str, 150);
};
const formatNum = (num) => {
  return humanize.numberFormat(num);
};

module.exports = { formatDate, formatText, formatNum, formatLongText };