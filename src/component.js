/* eslint-disable */

export default (text = 'hello') => {
  const e = document.createElement('div');
  e.className = "pure-button";
  e.innerHTML = text;
  return e;
};

