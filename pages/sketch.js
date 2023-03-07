
var bgcolor =('#D3E6F2');



function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(bgcolor);
  flower();
}

function flower() {  
  //flower1
  for (var r11 = 0; r11 < 10; r11++) {
    stroke(85,107,47,20);
  }

  fill(430, 190, 30, 140);
  translate(200, 100);
  noStroke();
  for (var r = 0; r < 10; r++) {
    if (frameCount <= 500) {
      ellipse(0, 8 + frameCount / 20, 10 + frameCount / 40, 15 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50);
    }
    rotate(PI / 5);
  }



  //flower2
  for (var r21 = 0; r21 < 10; r21++) {
    stroke(185,17,47,20);
  }
  fill(220, 90, 30, 140);
  translate(100, 100);
  noStroke();
  for (var r2= 0; r2 < 10; r2++) {
    if (frameCount <= 500) {
      ellipse(0, 8 + frameCount / 20, 10 + frameCount / 40, 15 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50);
    }
    rotate(PI / 5);
 
}

  //flower3
  for (var r31 = 0; r31 < 10; r31++) {
    stroke(185,17,47,20);
  }
  fill(320, 150, 30, 140);
  translate(-210, -129);
  noStroke();
  for (var r3= 0; r3 < 10; r3++) {
    if (frameCount <= 500) {
      ellipse(0, 8 + frameCount / 20, 10 + frameCount / 40, 15 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50);
    }
    rotate(PI / 5);

  }

  //flower4
  for (var r41 = 0; r41 < 10; r41++) {
    stroke(185,187,47,20);
  }
  fill(120, 110, 30, 240);
  translate(102, 202);
  noStroke();
  for (var r4= 0; r4 < 10; r4++) {
    if (frameCount <= 500) {
      ellipse(0, 8 + frameCount / 20, 10 + frameCount / 40, 15 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50);
    }
    rotate(PI / 5);

  }


}