# Challenge #4: A box inside another box and another...

## Description

Santa Claus needs to check his gift boxes to make sure he can pack them all in his sleigh. He has a series of boxes of different sizes, characterized by their length, width and height.

Your task is to write a function that, given a list of boxes with their sizes, determines whether it is possible to pack all the boxes into one so that each box contains another (which in turn contains another, and so on).

Each box represents his measurements with an object. For example: {l: 2, w: 3, h: 2}. This means that the box has a length of 2, a width of 3, and a height of 2.

A box fits into another box if all the sides of the first are less than the sides of the second. The elves have told us that boxes can't be rotated, so you can't put a 2x3x2 box in a 3x2x2 box. Let's see some examples:

<pre><code>
fitsInOneBox([
   { l: 1, w: 1, h: 1 },
   { l: 2, w: 2, h: 2 }
]) // true
</code></pre>

In the example above, the smaller box goes into the larger box. Therefore, it is possible to pack all the boxes in one. Now let's look at a case that doesn't:

<pre><code>
const boxes = [
   { l: 1, w: 1, h: 1 },
   { l: 2, w: 2, h: 2 },
   { l: 3, w: 1, h: 3 }
]
fitsInOneBox(boxes) // false
</code></pre>

In the example above, the smaller box fits into the middle box, but the middle box does not fit into the larger box. Therefore, it is not possible to pack all the boxes in one.

Please note that the boxes may not come in order:

<pre><code>
const boxes = [
   { l: 1, w: 1, h: 1 },
   { l: 3, w: 3, h: 3 },
   { l: 2, w: 2, h: 2 }
]

fitsInOneBox(boxes) // true
</code></pre>

In the example above, the first box fits in the third, and the third in the second. Therefore, it is possible to pack all the boxes in one.

## Things to keep in mind:

The boxes cannot be rotated as the elves have told us that the machine is not ready.
The boxes can come out of order in size.
The boxes are not always square, they can be rectangular.
