describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it('should return fizz given a multiple of 3', function(){
    expect(fizzBuzz.evaluate(3)).toEqual("fizz");
  });

});
