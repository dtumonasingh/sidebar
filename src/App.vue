<template>
  <div id="app">
    <main>
      <!-- Sidebar -->
      <div id="sidebar" class="sidebar">
        <!-- circles -->
        <div class="circles">
          <div class="circle circle1"></div>
          <div class="circle circle2"></div>
          <div class="circle circle3"></div>
        </div>

        <!-- close button-->
        <button id="close-button" class="close-button"><img class="close-button--icon" src="./assets/close.svg"/></button>

        <div id="company-info" class="sidebar--company-info">
          <div class="sidebar__company-info--logo">
            <img class="sidebar__company-info--icon" src="./assets/logo.svg"/>
          </div>
          
          <div class="sidebar__items--text">
            <p>Mona Singh</p>
          </div>
        </div>

        <hr/>

        <!-- Menu Title-->
        <div class="title message--menu">
          <p>MENU</p>
        </div>

        <!-- sidebar items section-->
        <div id="sidebar-items-section" class="sidebar__items-section">
          <div class="sidebar__items">
            <div class="tooltip">
              <img class="sidebar__items--icon" src="./assets/home.svg"/>
              <span class="tooltiptext">Home</span>
            </div>
            <div class="sidebar__items--text">
              <p>Home</p>
            </div>
          </div>

          <div class="sidebar__items">
            <div class="tooltip">
               <img class="sidebar__items--icon" src="./assets/wishlist.svg"/>
              <span class="tooltiptext">Wishlist</span>
            </div>
            <div class="sidebar__items--text">
              <p>Wishlist</p>
            </div>
          </div>

          <div class="sidebar__items">
            <div class="tooltip">
              <img class="sidebar__items--icon" src="./assets/settings.svg"/>
              <span class="tooltiptext">Settings</span>
            </div>
            <div class="sidebar__items--text">
              <p>Settings</p>
            </div>
          </div>

          <div class="sidebar__items">
            <div class="tooltip">
              <img class="sidebar__items--icon" src="./assets/security.svg"/>
              <span class="tooltiptext">Security</span>
            </div>
            <div class="sidebar__items--text">
              <p>Security</p>
            </div>
          </div>

          <div class="sidebar__items">
            <div class="tooltip">
              <img class="sidebar__items--icon" src="./assets/clock.svg"/>
              <span class="tooltiptext">Clock</span>
            </div>
            <div class="sidebar__items--text">
              <p>Clock</p>
            </div>
          </div>

          <div class="sidebar__items">
            <div class="tooltip">
              <img class="sidebar__items--icon" src="./assets/notes.svg"/>
              <span class="tooltiptext">Alarm</span>
            </div>
            <div class="sidebar__items--text">
              <p>Notes</p>
            </div>
          </div>

          <div class="sidebar__items">
            <div class="tooltip">
              <img class="sidebar__items--icon" src="./assets/shop.svg"/>
              <span class="tooltiptext">Shop</span>
            </div>
            <div class="sidebar__items--text">
              <p>Shop</p>
            </div>
          </div>

          <div class="sidebar__items">
            <div class="tooltip">
              <img class="sidebar__items--icon" src="./assets/cart.svg"/>
              <span class="tooltiptext">Cart</span>
            </div>
            <div class="sidebar__items--text">
              <p>Cart</p>
            </div>
          </div>

          <div class="sidebar__items">
            <div class="tooltip">
              <img class="sidebar__items--icon" src="./assets/review.svg"/>
              <span class="tooltiptext">Order</span>
            </div>
            <div class="sidebar__items--text">
              <p>Review</p>
            </div>
          </div>
        </div>

        <!-- Message Title-->
        <div class="title title--message">
          <p>MESSAGES</p>
        </div>

        <div id="message-section" class="message-section">
          <div class="message-section--item"><img class="profile__image" src="./assets/profile1.jpg" />
          <p class="sidebar__items--text">Dev Thomas</p></div>
          <div class="message-section--item"><img class="profile__image" src="./assets/profile2.jpg" />
          <p class="sidebar__items--text">Meera Nair</p></div>
          <div class="message-section--item"><img class="profile__image" src="./assets/profile3.jpg" />
          <p class="sidebar__items--text">Kate Davidson</p></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('close-button');
const sidebarItemsText = document.getElementsByClassName('sidebar__items--text')
const titles = document.getElementsByClassName('title')
const circle = document.getElementsByClassName('circles')
const messageSection = document.getElementById('message-section');
const sideBarItemsSection = document.getElementById('sidebar-items-section')
const companyInfo = document.getElementById('company-info')


