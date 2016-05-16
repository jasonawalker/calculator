describe('Calculator ', function() {

    it('should add two numbers', function() {
        var num1 = 2;
        var num2 = 3;
        expect(add(num1,num2)).toEqual(5);
    });

    it('should subtract two numbers', function() {
        var num1 = 3;
        var num2 = 2;
        expect(subtract(num1,num2)).toEqual(1);
    });

    it('should multiply two numbers', function() {
        var num1 = 2;
        var num2 = 3;
        expect(multiply(num1,num2)).toEqual(6);
    });

    it('should divide two numbers', function() {
        var num1 = 6;
        var num2 = 3;
        expect(divide(num1,num2)).toEqual(2);
    });

    it('should find remainder of two numbers', function() {
        var num1 = 10;
        var num2 = 4;
        expect(mod(num1,num2)).toEqual(2);
    });
});
