# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Links

- Solution URL: (https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub?share=true)
- Live Site URL: (https://hamdi4-beep.github.io/age-calculator-app-main/)

## My process

I carefully analyzed the project requirements first. And then I created the repo with all the necessary dependancies.
I used React to build reusable components and clearly outlined responsibilities for each component.

### Built with

- Semantic HTML5 markup
- TypeScript
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned to be more intentional with the thought process and make better decisions in terms of component architecture. It's easy to make decisions that only hinder the app progress later on. I learned I could avoid this by drawing identifying which elements have values that update the UI.

### Continued development

Math is crucial when it comes to building apps that apply any type of mathematical operations. It's not my strong suit, so I need to advance my skills in this regard.

## Author

- Frontend Mentor - [@hamdi4-beep](https://www.frontendmentor.io/profile/hamdi4-beep)
- Twitter - [@Hamdi33727935](https://twitter.com/Hamdi33727935)

## Acknowledgments

I couldn't get through the math equation that calculates the age so I took a hint from GragertVD's solution. It was helpful to see how he used the date object to handle the year leap.