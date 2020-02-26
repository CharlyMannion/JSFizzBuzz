describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it('should return fizz given a multiple of 3 to evaluate', function(){
    expect(fizzBuzz.evaluate(3)).toEqual("fizz");
  });

  it('should return buzz when given a multiple of 5 to evaluate', function(){
    expect(fizzBuzz.evaluate(5)).toEqual("buzz");
  });

  it('should return fizzbuzz when given a multiple of both 3 and 5', function(){
    expect(fizzBuzz.evaluate(15)).toEqual("fizzBuzz");
  });

  it('should return the number is none of the conditions apply', function(){
    expect(fizzBuzz.evaluate(7)).toEqual(7);
  });

});
