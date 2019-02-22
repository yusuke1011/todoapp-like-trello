<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        todoapp
      </h1>
      <h2 class="subtitle">
        My striking Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data: function() {
    return {
      response: null
    }
  },
  mounted: function() {
    //DBからtodoデータを取得する
    this.$axios
      .$get('/api/todos')
      .then(response => {
        console.log('取得データ：',response.data.todos);
      })
      .catch(error => {
        console.log('エラー!!：',response.data.error);
      })

    //データをDBに保存
    this.$axios
      .$post('/api/todos', {title: 'title', body: 'body'})
      .then(response => {
        console.log('追加データ：',response.data.todo);
      })
      .catch(error => {
        console.log('エラー!!：',response.data.error);
      })

    //DBのデータを更新
    this.$axios
      .$put('/api/todos', {id: 1, title: 'updated title', body: 'updated body'})
      .then(response => {
        console.log('更新データ：',response.data.todo);
      })
      .catch(error => {
        console.log('エラー!!：',response.data.error);
      })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
