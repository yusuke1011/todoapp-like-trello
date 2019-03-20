<template>
<span class="test">
  <button @click="$emit('input', id)" :class="[active, 'btn btn-light']">
    {{ label }}
  </button>
</span>
</template>

<script>
export default {
  props: {
    id: Number,
    label: String,
    value: Number
  },
  computed: {
    active() {
      return this.value === this.id ? 'active' : false
    }
  }
}
</script>

<style scoped>
.active {
  background: #f7c9c9;
}
.test{
    margin-right: auto;
}
</style>