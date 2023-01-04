<template>
  <div>
    <AssignmentList
      :assignments="filters.inProgress"
      title="Inprogress Assingnment"
    >
    <template v-slot:test>
      <AssignmentCreate  @addAssingnment="addAssingnment"></AssignmentCreate>
</template>

    <template v-slot:default>
      <h2>tetttttttt</h2>
</template>
    </AssignmentList>

    <AssignmentList
      :assignments="filters.completed"
      title="Completed Assingnment"
    >
    </AssignmentList>
  </div>
</template>

<script>
import AssignmentList from "./AssignmentList.vue";
import AssignmentCreate from "./AssignmentCreate.vue";

export default {
  components: {
    AssignmentList,
    AssignmentCreate,
  },

  data() {
    return {
      assignments: [
        { id: 1, title: "physics", completed: false, tag: "class 10" },
        { id: 2, title: "maths", completed: true, tag: "class 12" },
        { id: 3, title: "chamistry", completed: false, tag: "class 10" },
        { id: 4, title: "hindi", completed: false, tag: "class 12" },
        { id: 5, title: "englist", completed: false, tag: "class 10" },
      ],
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.completed),
        completed: this.assignments.filter((a) => a.completed),
      };
    },
  },

  methods: {
    addAssingnment(assignment) {
      var check_if_already_exists = this.assignments.filter(
        (a) => a.title == assignment
      );

      if (check_if_already_exists.length == 0) {
        this.assignments.push({
          id: this.assignments.length + 1,
          title: assignment,
          completed: false,
          tag: "class 10",
        });
      } else {
        alert("Assignment is already exist in the assignment list");
      }
    },
  },
};
</script>

<style>
</style>