// rest and spread exercise solutions

const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...args) => [
	...arr,
	...args.map((num) => num * 2),
];

// slice and dice exercice solutions

// remove a random element in the items array
// and return a new array without the item.
const removeRandom = (items) => {
	const randomIndex = Math.floor(Math.random() * items.length);
	console.log(randomIndex);
	return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
};

// return a new array with every item in array1 and array2
const extend = (arr1, arr2) => [...arr1, ...arr2];

// return a new object with all the keys and values from obj and a new key/value pair
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

// return a new object with a key removed
const removeKey = (obj, key) => {
	const newObj = { ...obj };
	delete newObj[key];

	return newObj;
};

// combine two objects and return a new Object
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

// return a new object with a modified key and value
const update = (obj, key, val) => ({ ...obj, [key]: val });
