---
title: "Random Sorting"
description: ""
omit_header_text: true
featured_image: 
summary: "The Random Sorting function rearranges a given table of data"
type: page
weight: 2
js: "index.js"
---

## Context

The code for this article comes from a broader assignment that both creates tables for a website and allows the site's user to rearrange the table with a group of buttons with different functionalities. That site uses data of a small collection of artists from the music genre, "Bhangra". As mentioned, the site had multiple buttons, and one of these being a 'randomizer', which rearranges the table's artists in, as you might be able to guess, a random order. 

## Starting this Function

The function takes no paramters, but does require us to look at the rest of the code in the problem to understand the proper terminology that we will need to use when writing the function. The following lines of code should be satisfactory:

```js
const randButton = document.querySelector("#randButton");

randButton.addEventListener("click", sortByRandom);
```

The script has a 'randButton' ready for us to use, but it needs a function that will be called whenever it is clicked. This function will be called 'sortByRandom'. 

## How Does .sort() Work?

To understand how this function works and what is the idea behind it, first I have to explain how the .sort() method works. 

The .sort() method reorders values of an array. It compares values two at a time, using whatever function is provided. As the .sort() will see, the function should return a negative number if the first element comes first, a positive number if the second element comes first, and zero if their order stays the same.

For example:

---
* const abc = [3, 2, 1]

console.log(abc.sort(a, b) => a < b)
> 3 < 2 = 1 
* const abc = [2, 3, 1]
> 3 < 1 = 2
* const abc = [2, 1, 3]
---

And so on back from the beginning until .sort() determines that it has reached the "correct order". To see it in action, it might look something like this:


```js
const arr = [3, 9, 2, 5, 1]
console.log(arr.sort())
```

---
[1, 2, 3, 5, 9]

---

The array is returned in numerical order from left to right. Note: this is not necessarily always numerical order. The .sort() method will look at numbers like 11 or 24, and it will put them before numbers like 8 or 9 because for some reason it only looks at the first character of a value.  

## A Function within a Function

However, we want to randomize this array not just put it in the order the .sort() decides. In order to do this, I created a function within a function. byRand() takes two parameters: 'a' and 'b', which are the two values that .sort() is going to be looking at each time it loops. 

```js
function byRand(a, b){
  return Math.random() - 0.5;
}
const sortedByRandom = artists.sort(byRand);
```

Under normal circumstances, Math.random() will produce a real number between 0 and 1. We want it to return a negative or positive number, so that .sort() will rearrange the numbers. But we also want there to be an equal chance for the value to be either negative or positive, so that the rearranged order is actually random. To do this, we can subtract whatever Math.random() produces by 0.5. 

Artists is defined earlier in the code, outside of the relevancy for this article. Just know that it is an object with an array of values. 

## The Finalized Code

Now that the randomizer itself is completed and working, we can put the code together into something like this:

```js
function sortByRandom() {
  function byRand(a, b) {
    return Math.random() - 0.5;
  }
  const sortedByRandom = artists.sort(byRand);
  const tab = document.querySelector("#bhangra");
  tab.innerHTML = "";
  populateTable(sortedByRandom);
}
```

The function 'sortByRandom' will be pulling from the 'bhangra' element, see *Context*. tab.innerHTML is going to make this code functional in an html, and give us a clear array to put our new array into (assigned to 'sortedByRandom'). This array will be called by populateTable(), which will create a table that is visible to users of the site. 

The main focus of this article is the method of randomizing in this function, and it is has been to show to clearly work!
