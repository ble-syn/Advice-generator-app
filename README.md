# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

<img width="1440" alt="Screenshot 2022-08-27 at 11 26 52 AM" src="https://user-images.githubusercontent.com/68845318/187026344-d4702901-3ef6-4bb4-951c-ade4446a04a1.png">

<img width="348" alt="Screenshot 2022-08-27 at 11 27 25 AM" src="https://user-images.githubusercontent.com/68845318/187026349-9870dea0-eca7-43b9-babd-634f57f51372.png">



### Links

- Live Site URL: [live site URL](https://ble-syn.github.io/Advice-generator-app/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learnt how to interact with 3rd-party APIs. and was able to put async and await into practise


```js
const url = "https://api.adviceslip.com/advice";
async function getAdvice() {
  const fetchData = await fetch(url)
  const data = await fetchData.json();
   
}
```

### Continued development

I'd love to focus more on projects that requires arrays and object destructuring, asynchronous javascript, APIs and wprking with json.



## Author

- Website - [Blessing Peter](https://www.your-site.com)
- Frontend Mentor - [@ble-syn](https://www.frontendmentor.io/profile/ble-syn)
- Twitter - [@ble_syn_](https://www.twitter.com/ble_syn_)


