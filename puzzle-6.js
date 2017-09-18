right();
if (getColor() == "red" ){
  up()
  up()
  up()
  direction = 1
}
else{
  down()
  down()
  down()
  direction = 0
}
if (getColor() == "blue"){
  right()
}
if (getColor() == "red") {
  left()
}
if (direction == "1"){
    up()
}
else{
    down()
}
