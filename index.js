let n;
function fun() {
  n = Math.floor(Math.random() * 6) + 1;
  m = Math.floor(Math.random() * 6) + 1;
  console.log(n);
  console.log(m);
  document.querySelector(".img1").src = `./images/dice${n}.png`;
  document.querySelector(".img2").src = `./images/dice${m}.png`;
  if (n === m) {
    document.querySelector(".result").innerHTML = "DRAW !";
  } else if (n > m) {
    document.querySelector(".result").innerHTML = "YOU WON";
  } else {
    document.querySelector(".result").innerHTML = "YOU LOST";
  }
}
