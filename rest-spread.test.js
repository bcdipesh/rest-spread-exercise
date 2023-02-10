// testing for the exercise solutions
describe('Rest and Spread exercise solution tests', () => {
	it('returns a new array that contains only odd numbers on filterOutOdds(...args)', () =>
		expect(filterOutOdds(1, 2, 3, 4)).toEqual([2, 4]));

	it('returns the minimum number among the numbers on findMin(...args)', () =>
		expect(findMin(1, 2, 3, 4, -1, -2)).toBe(-2));

	it('returns a new object that is a merge of two objects on mergeObjects(obj1, obj2)', () =>
		expect(mergeObjects({ a: '1', b: '2' }, { c: '3', d: '4' })).toEqual({
			a: '1',
			b: '2',
			c: '3',
			d: '4',
		}));

	it('returns a new array that contains original array and double of all additional arguments on doubleAndReturnArgs(arr, ...args)', () =>
		expect(doubleAndReturnArgs([1, 2, 3], 4, 5, 6)).toEqual([
			1, 2, 3, 8, 10, 12,
		]));
});

describe('Slice and Dice exercise solution tests', () => {
	it('returns a new array by removing a random element from the original array on removeRandom(items)', () =>
		expect(removeRandom([1, 2, 3, 4, 5]).length).toBe(4));

	it('returns a new array that is a merge of two arrays on extend(arr1, arr2)', () =>
		expect(extend([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]));

	it('returns a new object that is a copy of the original object and contains new key/value pair on addKeyVal(obj, key, val)', () =>
		expect(addKeyVal({ a: '1', b: '2' }, 'c', 3)).toEqual({
			a: '1',
			b: '2',
			c: 3,
		}));

	it('returns a new object with the desired key removed on removeKey(obj, key)', () =>
		expect(removeKey({ a: '1', b: '2', c: '3' }, 'c')).toEqual({
			a: '1',
			b: '2',
		}));

	it('returns a new object that is a combination of two objects on combine(obj1, obj2)', () =>
		expect(combine({ a: '1', b: '2' }, { c: '3', d: '4' })).toEqual({
			a: '1',
			b: '2',
			c: '3',
			d: '4',
		}));

	it('returns a new object that has modified value on update(obj, key, val)', () =>
		expect(update({ a: '1', b: '2', c: '3', d: '5' }, 'd', '4')).toEqual({
			a: '1',
			b: '2',
			c: '3',
			d: '4',
		}));
});
