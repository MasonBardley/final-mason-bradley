---
title: "Counting B's"
description: ""
omit_header_text: true
featured_image: 
summary: "The 'Counting Bs' function counts the number of 'B's in a word"
type: page
weight: 2
---

## The Problem

The following is an exercise from Chapter 3 of 'Eloquent Javascript' by Marjin Haverbeke. The original text can be read [here](https://eloquentjavascript.net/03_functions.html), which includes the contents of the chapter and hints to the exercise. 

### Counting Beans

You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). The resulting value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.

## Provided Solution

The following is a modified solution to the one that I had provided for the problem. The only alteration is that this version of countBs() also takes the char parameter to make it more digestible for an article. The rest of this article will be spent analyzing this code.

```js
let countBs = function(ranWord, char = "B") {
    let width = ranWord.length;
    let bees = 0;
    for (let count = 0; count < width; count++) {
        if (ranWord[count] === char ) {
            bees++
        }
    } 
    if (bees === 0) {
        return `No ${char}s`
    }
    return bees
}
```
### Examples

Here are some examples of what using this function might look like. 

```js
countBs("BOB");
countBs("kakkerlak", "k");
countBs("kakkerlak");
```
---
* 3
* 4
* No Bs
---

## Starting the Function

The function takes two parameters: 'ranWord' and 'char'. 'ranWord' looks at whatever string the user prompts the function with, and 'char' will be the character that the function counts the total number. The default value for 'char' is set to a capital "B". 

When writing functions, I like to assign any values that will be consistently used throughout the problem first. Here, 'width' is being assigned to the length of the string that the user has provided. Then, in case 'bees' has already been assigned to something else, 'bees' will be assigned to 0. 'bees' will be used later to count the number of the given characters in the function, which I will talk more about later. 

## The For-Loop

Here is a look at the for-loop by itself:

```js
for (let count = 0; count < width; count++) {
        if (ranWord[count] === char ) {
            bees++
        }
    } 
```

In JavaScript, the contents within the parenthesises of for-loops are written in order of the events that will happen. Before the loop begins to run, it will assign 'count' to 0. 'count' will be the value that the loop looks at to see if it is time for the loop to end, which is shown in 'count < width'. The loop will continue running until 'count' is equal to the 'width' value assigned earlier in the function. At the end of every loop, 'count' will increase by 1 ('count++'). So, the loop will run one time for each character in the string provided by the function's user, but what is happening each time loop runs?

Each time it runs, the loop will check if the character that the loop is currently on is equal to the character provided earlier in the parameters of the function. If the result is TRUE, then the loop will add 1 to the 'bees' variable that we assigned to 0 earlier.

For example, in the string 'BOB', the loop will run 3 times. When it stops at B, the loop will look something like this:

```js
for (let count = 0; count < 3; count++) {
        if ("BOB"[1] === "B" ) {
            bees++ 
        }
    } 
```

When the loop has run through each of the values, it will stop, and move onto the next step of the function.

## Returning to the Console

Here is the code seen at the end of the problem:

```js
if (bees === 0) {
        return `No ${char}s`
    }
    return bees
```

It is a simple if() statement that first checks if there were any of the provided characters in the function at all. If there were none, the function will return a phrase that tells the user that no of their characters were in the string. A value is returned in this way by putting a dollar sign in front of the braces containing the given variable. Otherwise, the function will simply return the number of the given character that was present in the string. 

We also cannot forget to put return in front of whatever we want to be returned to the console at the end of the problem. Then, we're done!

