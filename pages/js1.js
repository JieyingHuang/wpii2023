var subject = {
  "long and complex": {
    "With twists and turns, sometimes perplex": 
    ["It tests us, make us strong and bold", "It tests us, make us resilient and courageous"],
    
    
    "The path often winds, occasionally confounds.": ["It gives us joy,", " it gives us pain", "both"],
    
    
    "Embrace the journey, good and bad": ["it brings us happinese", "it brings us sorrow", ]    
  },
  
  "is a mystery, yet so true": {
    "it's a creature of smile and tears ": ["each holding its own significance", "each contributing to the intricate pattern of our journey."],
    "A mixture of laughter and tears too": ["It’s up to us to make it bright", "it enhances by our own actions and choices."]
  }
}
window.onload = function() {
  var line1Sel = document.getElementById("line1");
  var line2Sel = document.getElementById("line2");
  var line3Sel = document.getElementById("line3");
  for (var x in subject) {
    line1Sel.options[line1Sel.options.length] = new Option(x, x);
  }
  line1Sel.onchange = function() {
    line3Sel.length = 1;
    line2Sel.length = 1;
  for (var y in subject[this.value]) {
      line2Sel.options[line2Sel.options.length] = new Option(y, y);
    }
  }
  
  line2Sel.onchange = function() {
  line3Sel.length = 1;
  var z = subject[line1Sel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      line3Sel.options[line3Sel.options.length] = new Option(z[i], z[i]);
    }
  }
}