sidebar.addEventListener('click', function(){
    sidebar.classList.add('sidebar--wide')
    closeButton.classList.add('visible')
    console.log(sidebarItemsText)
    Array.prototype.forEach.call(sidebarItemsText, a => {
        a.classList.add('visible')
      });
    messageSection.classList.add('message-section--wide')
    sideBarItemsSection.classList.add('sidebar__items-section--wide')
    Array.prototype.forEach.call(titles, a => {
      a.classList.add('flex-start')
    });
    Array.prototype.forEach.call(circle, a => {
      a.classList.add('flex-start')
    });
    companyInfo.classList.add('flex-start')
})

closeButton.addEventListener('click', function(event) {
    event.stopPropagation();
    sidebar.classList.toggle('sidebar--wide')
    closeButton.classList.remove('visible')
    Array.prototype.forEach.call(sidebarItemsText, a => {
        a.classList.remove('visible')
      });
    messageSection.classList.remove('message-section--wide')
    sideBarItemsSection.classList.remove('sidebar__items-section--wide')
    Array.prototype.forEach.call(titles, a => {
      a.classList.remove('flex-start')
    });
    Array.prototype.forEach.call(circle, a => {
      a.classList.add('flex-start')
    });

    companyInfo.classList.remove('flex-start')

})

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*
=============== 
Fonts
===============
*/
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto:400,700&display=swap");

/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(205, 86%, 17%);
  --clr-primary-2: hsl(205, 77%, 27%);
  --clr-primary-3: hsl(205, 72%, 37%);
  --clr-primary-4: hsl(205, 63%, 48%);
  /* primary/main color */
  --clr-primary-5: hsl(205, 78%, 60%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(205, 89%, 70%);
  --clr-primary-7: hsl(205, 90%, 76%);
  --clr-primary-8: hsl(205, 86%, 81%);
  --clr-primary-9: hsl(205, 90%, 88%);
  --clr-primary-10: hsl(205, 100%, 96%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--ff-secondary);
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: var(--ff-primary);
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 0px;
  color: black;
}

/* Global Classes */
body {
  background: url("./assets/background.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

.sidebar {
  width: 60px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255);
  padding: 10px;
  opacity: .8;
  border-radius: 10px;
  transition: width, left, right, 0.3s;
  transition-property: width, left, right, all;
  transition-duration: 0s, 0s, 0s, 0.5s;
  transition-timing-function: ease, ease, ease, ease;
  transition-delay: 0s, 0s, 0s, 0s;
}

.sidebar--wide {
  width: 200px;
}

.sidebar__container {
  display: flex;
  flex-direction: column;
}

.sidebar__items-section {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.sidebar__items-section--wide {
  align-items: flex-start;
}

.sidebar__items {
  padding: 10px;
  display: flex;
  width: -webkit-fill-available;

  border-radius: 8px;
  height: 30px;
  align-items: center;
}

.sidebar__items:hover {
  background-color: #f8fafe;
}

.sidebar__items--text {
  display: none;
  width: fit-content;
  height: 20px;
  border: none;

  padding-left: 15px;
}

.message-section--text {
  display: none;
}

.sidebar__items--text p {
  width: 80px;
  font-size: 13px;
  color: black;
}

svg {
  color: black;
}

.circles {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: -webkit-fill-available;
}

.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: flex;
  margin-left: 2px;
  margin-right: 2px;
  
}

.circle1 {
  background-color: #fe5c4c;
}

.circle2 {
  background-color: #8a7139;
}

.circle3 {
  background-color: #65e14e;
}

.message-section {
  width: 40px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  transition: width, left, right, 0.3s;
  transition-property: width, left, right, all;
  transition-duration: 0s, 0s, 0s, 0.5s;
  transition-timing-function: ease, ease, ease, ease;
  transition-delay: 0s, 0s, 0s, 0s;
}

.message-section--wide {
  width: 170px;
  align-items: flex-start;
}

.profile__image {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  margin: 7px;
  
}

.title {
  display: flex;
  justify-content: center;
  color: black;
  font-size: 10px;
  margin: 0px;
  margin: 10px;
}


.close-button {
  border-radius: 50%;
  width: fit-content;
  height: inherit;
  display: none;
  background-color: white;
  align-self: flex-end;
  border: none;
}

.visible {
  display: block;
}

.message-section--item {
  display: flex;
  width: fit-content;
  font-size: 10px;
  align-items: center;
}

.sidebar__company-info--logo{
  display: flex;
  justify-content: center;
}

.sidebar__company-info--icon {
  height: 30px; 
}

.sidebar--company-info {
  display: flex;
  margin-top:20px;
  margin-bottom: 10px;
  justify-content: center;
}

hr{
  margin-top:10px;
  margin-bottom: 10px;
   border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.close-button--icon {
  height: 25px;
  width: 25px;
}

.flex-start {
  justify-content: flex-start;
}

.sidebar__items--icon {
  width: 15px;
}

/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 100px;
  background-color: black;
  color: #fff;
  font-size: 12px;
  text-align: center;
  padding: 3px 0;
  border-radius: 15px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;

  /*transition style */
  transition: visibility 200ms, opacity 200ms ease-in;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
