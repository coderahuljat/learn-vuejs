export default {
  template: `
            <div v-show="inprogressAssignments.length">

            <h2> In progress Assignment List</h2>

            <ul>
                <li v-for="assignment in inprogressAssignments" :key="assignment.id">{{assignment.title}}

                    <input type="text" v-model="assignment.title" name="" id="">
                    <input type="checkbox" v-model="assignment.completed" name="" id="">
                </li>

            </ul>
        </div>
        <br><br>

        <div v-show="completedAssignments.length">

            <h2> completed Assignment List</h2>

            <ul>
                <li v-for="assignment in assignments.filter(a=>a.completed)" :key="assignment.id">{{assignment.title}}

                    <input type="text" v-model="assignment.title" name="" id="">
                    <input type="checkbox" v-model="assignment.completed" name="" id="">
                </li>

            </ul>
        </div>
    `,
  data() {
    return {
      active: false,
      assignments: [
        { id: 1, title: "physics", completed: false },
        { id: 2, title: "maths", completed: false },
        { id: 3, title: "chamistry", completed: false },
      ],
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
  computed: {
    completedAssignments() {
      return this.assignments.filter((a) => a.completed);
    },
    inprogressAssignments() {
      return this.assignments.filter((a) => !a.completed);
    },
  },
};
