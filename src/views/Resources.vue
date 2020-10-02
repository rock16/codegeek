<template>
  <div id="resource">
    <section v-if="bootcamp.resource" class="resource_content">
      <h1>Resources</h1>
    </section>
    <section v-else class="resource_content">
      <h2>
        Files and Resources are not available for
        <span>{{ bootcamp.title }}</span> yet. Please check back two days before
        <span>{{ bootcamp.date }}</span
        >.
      </h2>
      <router-link to="/dashboard">Go To Dashboard</router-link>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["resource"],
  data() {
    return {
      bootcamp: {},
    };
  },
  methods: {
    findCourse(val) {
      this.bootcamp = this.featuredCourses.find(function(item) {
        return item.title.trim() === val.trim();
      });
    },
  },
  computed: {
    ...mapState(["featuredCourses"]),
  },
  created() {
    this.findCourse(this.resource);
  },
};
</script>
<style scoped>
#resource .resource_content {
  height: 80vh;
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
#resource .resource_content span {
  color: red;
}
</style>
