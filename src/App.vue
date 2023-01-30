<template>
  <header>
    <h1>Goodbye Boredom</h1>
  </header>
  <div id="content">
    <idea-component v-for="(idea, index) in response" :key="index"
      :activity="idea.activity"
      :participants="idea.participants"
      :link="idea.link"
    />
    <div id="loadMoreContainer">
      <button @click="getMoreIdeas">Load More...</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import IdeaComponent from "./components/IdeaComponent.vue";

export default {
  name: "App",
  components: { IdeaComponent },
  data() {
    return { response: [] };
  },
  methods: {
    getMoreIdeas() {
      for (let i = 1; i <= 30; i++) {
        axios("https://www.boredapi.com/api/activity/").then((response) =>
          this.response.push(response.data)
        );
      }
    },
  },
  mounted() {
    this.getMoreIdeas();
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0px;
  padding: 0px;
  outline: 0px;
  font-family: 'Montserrat', sans-serif;
  color: rgba(245, 245, 245, 0.79);
}

header {
  background-color: #1e1e25;
  border-bottom: 2px solid #14141b;
}

header h1 {
  padding: 10px 30px;
}

body {
  background-color: #23232a;
  overflow-x: hidden;
}

#content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#loadMoreContainer {
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 30px 0px;
}

#loadMoreContainer > button {
    background-color: #2b2b32;
    border: 1px solid black;
    padding: 7px 30px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 2px 2px 3px #0000005f;
    font-weight: bold;
    transition: 500ms;
}

#loadMoreContainer > button:hover {
  transform: scale(1.2);
}

@media screen and (max-width: 375px) {
  header > h1 {
    font-size: 100%;
  }
}

</style>