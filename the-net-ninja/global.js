//console.log(global);

setTimeout(() => {
  console.log('in the timeout');

  clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
  console.log('in the interval');
}, 1000);

console.log('dir', __dirname);
console.log('fil', __filename);