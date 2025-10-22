## --------------------------------------------------
1.  `.map`  – "Apply discounts and format prices"
## --------------------------------------------------

Goal: Use Array.prototype.map to apply a 20% discount to every price, round each result to two decimal places, then chain a second .map to format each number as a currency string (prefix with "$").

Requirements:
1. Create a new array `discounted` where each price is reduced by 20% (price * 0.8).
2. Round each discounted price to two decimals.
3. Chain a second `.map` to convert numbers to strings like `"$9.60"`.
4. Log the final array and ensure original `prices` is unchanged.

Example input:
```js
const prices = [12, 45, 23, 8, 90];
```
Expected final output (example):
```js
["$9.60", "$36.00", "$18.40", "$6.40", "$72.00"]
```


## --------------------------------------------------
2.  `.filter`  – "Keep the weekend"
## --------------------------------------------------

Goal: Use Array.prototype.filter to keep only days that start with the letter 'S', then map those names to uppercase.

Requirements:
1. Use `.filter` to select days whose first character is 'S' (case-sensitive for this exercise).
2. Chain `.map` to convert the filtered names to uppercase.
3. Return or log the final array of uppercase weekend days.

Example input:
```js
const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
```
Expected final output:
```js
['SAT', 'SUN']
```


## --------------------------------------------------
3.  `.find`  – "First above average"
## --------------------------------------------------

Goal: Compute the average of the scores, then use `.find` to locate the first score strictly greater than the average. Also return the index of that score using `.findIndex`.

Requirements:
1. Compute the average from `scores`.
2. Use `.find` to get the first score > average.
3. Use `.findIndex` (or `.indexOf`) to get that score's position in the original array.
4. Log both the found score and its index. If none found, explicitly log `undefined` (or -1 for index).

Example input:
```js
const scores = [67, 42, 89, 55, 73];
```
Expected example output:
```js
First above average: 89
Index of first above average: 2
```


## --------------------------------------------------
4.  "Mega-chain" – map → filter → map
## --------------------------------------------------

Goal: Chain several array methods to produce greeting strings for users who have paid and are over 18. Then return only the first valid greeting.

Requirements:
1. From `users`, filter to those with `paid: true` and `age > 18`.
2. Map the filtered users to greeting strings like: `"Hello Ada — thanks for your purchase!"`.
3. Part A: Return the full array of greetings.
4. Part B: Modify to return only the first greeting (use `.find` or chain + `[0]` safely).

Example input:
```js
const users = [
  {name: 'Ada',  age: 31, paid: true},
  {name: 'Ben',  age: 17, paid: false},
  {name: 'Cara', age: 25, paid: true},
  {name: 'Dan',  age: 42, paid: false}
];
```
Expected example outputs:
Part A:
```js
["Hello Ada — thanks for your purchase!", "Hello Cara — thanks for your purchase!"]
```
Part B:
```js
"Hello Ada — thanks for your purchase!"
```


## --------------------------------------------------
5.  DIY  `groupBy`  – without `.reduce`
## --------------------------------------------------

Goal: Implement a `groupBy` function that groups items by a provided key selector (no use of `.reduce`). After grouping, filter each customer's orders to keep only those with `qty >= 3`.

Requirements:
1. Write `groupBy(array, keyFn)` that returns an object whose keys are results of `keyFn(item)` and values are arrays of items.
2. After grouping `orders` by `customer`, transform each group's array to only include orders where `qty >= 3`.
3. Return or log the filtered grouped result.

Example input:
```js
const orders = [
  { customer: 'A', product: 'Book',  qty: 2 },
  { customer: 'B', product: 'Game',  qty: 1 },
  { customer: 'A', product: 'Game',  qty: 3 },
  { customer: 'B', product: 'Book',  qty: 4 }
];
```
Expected final output:
```js
{
  A: [{ customer: 'A', product: 'Game', qty: 3 }],
  B: [{ customer: 'B', product: 'Book', qty: 4 }]
}
```

Starter skeleton (fill in implementation):
```js
function groupBy(array, keyFn) {
  const result = {};
  // iterate array and push items into result[key]
  return result;
}

// usage: groupBy(orders, o => o.customer)
```
