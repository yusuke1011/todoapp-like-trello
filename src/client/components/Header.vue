<template>
  <div class="header">
    <div class="header-title" v-on:click="home">Todo apps</div>
    <div class="user-name">Yusukeさん</div>
    <div class="user-button">
      <button class="btn btn-outline-light">logout</button>
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
};
</script>

<style scoped>
.header {
  background-color: #35495e;
  height: 70px;
  box-shadow: 1px 1px 15px;
  flex: none;
  position: relative;
}

.header-title {
  position: absolute;
  margin-left: 15px;
  margin-top: 15px;
  color: white;
  cursor: pointer;
  cursor: hand;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 300;
  font-size: 25px;
  letter-spacing: 1px;
}
.user-button{
  position:absolute;
  margin-top: 20px;
  margin-left: 750px;
}
.user-name{
  position: absolute;
  margin-top: 24px;
  margin-left: 640px;
  color: white;
  font-weight: 300;
  font-size: 20px;
}
</style>