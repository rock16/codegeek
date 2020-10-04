<template>
  <div id="dashboard">
    <section>
      <h3>Find your perfect Bootcamp</h3>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          style="height: fit-content"
          v-for="(bootcamp, index) in featuredBootcamp"
          :key="index"
        >
          <div class="div_swipper" @click="seeDetails($event, bootcamp.title)">
            <img :src="bootcamp.imgUrl" alt="" />
            <div class="bootcamp">
              <h3>{{ bootcamp.title }}</h3>
              <div class="action">
                <div id="date">{{ bootcamp.date }}</div>
                <div class="btn_bootcamp">Enroll Now</div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
    <section class="social_media">
      <p>
        Join our online discussion community and see what others are learning.
      </p>
      <div class="social_icons">
        <div>
          <font-awesome-icon
            :icon="['fab', 'slack']"
            size="4x"
            class="font_slack"
          />
          <h3>Slack</h3>
        </div>

        <div>
          <font-awesome-icon
            :icon="['fab', 'gitter']"
            size="4x"
            id="font_gitter"
          />
          <a
            href="https://gitter.im/codegeekandxyz/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link"
            ><h3>Gitter</h3></a
          >
        </div>
        <div>
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            size="4x"
            id="font_facebook"
          />
          <a href="https://www.facebook.com"><h3>Facebook</h3></a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";
import SwiperCore, { Navigation, Pagination } from "swiper";
// install Swiper components
SwiperCore.use([Navigation, Pagination]);
export default {
  name: "dashboardHome",
  data() {
    return {
      items: ["Home", "slide", "back", "next"],
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: "auto",
            spaceBetween: 40,
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 30,
          },
          640: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          320: {
            slidesPerView: "auto",
            centeredSlides: false,
            spaceBetween: 30,
          },
        },
      },
    };
  },
  computed: {
    ...mapState({
      featuredBootcamp: (state) => state.featuredCourses,
    }),
    shouldFetch() {
      return (
        this.featuredBootcamp &&
        Object.keys(this.featuredBootcamp).length === 0 &&
        this.featuredBootcamp.constructor === Object
      );
    },
  },
  methods: {
    seeDetails(event, val) {
      this.$router.push({ name: "ProgramDetail", params: { program: val } });
    },
  },
  mounted() {
    if (this.shouldFetch) {
      this.$store.dispatch("fetchFeaturedCourses");
    }
  },
};
</script>
<style scoped>
#dashboard {
  padding: 0;
}
section h3 {
  padding: 20px;
}
.swiper {
  height: 400px;
  width: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  width: 300px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}
.swiper-slide img {
  position: relative;
  width: 100%;
  height: 225px;
}
.swiper_pagination {
  bottom: -10px;
}
.swiper .bootcamp .action {
  display: flex;
  justify-content: space-between;
  padding: 6px;
}
.social_media {
  margin: 48px;
  background: #ffffffee;
  border-radius: 2px;
  padding: 24px;
  -webkit-box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
  -moz-box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
  box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
}
.social_media p {
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  padding: 0px 12px;
  font-weight: 600;
}
.social_icons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 32px 0px;
}
.social_icons div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.font_slack {
  color: #d93f58;
  cursor: pointer;
}
#font_facebook {
  color: #4064ac;
  cursor: pointer;
}
#font_gitter {
  color: #753a88;
  cursor: pointer;
}
.social_icons h3 {
  cursor: pointer;
}
.div_swipper {
  -webkit-box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
  -moz-box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
  box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
}
.bootcamp .action .btn_bootcamp {
  background: yellow;
  padding: 5px 10px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  transition: 0.4s ease-in-out;
}
.bootcamp .action .btn_bootcamp:hover {
  transform: scale(1.2);
}
.bootcamp .action #date {
  color: rgb(0, 135, 207);
  font-weight: 500;
}
@media (max-width: 575px) {
  .social_media {
    margin: 12px;
  }
  .swiper-slide {
    width: 250px;
  }
  .swiper-slide img {
    height: 187px;
  }
  section h3 {
    padding: 16px;
  }
  section .bootcamp h3 {
    padding: 8px;
  }
}
</style>
