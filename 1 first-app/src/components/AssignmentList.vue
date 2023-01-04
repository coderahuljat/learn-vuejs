<template>

  <div>
    <h2>{{ title }} ({{ filterdAssignments.length }})</h2>
    <br />
    <tags v-show="this.assignments.map((a) => a.tag).length" :inital-tags ="this.assignments.map((a) => a.tag)" :current-tag="currentTag" @change-tag="currentTag = $event" ></tags>
    <ul  v-show="filterdAssignments.length">
      <Assignment
        v-for="assignment in filterdAssignments"
        :key="assignment.id"
        :assignment="assignment"
      ></Assignment>
    </ul>

    <br>
    <slot />

    <br>
    <slot name="test">Override this</slot>
  </div>
</template>

<script>
import Assignment from "./Assignment.vue";
import Tags from "./Tags.vue";

export default {
  components: {
    Assignment,Tags
  },
  data() {
    return {
      currentTag: "All",
    };
  },
  props: {
    assignments: Array,
    title: String,
  },
  computed: {
    filterdAssignments() {
      if (this.currentTag == "All") {
        return this.assignments;
      } else {
        return this.assignments.filter(
          (aassignment) => aassignment.tag == this.currentTag
        );
      }
    },
    },

    methods: {
        changeTag(rr) {
            this.currentTag =rr
        }
    }
};
</script>

<style>

.myclass{
    color:white;
    background:black
}
</style>