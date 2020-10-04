<template>
  <div id="resource">
    <section v-if="bootcamp.resource" class="resource_available">
      <header>
        <p>Worked on all modern browers</p>
        <h1>Bootcamp modules resources link</h1>
      </header>

      <ul class="timeline">
        <!-- Item 2 -->
        <li v-for="(moduleItem, index) in bootcampModule" :key="index">
          <div :class="giveDirection(index)">
            <div class="flag-wrapper">
              <span class="hexa"></span>
              <span class="flag">{{ moduleItem.flag }}</span>
              <span class="time-wrapper"
                ><span class="time">Module {{ index }}</span></span
              >
            </div>
            <div class="desc">
              {{ moduleItem.desc }} <span><a href="">Vs-code</a></span
              ><span><a href="">images</a></span
              ><span><a href="">text book</a></span>
            </div>
          </div>
        </li>
      </ul>
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
      modulePos: ["direction-r", "direction-l"],
      bootcamp: {},
      isResource: false,
    };
  },
  methods: {
    giveDirection(index) {
      return this.modulePos[index % 2];
    },
    findCourse(val) {
      this.bootcamp = this.featuredCourses.find(function(item) {
        return item.title.trim() === val.trim();
      });
    },
    getResource() {
      if (this.resource && this.bootcamp.resource) {
        this.$store.dispatch("fetchBootcampResource", this.resource);
      }
    },
  },
  computed: {
    ...mapState({
      featuredCourses: (state) => state.featuredCourses,
      bootcampResource: (state) => state.bootcampResource,
    }),
    bootcampModule() {
      return this.bootcampResource.modules;
    },
  },
  created() {
    this.findCourse(this.resource);
    this.getResource();
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
/* resource import here */
header h1 {
  text-align: center;
  font-weight: bold;
  margin-top: 0;
}

header p {
  text-align: center;
  margin-bottom: 0;
}

.hexa {
  border: 0px;
  float: left;
  text-align: center;
  height: 35px;
  width: 60px;
  font-size: 22px;
  background: #f0f0f0;
  color: #3c3c3c;
  position: relative;
  margin-top: 15px;
}

.hexa:before {
  content: "";
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-bottom: 15px solid #f0f0f0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  top: -15px;
}

.hexa:after {
  content: "";
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 15px solid #f0f0f0;
  bottom: -15px;
}

.timeline {
  position: relative;
  padding: 0;
  width: 100%;
  margin-top: 20px;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: " ";
  display: block;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  background: rgb(213, 213, 213);
  background: -moz-linear-gradient(
    top,
    rgba(213, 213, 213, 0) 0%,
    rgb(213, 213, 213) 8%,
    rgb(213, 213, 213) 92%,
    rgba(213, 213, 213, 0) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(30, 87, 153, 1)),
    color-stop(100%, rgba(125, 185, 232, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(213, 213, 213, 0) 0%,
    rgb(213, 213, 213) 8%,
    rgb(213, 213, 213) 92%,
    rgba(213, 213, 213, 0) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(213, 213, 213, 0) 0%,
    rgb(213, 213, 213) 8%,
    rgb(213, 213, 213) 92%,
    rgba(213, 213, 213, 0) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(213, 213, 213, 0) 0%,
    rgb(213, 213, 213) 8%,
    rgb(213, 213, 213) 92%,
    rgba(213, 213, 213, 0) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(213, 213, 213, 0) 0%,
    rgb(213, 213, 213) 8%,
    rgb(213, 213, 213) 92%,
    rgba(213, 213, 213, 0) 100%
  );
  z-index: 5;
}

.timeline li {
  padding: 2em 0;
}

.timeline .hexa {
  width: 16px;
  height: 10px;
  position: absolute;
  background: #00c4f3;
  z-index: 5;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: -30px;
  margin-top: 0;
}

.timeline .hexa:before {
  border-bottom: 4px solid #00c4f3;
  border-left-width: 8px;
  border-right-width: 8px;
  top: -4px;
}

.timeline .hexa:after {
  border-left-width: 8px;
  border-right-width: 8px;
  border-top: 4px solid #00c4f3;
  bottom: -4px;
}

.direction-l,
.direction-r {
  float: none;
  width: 100%;
  text-align: center;
}

.flag-wrapper {
  text-align: center;
  position: relative;
}

.flag {
  position: relative;
  display: inline;
  background: rgb(255, 255, 255);
  font-weight: 600;
  z-index: 15;
  padding: 6px 10px;
  text-align: left;
  border-radius: 5px;
}

.direction-l .flag:after,
.direction-r .flag:after {
  content: "";
  position: absolute;
  left: 50%;
  top: -15px;
  height: 0;
  width: 0;
  margin-left: -8px;
  border: solid transparent;
  border-bottom-color: rgb(255, 255, 255);
  border-width: 8px;
  pointer-events: none;
}

.direction-l .flag {
  -webkit-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15),
    0 0 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
}

.direction-r .flag {
  -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15),
    0 0 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
}

.time-wrapper {
  display: block;
  position: relative;
  margin: 4px 0 0 0;
  z-index: 14;
  line-height: 1em;
  color: #fff;
}

.direction-l .time-wrapper {
  float: none;
}

.direction-r .time-wrapper {
  float: none;
}

.time {
  background: #00c4f3;
  display: inline-block;
  padding: 8px;
}

.desc {
  position: relative;
  margin: 1em 0 0 0;
  padding: 1em;
  background: rgb(254, 254, 254);
  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  z-index: 15;
}

.direction-l .desc,
.direction-r .desc {
  position: relative;
  margin: 1em 1em 0 1em;
  padding: 1em;
  z-index: 15;
}
.direction-l .desc span,
.direction-r .desc span {
  padding-right: 8px;
}

@media (min-width: 768px) {
  .timeline {
    width: 660px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .timeline li:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .timeline .hexa {
    left: -28px;
    right: auto;
    top: 8px;
  }

  .timeline .direction-l .hexa {
    left: auto;
    right: -28px;
  }

  .direction-l {
    position: relative;
    width: 310px;
    float: left;
    text-align: right;
  }

  .direction-r {
    position: relative;
    width: 310px;
    float: right;
    text-align: left;
  }

  .flag-wrapper {
    display: inline-block;
  }

  .flag {
    font-size: 18px;
  }

  .direction-l .flag:after {
    left: auto;
    right: -16px;
    top: 50%;
    margin-top: -8px;
    border: solid transparent;
    border-left-color: rgb(254, 254, 254);
    border-width: 8px;
  }

  .direction-r .flag:after {
    top: 50%;
    margin-top: -8px;
    border: solid transparent;
    border-right-color: rgb(254, 254, 254);
    border-width: 8px;
    left: -8px;
  }

  .time-wrapper {
    display: inline;
    vertical-align: middle;
    margin: 0;
  }

  .direction-l .time-wrapper {
    float: left;
  }

  .direction-r .time-wrapper {
    float: right;
  }

  .time {
    padding: 5px 10px;
  }

  .direction-r .desc {
    margin: 1em 0 0 0.75em;
  }
}

@media (min-width: 992px) {
  .timeline {
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .direction-l {
    position: relative;
    width: 380px;
    float: left;
    text-align: right;
  }

  .direction-r {
    position: relative;
    width: 380px;
    float: right;
    text-align: left;
  }
}
</style>
