<template>
  <div id="course_detail">
    <CourseDetailTemplate
      v-if="this.$route.params.program"
      :course="program"
    ></CourseDetailTemplate>
  </div>
</template>
<script>
import CourseDetailTemplate from "@/components/CourseDetailTemplate.vue";
import { mapState } from "vuex";
export default {
  name: "CourseDetail",
  props: ["program"],
  components: {
    CourseDetailTemplate,
  },

  computed: {
    ...mapState({
      detail: function(state) {
        return state.allCourseDetails[this.$route.params.program];
      },
    }),
  },
};
</script>
