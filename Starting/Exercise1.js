setTimeout(() => {
  console.log('5');
}, 1000);

setImmediate(() => {
  console.log('4');
});

setTimeout(() => {
  console.log('2');
}, 0);

process.nextTick(() => {
  console.log('3');
});

setTimeout(() => {
  console.log('1');
}, 500);
