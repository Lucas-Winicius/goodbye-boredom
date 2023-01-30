<template>
  <div id="content">
    <idea-component
      activity="Contribute code or a monetary donation to an open-source software project"
      type="charity"
      participants="1"
      price="0.1"
      link="https://github.com/explore"
      accessibility="0"
    />
    <idea-component
      activity="Contribute code or a monetary donation to an open-source software project"
      type="charity"
      participants="1"
      price="0.1"
      link="https://github.com/explore"
      accessibility="0"
    />
    <idea-component
      activity="Contribute code or a monetary donation to an open-source software project"
      type="charity"
      participants="1"
      price="0.1"
      link="https://github.com/explore"
      accessibility="0"
    />
    <idea-component
      activity="Contribute code or a monetary donation to an open-source software project"
      type="charity"
      participants="1"
      price="0.1"
      link="https://github.com/explore"
      accessibility="0"
    />
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
      for (let i = 0; i <= 30; i++) {
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
}

body {
  background-color: #242424;
}

#content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>