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
    Chart Data from CSV
    {{$page.chart.id}}
    <table>
      <tr v-for="row in $page.chart.records" :key="$page.chart.records.expenditure">
        <td>{{row.expenditure}}</td>
        <td>{{row.percent}}</td>
      </tr>
    </table>
  </Layout>
</template>


<page-query>
  query Chart {
  chart: chartData (path:  "/chart-data/fy20-overall-spending-by-category"){
   	id
    records {
      expenditure
      percent
    }
  }
}
</page-query>

<script>
export default {
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
