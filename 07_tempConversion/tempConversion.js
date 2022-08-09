const ftoc = function(f) {
  let cel;
cel = (f-32)*(5/9)
return Math.round((cel*10))/10;
};

const ctof = function(c) {
  let far;
far = c*(9/5)+32
return Math.round((far*10))/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
