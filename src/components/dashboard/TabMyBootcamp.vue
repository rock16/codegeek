<template>
  <div class="my_bootcamp">
    <section v-if="isEnrolled">
      <div class="a_bootcamp" v-for="(item, index) in items" :key="index">
        <div class="title">Bootcamp</div>
        <hr style="margin: 20px 0px 8px;" />
        <div class="group">
          <h3 class="name">Bootcamp name</h3>
          <div class="action_btn">Go to Bootcamp activity</div>
          <p>Get 10% percent of each time you refer a friend</p>
        </div>
        <div class="information">
          <div><span class="note">Price:</span><span>N6000</span></div>
          <div><span class="note">Duration</span><span>6weeks</span></div>
        </div>
      </div>
    </section>
    <section>
      <div class="a_bootcamp">
        <h4>
          You are not enrolled in any bootcamp at the moment. Click the Home tab
          to find available Bootcamp.
        </h4>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3],
      isEnrolled: false,
    };
  },
};
</script>
<style scoped>
.my_bootcamp {
  margin: 48px;
}
.my_bootcamp .a_bootcamp {
  padding: 24px;
  margin-bottom: 24px;
  background: #ffffffee;
  border-radius: 2px;
  -webkit-box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
  -moz-box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
  box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
}
.my_bootcamp .a_bootcamp .group .name {
  color: rgba(0, 135, 207);
  font-size: 20px;
  line-height: 28px;
  margin: 0px 0px 2px;
  font-weight: 700;
  text-align: start;
}
.my_bootcamp .a_bootcamp .group .action_btn {
  background: rgb(0, 135, 207);
  font-size: 13px;
  line-height: 16px;
  vertical-align: center;
  padding: 8px 16px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  width: 50%;
  margin-left: 25%;
  cursor: pointer;
}
.my_bootcamp .a_bootcamp .group p {
  color: #2e3d49;
  font-size: 18px;
  line-height: 36px;
  font-weight: 700;
}
.my_bootcamp .a_bootcamp .information {
  display: flex;
  padding-top: 20px;
}
.my_bootcamp .a_bootcamp .information div {
  margin-right: 30px;
}
.my_bootcamp .a_bootcamp .information div span {
  padding: 0px 10px 0px 0px;
  font-weight: 700;
}
.my_bootcamp .a_bootcamp .information div .note {
  color: yellow;
  font-size: 20px;
}
.my_bootcamp .a_bootcamp h4 {
  color: rgb(0, 135, 207);
}
@media (max-width: 577px) {
  .my_bootcamp {
    margin: 12px;
  }
  .my_bootcamp .a_bootcamp {
    padding: 12px;
  }
  .my_bootcamp .a_bootcamp .group .action_btn {
    width: 100%;
    margin-left: 0;
  }
  .my_bootcamp .a_bootcamp .information div {
    margin-right: 16px;
  }
}
@media (max-width: 320px) {
  .my_bootcamp .a_bootcamp .information {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
