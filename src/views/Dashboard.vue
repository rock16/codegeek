<template>
  <div id="dashboard">
    <section class="dashboard_hero">
      <div class="dashboard_heading">
        <h2>Dashboard</h2>
        <h1>Welcome Back!</h1>
      </div>
    </section>
    <section class="dashboard_tab">
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab.id"
          :class="['tab_btn', { active: currentTab === tab }]"
          @click="currentTab = tab"
        >
          {{ tab }}
        </li>
      </ul>
      <component v-bind:is="currentTabComponent" class="tab"></component>
    </section>
  </div>
</template>
<script>
import TabHome from "@/components/dashboard/TabHome.vue";
import TabMyBootcamp from "@/components/dashboard/TabMyBootcamp.vue";
import TabInbox from "@/components/dashboard/TabInbox.vue";

export default {
  data() {
    return {
      currentTab: "Home",
      tabs: ["Home", "MyBootcamp", "Inbox"],
    };
  },
  components: {
    TabHome,
    TabMyBootcamp,
    TabInbox,
  },
  computed: {
    currentTabComponent() {
      return "Tab" + this.currentTab;
    },
  },
  created() {
    this.$store.dispatch("fetchFeaturedCourses");
  },
};
</script>

<style lang="css" scoped>
section.dashboard_hero {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  min-height: 50vh;
  background: linear-gradient(to right, #022e62, #004693);
  padding: 20px;
}
.dashboard_heading {
  padding: 0px 32px 32px;
}
.dashboard_heading h2 {
  color: #fff;
  font-size: 15px;
  line-height: 20px;
  margin: 0px 0px 20px;
  padding: 0px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
}
.dashboard_heading h1 {
  color: #ffffff;
  font-size: 50px;
  line-height: 60px;
  letter-spacing: -1px;
  margin: 0px 0px 30px;
  padding: 0px;
  font-weight: 600;
  text-align: left;
}
.dashboard_tab ul {
  background: #fff;
}
.dashboard_tab li.tab_btn {
  display: inline-block;
  padding: 4px 20px;
  font-size: 14px;
  line-height: 40px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}
.dashboard_tab li:nth-child(1) {
  margin-left: 30px;
}
.dashboard_tab li.active {
  background: #f1f1f1;
  color: rgb(0, 135, 207);
}
.tab {
  background: #f1f1f1;
  min-height: 100%;
}

@media (max-width: 767px) {
  section.dashboard_hero {
    align-items: center;
    justify-content: center;
  }
  .dashboard_heading {
    padding: 0px;
  }
  section.dashboard_hero {
    min-height: 40vh;
    padding: 16px;
  }
  .dashboard_tab ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  .dashboard_tab li.tab_btn {
    display: block;
  }
  .dashboard_tab li:nth-child(1) {
    margin-left: 0px;
  }
}
@media (max-width: 575px) {
  section.dashboard_hero {
    padding: 0;
    min-height: 30vh;
  }
  .dashboard_heading h2,
  .dashboard_heading h1 {
    text-align: center;
  }
  .dashboard_heading h1 {
    font-size: 40px;
    line-height: 46px;
  }
}
@media (max-width: 420px) {
  .dashboard_heading h1 {
    font-size: 34px;
    line-height: 42px;
    text-align: right;
  }
  .dashboard_heading h2 {
    font-size: 15px;
    line-height: 20px;
  }
}
</style>
