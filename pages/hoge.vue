<template>
  <div class="container">
    <div>
      <h1>page hoge</h1>
      <nuxt-link to="/" >home</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hoge",
  };
</script>

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
