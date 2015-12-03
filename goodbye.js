/**
 * Today is my last day here at NPR and I wanted to thank all of you for my time here!  As you know from my confluence docs, I am not a man of many typed words.
 * 
 * Don’t hesitate to contact me.
 * redacted
 * redacted
 */

// Give or take
var willreturn = 63072000;

function okaybye() {
  return new Promise(function(i) {
    setTimeout(i, willreturn);
  });
}

var ohai = okaybye();

ohai.then(function(){
  console.log('well hello again!');
});
