<template>
  <div class="container">
    <div>
      <h1>Change the header content</h1>
      <div>
        <input type="text" :value="$store.state.headerText" @input="setval"/>
      </div>
      <div>
        <nuxt-link to="/" >home</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Hoge",
    methods: {
      setval(ev) {
        this.$store.commit("setHeader", ev.target.value)
      }
    },
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
