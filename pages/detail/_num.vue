<template>
  <section class="container">
    <div>
      <div>
        page {{$route.params.num}}
      </div>
      <h1>{{post.title}}</h1>
      <section>
        <div>
          {{post.body}}
        </div>
      </section>
      <div class="links">
        <div><nuxt-link :to="nextlink" >next page</nuxt-link></div>
        <div><nuxt-link to="/" >Top</nuxt-link></div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from "axios";
  export default {
    name: "_num",
    head() {
      return {
        title: this.post.title
      }
    },
    asyncData({ req, params }) {
      // We can return a Promise instead of calling the callback
      return axios.get(`https://jsonplaceholder.typicode.com/posts/${params.num}`)
        .then((res) => {
          return { post: res.data }
        })
    },
    computed: {
      nextlink() {
        return "/detail/" + (parseInt(this.$route.params.num) + 1);
      }
    }
  };
</script>

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    /*justify-content: center;*/
    align-items: center;
    /*text-align: center;*/
    padding: 30px;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
