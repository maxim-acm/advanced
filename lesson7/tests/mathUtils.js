var mathUtils = require('../src/mathUtils');
var chai      = require('chai');
var chaiStats = require('chai-stats');

chai.use(chaiStats);

var assert = chai.assert;

suite('mathUtils average');

test('Positive: mathUtils.average([1,10,33, 44444, 10000000000])', function() {
    assert.almostEqual( mathUtils.average([1,10,33, 44444, 10000000000]), 2000008897.6);
});

test('Positive: mathUtils.average([3,4,5])', function() {
    assert.almostEqual( mathUtils.average([3,4,5]), 4);
});

test('Positive: mathUtils.average([1.5, 2.5, 3.5])', function() {
    assert.almostEqual( mathUtils.average([1.5, 2.5, 3.5]), 2.5);
});

test('Positive: mathUtils.average([-2, -3, -4])', function() {
    assert.almostEqual( mathUtils.average([-2, -3, -4]), -3);
});

test('Positive: mathUtils.average([-1.5, -2.5, -3.5])', function() {
    assert.almostEqual( mathUtils.average([-1.5, -2.5, -3.5]), -2.5);
});

test('Negative: mathUtils.average(3,4,5)', function() {
    assert.throw(function() {
        mathUtils.average(3,4,5);
    }, 'ARGUMENT_IS_NOT_ARRAY');
});

test('Negative: mathUtils.average("somestring")', function() {
    assert.throw(function() {
        mathUtils.average("somestring");
    }, NaN);
});

test('Negative: mathUtils.average(["23", "dsd"])', function(){
   assert.throw(function () {
       mathUtils.average(['23', 'dsd']);
   }, 'ONLY_NUMERIC_VALUES_ARE_SUPPORTED');
});

test('Negative: mathUtils.average()', function(){
    assert.throw(function () {
        mathUtils.average();
    }, undefined);
});

test('Negative: mathUtils.average("somestring")', function() {
    assert.throw(function() {
        mathUtils.average("somestring");
    }, 'ARGUMENT_IS_NOT_ARRAY');
});


suite('mathUtils averageAsync');

test('Positive: mathUtils.averageAsync([3,4,5])', function(done) {
    mathUtils.averageAsync([3,4,5]).then(function(avgValue) {
        assert.almostEqual(avgValue, 4);
        done();
    });
});


suite('mathUtils median');

test('Positive: mathUtils.median([1, 2])', function() {
    assert.almostEqual( mathUtils.median([1,2]), 1.5);
});

test('Positive: mathUtils.median([1, 1, 1, 5])', function() {
    assert.almostEqual( mathUtils.median([1, 1, 1, 5]), 1);
});

test('Positive: mathUtils.median([-1, -1, -1, -5])', function() {
    assert.almostEqual( mathUtils.median([-1, -1, -1, -5]), -1);
});

test('Positive: mathUtils.median([1.5, 1.5, 2.5, 1.5])', function() {
    assert.almostEqual( mathUtils.median([1.5, 1.5, 2.5, 1.5]), 1.5);
});

test('Positive: mathUtils.median([1, 2, 3, 4])', function() {
    assert.almostEqual( mathUtils.median([1, 2, 3, 4]), 2.5);
});


test('Negative: mathUtils.median(1, 1, 3)', function() {
    assert.throw(function() {
        mathUtils.median(1 , 1, 3);
    }, 'ARGUMENT_IS_NOT_ARRAY');
});

test('Negative: mathUtils.median("string")', function() {
    assert.throw(function() {
        mathUtils.median('string');
    }, 'ARGUMENT_IS_NOT_ARRAY');
});


// Positive (DONE)
// [1,10,33, 44444, 10000000000]
// [1.5, 2.5, 3.5]
// [-2, -3, -4]
// [-1.5, -2.5, -3.5]

// Negative (Done)
// mathUtils.average(3,4,5)

// Negative (TODO-done)
// mathUtils.average([])
// mathUtils.average(['23', 'dsd'])
// mathUtils.average()
// mathUtils.average("somestring")

// Positive - median
// [1,2]
// [1,1,1,5]
// [-1,-1,-1,-5]
// [1.5, 1.5, 2.5, 1.5]
// [1, 2, 3, 4]

// Negative - median
// mathUtils.median(1,1,3);
// mathUtils.median([]);
// mathUtils.median('string');
// mathUtils.median(['a', 'b', 'c']);

