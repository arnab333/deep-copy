import deepCopy, { DeepCopyArray, DeepCopyObject } from '../src/index';

describe('Deep Copy Recursive', () => {
  it('should be able to create a deep copy of array with nested object', () => {
    let original: DeepCopyArray = [
      'hello world',
      24,
      {
        date: new Date(),
        location: {
          city: 'tampa',
          testObj: {
            welcome: 'yo',
            nested3rdObj: {
              val: [4, { newObj: '4th level' }, 9],
            },
          },
        },
        childArray: [6, 7, 8],
      },
      [1, 2, 4],
    ];

    let deepCopied = deepCopy(original);

    deepCopied[2].location.city = 'orlando';
    deepCopied[3][0] = 'testing';
    deepCopied[2].childArray[0] = 'update';
    deepCopied[2].location.testObj.welcome = 'Hello World!';
    deepCopied[2].location.testObj.nested3rdObj.val[0] = 'checking!';
    deepCopied[2].location.testObj.nested3rdObj.val[1].newObj = 'fourth level!';

    expect(original[2].location.city).toBe('tampa');
    expect(deepCopied[2].location.city).toBe('orlando');

    expect(original[3][0]).toBe(1);
    expect(deepCopied[3][0]).toBe('testing');

    expect(original[2].childArray[0]).toBe(6);
    expect(deepCopied[2].childArray[0]).toBe('update');

    expect(original[2].location.testObj.welcome).toBe('yo');
    expect(deepCopied[2].location.testObj.welcome).toBe('Hello World!');

    expect(original[2].location.testObj.nested3rdObj.val[0]).toBe(4);
    expect(deepCopied[2].location.testObj.nested3rdObj.val[0]).toBe(
      'checking!'
    );

    expect(original[2].location.testObj.nested3rdObj.val[1].newObj).toBe(
      '4th level'
    );
    expect(deepCopied[2].location.testObj.nested3rdObj.val[1].newObj).toBe(
      'fourth level!'
    );
  });

  it('should be able to create a deep copy of object with nested object', () => {
    let original: DeepCopyObject = {
      date: new Date(),
      location: {
        city: 'tampa',
        testObj: {
          welcome: 'yo',
          nested3rdObj: {
            val: [4, { newObj: '4th level' }, 9],
          },
        },
      },
      childArray: [6, 7, 8],
    };

    let deepCopied = deepCopy(original);

    deepCopied.location.city = 'orlando';
    deepCopied.childArray[0] = 'update';
    deepCopied.location.testObj.welcome = 'Hello World!';
    deepCopied.location.testObj.nested3rdObj.val[0] = 'checking!';
    deepCopied.location.testObj.nested3rdObj.val[1].newObj = 'fourth level!';

    expect(original.location.city).toBe('tampa');
    expect(deepCopied.location.city).toBe('orlando');

    expect(original.childArray[0]).toBe(6);
    expect(deepCopied.childArray[0]).toBe('update');

    expect(original.location.testObj.welcome).toBe('yo');
    expect(deepCopied.location.testObj.welcome).toBe('Hello World!');

    expect(original.location.testObj.nested3rdObj.val[0]).toBe(4);
    expect(deepCopied.location.testObj.nested3rdObj.val[0]).toBe('checking!');

    expect(original.location.testObj.nested3rdObj.val[1].newObj).toBe(
      '4th level'
    );
    expect(deepCopied.location.testObj.nested3rdObj.val[1].newObj).toBe(
      'fourth level!'
    );
  });
});
