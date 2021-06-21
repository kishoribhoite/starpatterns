// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

//pattern 1
// var n = 5;
// var i, j;

// for (i = 1; i <= n; i++) {
//   for (j = 0; j < i; j++) {
//     document.write('*' + ' ');
//   }
//   document.write('<br>');
// }

//pattern 2
// var n = 5;
// var i, j;

// for (i = 0; i <= n; i++) {
//   for (j = 5; j > i; j--) {
//     document.write('*' + ' ');
//   }
//   document.write('<br>');
// }

//pattern 3
// var n = 6;
// var i, j;

// for (i = 1; i <= n; i++) {
//   for (j = 1; j < i; j++) {
//     document.write(j + ' ');
//   }
//   document.write('<br>');
// }

//pattern 4.1
// var n = 5;
// var i, j;

// for (i = 1; i <= n; i++) {
//   for (j = 0; j <= i; j++) {
//     document.write(i++);
//   }
//   document.write('<br>');
// }
//pattern 4
var n = 4;
var i, j;
var z = 1;
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    document.write(z + ' ');
    z++;
  }
  document.write('<br>');
}
