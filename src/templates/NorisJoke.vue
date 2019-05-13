<template>
  <Layout :title="$page.joke.title">
    <h1>{{$page.joke.title}}</h1>
    <strong>Category: {{$page.joke.fields.cat}}</strong>
    <em>Icon: {{$page.joke.fields.icon}}</em>
    <div class="joke">
      <div v-html="$page.joke.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query Joke ($path: String!) {
  joke: norisJoke (path: $path) {
    title
    content
    path
    fields{
      cat
      icon
    }
  }
}
</page-query>

<script>
import Layout from "~/layouts/Default.vue";

export default {
  components: {
    Layout
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  metaInfo() {
    return {
      title: this.$page.joke.title
    };
  }
};
</script>

<style lang="scss">
.joke {
  padding: 1.5rem;
  font-size: 125%;
}
</style>