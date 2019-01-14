# Week 1 Homework

## Part 1: Javascript Review

### 1.1: Dice Roll
Create a function that will randomly return 1,2,3,4,5 or 6. Examples:
```
diceRoll() === 4
diceRoll() === 2
diceRoll() === 5
```

### 1.2: Number Stats
Create a function that will take an array of numbers and return an object of their statistics.  Example:
```
numberStats([10,5,15]) === {avg:10, min:5, max:15, length:3, nums:[10,5,15]}
```

### 1.3: Query Params Parser
Create a function that will process a query params string into an object of the key/value pairs.  Examples:
```
parseParams('name=John&color=red&age=29') === {name:'John', color:'red', age:'29'}
parseParams('') === {}
parseParams('item=eggs&qty=2&item=milk') === {qty:2, item:'milk'}
```

## Part 2: Express and Web Servers

Create a very simple voting application.  You'll be able to be vote for the first item by going to [/a](`http://localhost:3000/a) and the second by going to [/b](http://localhost:3000/b).

The routes will return the current votes for each item, it can be as JSON or HTML.
