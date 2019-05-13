<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135"/>

    <h1>Hello, world!</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

    <hr>
    <p>Example of fetching JSON data from and API</p>
    <div v-for="edge in $page.jokes.edges" :key="edge.node.id">
      {{ edge.node.title }}
      <g-link :to="edge.node.path">Read more</g-link>
    </div>
    <Pager :info="$page.jokes.pageInfo"/>
  </Layout>
</template>

<page-query>
query Jokes ($page: Int) {
  jokes: allNorisJoke (perPage: 10, page: $page, sortBy: "title", order: ASC) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
