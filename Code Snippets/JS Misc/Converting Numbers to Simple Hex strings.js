// Based on thread at:
// https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
// Answer by: Mark Manning

function numHex(s) {
  var a = s.toString(16);
  if (a.length < 2) {
    a = '00' + a;
  } else if (a.length < 3) {
    a = '0' + a;
  }
  return a;
}

//Test from 0 to 50
for (let qsq = 0; qsq < 51; qsq++) {
  console.log(qsq);
  console.log(numHex(qsq));
}
