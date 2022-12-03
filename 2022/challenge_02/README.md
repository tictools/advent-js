# Challenge #2: Nobody wants to do overtime

## Description

A millionaire has bought a social network and it doesn't bring good news. He has announced that every time a working day is lost due to a public holiday, it will have to be compensated with two extra hours on another day of the same year.

Obviously the people who work in the company have not done it a single bit of grace and they are preparing a program that will tell them the number of overtime hours they would work in the year if the new rule is applied.

As it is an office job, your working hours are from Monday to Friday. So you only have to worry about the holidays that fall on those days.

**Given a year and an array with the dates of the holidays, returns the number of overtime hours that will be worked that year:**

<pre><code>
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // MM/DD format

// 01/06 is January 6, Jews. account
// 04/01 is April 1, a Friday. account
// 12/25 is December 25, a Sunday. It doesn't count.

countHours(year, holidays) // 2 days -> 4 extra hours in the year
</code></pre>

## Things to keep in mind and tips

- The year can be a leap year. Make the checks you need for it, if necessary.
- Although December 31 is a holiday, overtime will be worked the same year and not the following.
- The <code>Date.getDay()</code> method returns the day of the week for a date. 0 is Sunday, 1 is Monday, etc.
