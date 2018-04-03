/* eslint-disable */

export default (text = 'hello') => {
  const e = document.createElement('div');
  e.innerHTML = text;
  return e;
};

