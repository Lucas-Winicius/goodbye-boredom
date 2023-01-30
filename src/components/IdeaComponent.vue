<template>
  <article>
    <h1 id="activity">{{ activity }}</h1>

    <p id="price">{{ price }}</p>
    <p id="participants">{{ participants }}</p>
    <p id="type">{{ type }}</p>

    <a v-if="link" :href="link" id="link">Link</a>

    <p id="accessibility">{{ accessibility }}</p>
  </article>
</template>

<script>
export default {
    name: 'IdeaComponent',
    props: [ 'activity', 'price', 'type', 'participants', 'link', 'accessibility' ]
};
</script>

<style scoped>
article {
    display: flex;
    flex-wrap: wrap;
    width: 25vw;
    margin: 10px;
    padding: 20px 15px;
    border: 1px solid black;
}

article > h1 {
    text-align: center;
    color: rgba(245, 245, 245, 0.79);
    margin: 20px 0px;
}
</style>