<template>
  <div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      new_comment: "", // 新規todoコメント入力用inputの値
      filter_mode: "all" // todoリストをフィルタリングするモード。(初期モードは、全て)
    };
  },
  methods: {
    
  },
  computed: {

  }
};
</script>

<style>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.filter {
  display: flex;
  margin-bottom: 20px;
}
</style>