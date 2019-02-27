<template>
  <div>
    <form action="/todo" method="POST">
      <input id="newuser" type="text" name="user" placeholder="ユーザ名を入力" required/>
      <input id="newuser" type="text" name="mail" placeholder="メールアドレスを入力" required/>
      <input id="newuser" type="text" name="pass" placeholder="パスワードを入力" required/>
      <button id="newuser">新規登録</button>
    </form>
  </div>
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

<style>

</style>
