const array = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let timer = 100;
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + array[i] + '   ');
  }, (timer += 200));
}

// const array = ['\r/   ', '\r-   ', '\r\\   ', '\r|   '];
// let timer = 100;
// // console.log(array[0]);
// process.stdout.write('\r|   ');

// for (let k = 0; k <= 1; k++) {
//   for (let i = 0; i < array.length; i++) {
//     setTimeout(() => {
//       process.stdout.write(array[i]);
//     }, (timer += 200));
//   }
// }