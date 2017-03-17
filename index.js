'use strict';

var Children = require('react').Children;

module.exports = function FirstChild(props) {
  return Children.toArray(props.children)[0] || null;
};
