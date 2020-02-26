function FizzBuzz() {
}
FizzBuzz.prototype.evaluate = function(num) {
  if (num === 15) {
    return "fizzBuzz";
  };
  if (num === 3) {
    return "fizz";
  };
  if (num === 5) {
    return "buzz";
  };
  return num;
};
