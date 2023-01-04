<template>
  <li>
    {{ assignment.title }} - {{ assignment.tag }}

    <input type="checkbox" v-model="assignment.completed" />
  </li>
</template>

<script>
export default {
  props: {
    assignment: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>