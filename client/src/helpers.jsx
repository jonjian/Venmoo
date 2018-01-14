import React from 'react';

const capitalize = function (string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};

const insertBreaks = function (number) {
  const breaks = [];
  for (let n = 1; n <= number; n++) {
    breaks.push(<br />);
  }
  return breaks;
};

module.exports = {
  capitalize,
  insertBreaks,
};
