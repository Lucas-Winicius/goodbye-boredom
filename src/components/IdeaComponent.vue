<template>
  <article>
    <h1 id="activity">{{ activity }}</h1>
    <span id="participants">Participants: {{ participants }}</span>
    <a v-if="link" :href="link" id="link">Link</a>
  </article>
</template>

<script>
export default {
    name: 'IdeaComponent',
    props: [ 'activity', 'participants', 'link']
};
</script>

<style scoped>
article {
    display: flex;
    flex-wrap: wrap;
    width: 25vw;
    margin: 10px;
    padding: 20px 15px;
    border: 1px solid rgba(0, 0, 0, 0.692);
    background-color: #2f2f39;
    border-radius: 10px;
    box-shadow: 3px 3px 8px #00000094;
    transition: 800ms;
}

article:hover {
  transform: scale(1.08);
}

article > h1 {
    width: 100%;
    text-align: center;
    margin: 20px 0px;
}

article > #participants {
  /* display: block; */
  width: 100%;
  text-align: center;
}

article a {
  width: 100%;
  text-align: end;
  margin: 10px 1vw;
}

@media screen and (max-width: 1100px) {
  article {
    width: 40vw;
  }
}

@media screen and (max-width: 630px) {
  article {
    width: 90vw;
    font-size: .9em;
  }
}

</style>