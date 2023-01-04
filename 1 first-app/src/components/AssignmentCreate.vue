<template>
  <br />
  <br />
  <br />
  <br />
  <form @submit.prevent="addAssingnment">
    <input type="text" v-model="newAssignment" name="" id="" />
    <br />
    <button type="submit">Add Assignment</button>
  </form>
</template>

<script>
export default {
  emits: ["addAssingnment"],

  data() {
    return {
      newAssignment: "",
    };
  },
  methods: {
    addAssingnment() {
      this.$emit("addAssingnment", this.newAssignment);
      this.newAssignment = "";
    },
  },
};
</script>

<style>
</style>