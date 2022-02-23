import calculator from './main.js';

describe('Testing calculator', () => {

  describe('Given: A import calculator from main.js', () => {

    describe('When: Point to add', () => {
      test('Then: Must truthy value', () => {
        expect(calculator.add).toBeTruthy()
      });
    });
    describe('When: Point to sub', () => {
      test('Then: Must truthy value', () => {
        expect(calculator.sub).toBeTruthy()
      });
    });
    describe('When: Point to mul', () => {
      test('Then: Must truthy value', () => {
        expect(calculator.mul).toBeTruthy()
      });
    });
    describe('When: Point to div', () => {
      test('Then: Must truthy value', () => {
        expect(calculator.div).toBeTruthy()
      });
    });
  });

  describe('Given: A calculator methods', () => {
    describe(`When: Invoke add
       And: Pass one number argument`, () => {
      test('Then: Return NaN', () => {
          expect(calculator.add(2)).toBeNaN()
        });
       });
    describe(`When: Invoke add
       And: Pass two number arguments`, () => {
        test('Then: Return 6', () => {
          expect(calculator.add(2, 4)).toEqual(6)
        });
       });
    describe(`When: Invoke add
       And: Pass NaN argument`, () => {
        test('Then: Return NaN', () => {
          expect(calculator.add(NaN)).toBeNaN()
        });
       });
    
       describe(`When: Invoke sub
       And: Pass one number argument`, () => {
      test('Then: Return NaN', () => {
          expect(calculator.sub(2)).toBeNaN()
        });
       });
    describe(`When: Invoke sub
       And: Pass two number arguments`, () => {
        test('Then: Return 2', () => {
          expect(calculator.sub(4, 2)).toEqual(2)
        });
       });
    describe(`When: Invoke sub
       And: Pass NaN argument`, () => {
        test('Then: Return NaN', () => {
          expect(calculator.sub(NaN)).toBeNaN()
        });
       });

       describe(`When: Invoke mul
       And: Pass one number argument`, () => {
      test('Then: Return NaN', () => {
          expect(calculator.mul(2)).toBeNaN()
        });
       });
    describe(`When: Invoke mul
       And: Pass two number arguments`, () => {
        test('Then: Return 8', () => {
          expect(calculator.mul(2, 4)).toEqual(8)
        });
       });
    describe(`When: Invoke mul
       And: Pass NaN argument`, () => {
        test('Then: Return NaN', () => {
          expect(calculator.mul(NaN)).toBeNaN()
        });
       });

       describe(`When: Invoke div
       And: Pass one number argument`, () => {
      test('Then: Return NaN', () => {
          expect(calculator.div(2)).toBeNaN()
        });
       });
    describe(`When: Invoke div
       And: Pass two number arguments`, () => {
        test('Then: Return 5', () => {
          expect(calculator.div(10, 2)).toEqual(5)
        });
       });
    describe(`When: Invoke div
       And: Pass NaN argument`, () => {
        test('Then: Return NaN', () => {
          expect(calculator.div(NaN)).toBeNaN()
        });
       });
  });
});

