
# Applying Classes in the DOM

In this exercise you will use your code editor to manipulate the DOM by changing the colours of the dots you see in your browser.

---

1. Open the `index.html` file contained in this repository in your internet browser. You should be able to see three grey dots on the page.

2. Let's have an explore of the files you have in this folder.

**index.html**\
This is the file that we loaded on your browser. It contains the three `div` elements that have created the circles on your page (and one more that is currently invisible). It also contains a `link` and `script` tag in the head that make use of our other files.

**style.css**\
In this styles file we have a number of styles already written. Notice that there's a style for the class `blue` whose only job is to alter the `background-color` of whatever element it is applied to. 

**classes.js**\
Notice that in this file the `one` function goes looking for the div by its `id` attribute. Once this has been returned and given the name `one`, we then modify the `classList` property using the `add()` function. 

3. Uncomment line 8 of `classes.js`. This should now call the `one` function when the page loads. Make a guess of what will happen now and then reload your browser page.

4. Add another class to `style.css`. Call it `.green`, and have it alter the `background-color` of an element to green.

5. In your `classes.js` file, write a new function called two which finds the element with id 'two' and modifies its classList property. Remember to call it from `start`.
Reload the browser. Did the second div change colour?

6. Pick a colour and follow the previous steps to make a third div change to the colour of your choice.

Notice that the fourth div in `index.html` has a class already: `invisible`. It's also not on the screen in the browser. There's no `id` attribute, so we can't find it using `getElementById`. To find things by class instead, we need to use `getElementsByClassName` (note the 's' in Elements). 

`getElementsByClassName` returns an array, because there could be many DOM elements with the class `invisible`. The [MDN documentation on `getElementsByClassName`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName) might be useful here.

7. Write a new function called `makeVisible`.  Because there's only one invisible div, we know it must be element `[0]` in the array that comes back from `getElementsByClassName`.

6. Add the `'visible'` class to the div's `classList` property using the same method as the previous examples.

7. Call the `makeVisible` function from start.

8. Reload the browser. If all has gone well, you should see a fourth div. If not, spend a little time troubleshooting, then reach out for help on slack.

When you're done, make sure you stage, commit, and push your branch back to GitHub.
