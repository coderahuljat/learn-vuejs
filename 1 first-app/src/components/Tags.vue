<template>
  <div v-show="true">
  <button
    v-for="tag in tags"
    :key="tag"
    :class="{ myclass: tag == currentTag }"
    @click="$emit('changeTag', tag)"
  >
    {{ tag }}
  </button>
  </div>
</template>

<script>
export default {
  emits: ["changeTag"],
  props: {
    initalTags: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      return new Set(["All", ...this.initalTags]);
    },
  },

};
</script>

<style>
</style>