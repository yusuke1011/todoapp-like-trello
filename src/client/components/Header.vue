<template>
  <div>
    <div class="header">
      <div class="header-title" v-on:click="home">Trello風ToDoアプリ</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #35495e;
  height: 50px;
}

.header-title{
  text-align: center;
  color: white;
  cursor: pointer;
  cursor: hand;
}
</style>