<template>
  <div class="main">
    <div>
      <Tab />
    </div>
  </div>
</template>

<script>
import Tab from '~/components/Tab.vue'

export default {
  components: {
    Tab
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

    //DBのデータを削除
    this.$axios
      .$delete('/api/todos', {data: {id: 3}})
      .then(response => {
        console.log('削除データ：',response.data.todo);
      })
      .catch(error => {
        console.log('エラー!!：',response.data.error);
      })
  }
}
</script>

<style scoped>
.main {
  margin: 20px;
  padding: 0px;
}
.links {
  padding-top: 15px;
}
</style>
