function repeatDown(total) {
  var count = 0;
  while (count < 9) {
    down();
    count = count + 1;
  }
right()
right()
}
function repeatUp(total) {
  var count = 0;
  while (count < 9) {
    up();
    count = count + 1;
  }
  right()
  right()
}
function Get(){
repeatDown()
repeatUp()
}
Get()
Get()
function Final (total) {
  var count = 0;
  while (count < 8) {
    down();
    count = count + 1;
  }
}
Final()
  right()
