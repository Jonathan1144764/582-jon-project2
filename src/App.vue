<template>
  <MainHeader />
  <router-view />
</template>

<script>
import MainHeader from "./components/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #d7be82;
  font-family: "Poppins", sans-serif;
}

header {
  background-color: #4a7c59;
  nav {
    margin-bottom: 0.5rem;
    a {
      color: #fff;

      &:hover {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}

section {
  padding: 20px 0;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

ul {
  list-style-type: none;
}

.container {
  width: 90%;
  max-width: 1400px;
  margin: auto;
}

.header-flex {
  padding: 1rem 0;
  text-align: center;
}

.user-management {
  button {
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
    background-color: #d7be82;
  }
  label {
    margin: 0 1rem;
  }
}

.home-landing {
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  .container {
    max-width: 700px;
  }
}

.home-landing p:first-of-type {
  margin-bottom: 0.5rem;
}

.admin-control-panel {
  text-align: center;

  button {
    padding: 10px 25px;
    margin: 0 0.5rem;
    border-radius: 10px;
    border: none;
    background-color: #4a7c59;
    color: #fff;
  }

  #parks {
    padding: 3px;
    background-color: #96c3f2;
    border: none;
  }

  #events {
    padding: 3px 5px;
    background-color: #96c3f2;
    border: none;
  }
}

.admin-nav {
  padding-bottom: 0.3rem;
  margin-bottom: 0.7rem;
  border-bottom: 1px solid black;

  a {
    color: #4a7c59;
  }
}

.park-form {
  padding: 10px;
  margin: 1rem 0;
  border: 1px solid black;
  text-align: left;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }

  .name-image-inputs-wrapper {
    display: flex;
    justify-content: space-between;
  }
}

.park-radio-inputs {
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .input-wrapper {
    width: calc((100% - 20px) / 2);

    input {
      margin-right: 5px;
    }
  }
}

.park-number-inputs {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  label {
    display: block;
  }

  .input-wrapper {
    width: calc((100% - 20px) / 2);
  }
}

.event-form {
  padding: 10px;
  margin: 1rem 0;
  border: 1px solid black;
  text-align: center;

  #parks {
    margin-bottom: 1rem;
  }
}

.event-dates-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.public-view {
  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }

  .view-bookmarks-btn {
    padding: 5px 10px;
    margin-bottom: 1rem;
    background-color: #4a7c59;
    border: none;
    border-radius: 10px;
    color: #fff;
  }
}

.park-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1.5rem;

  .park {
    position: relative;

    .show-events-btn {
      padding: 5px 10px;
      background-color: #4a7c59;
      border: none;
      color: #fff;
    }
  }
}

.park-image {
  height: 200px;
  width: 175px;
  background-size: cover;
  background-position: center;
}

.park-events {
  position: absolute;
  top: 0;
  background-color: #4a7c59;
  animation: fadein 0.08s linear;
  animation-fill-mode: forwards;

  p {
    margin-bottom: 1rem;

    span {
      display: block;
    }
  }

  .exit-window {
    margin: 5px 8px 0 0;
    background: none;
    border: none;
    font-size: 1.1rem;
    float: right;
  }
}

.park-event {
  padding: 10px 15px;

  button {
    padding: 3px 5px;
    background-color: #96c3f2;
    border: none;
    border-radius: 10px;
  }
}

.park-event:not(:last-of-type) {
  border-bottom: 1px solid black;
}

.bookmark-window {
  width: 90%;
  background-color: #4a7c59;
  position: absolute;
  z-index: 10;
  animation: fadein 0.08s linear;
  animation-fill-mode: forwards;

  h3 {
    margin-bottom: 1rem;
    text-align: center;
  }

  .exit-window {
    margin-top: -2rem;
    margin-right: 5px;
    background: none;
    border: none;
    float: right;
  }
}

.bookmarks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1.5rem;

  h3 {
    text-align: left;
  }

  .event-time {
    display: block;
  }
}

#users-list {
  padding: 3px 5px;
  background-color: #96c3f2;
  border: none;
}

#park-name-input,
#park-image-input {
  padding: 3px 5px;
  outline: none;
  display: block;
}

#event-name-input {
  display: block;
  margin: auto;
  margin-bottom: 0.5rem;
}

#start-date-input {
  margin: auto;
}

#end-date-input {
  margin: auto;
  margin-bottom: 1rem;
}

#event-description-input {
  margin: auto;
  display: block;
  outline: none;
  resize: none;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media screen and (min-width: 576px) {
  section {
    padding: 40px 0;
  }
}

@media screen and (min-width: 768px) {
  header {
    nav {
      margin: 0;
    }
  }

  .header-flex {
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .park-form {
    .name-image-inputs-wrapper {
      justify-content: center;

      .input-wrapper {
        margin: 0 1rem;
      }
    }
  }

  .park-radio-inputs {
    .input-wrapper {
      width: fit-content;
    }
  }

  .park-number-inputs {
    .input-wrapper {
      text-align: center;
    }
  }

  .event-dates-inputs {
    flex-direction: row;
  }

  #start-date-input,
  #end-date-input {
    margin: 0 0.3rem;
  }
}

@media screen and (min-width: 992px) {
  .park-radio-inputs {
    justify-content: center;

    .input-wrapper {
      margin: 0 0.5rem;
    }
  }

  .park-number-inputs {
    flex-direction: column;
    align-items: center;
  }
}
</style>
