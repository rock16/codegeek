<template>
  <div class="course_detail_template">
    <section class="detail_hero">
      <h1>Frontend Web Developer Bootcamp:</h1>
      <p>
        Learn to create amazing world class web apps with HTML, CSS and
        JavaScript
      </p>
      <p id="location">
        At Dess't Computer Training center, Beside Transformer, Y-Junction,
        Zaki-Biam
      </p>
      <a href="/" class="action_btn"
        ><div class="itm1">Enroll Now</div>
        <div class="itm2">Starts Oct 7th</div></a
      >
    </section>
    <section class="detail_action">
      <a href="/login">
        <div class="enroll_btn">Enroll Now</div>
      </a>
      <p class="feature">features</p>
      <div>6weeks program</div>
      <div>coding challenges</div>
      <div>HTML, CSS &amp; Js</div>
      <div>Study Group</div>
      <div>mentor support</div>
      <div>Feedback</div>
      <div></div>
    </section>
    <section class="detail_intro">
      <h1>Program Detail</h1>
      <p>
        The program contains 10 modules and covers how to write HTML5 and CSS3,
        and how to create interactive web experiences with JavaScript that
        displays correctly on mobile, tablet, and large screen browsers. During
        this bootcamp you will develop series of professional-quality websites
        accessible to a wide audience, including those with visual, audial,
        physical, and cognitive impairments.
      </p>
      <div class="moduleBx">
        <ul>
          <li>
            <div>Module 1</div>
            <div>How the internet works and dev setup</div>
          </li>
          <li>
            <div>Module 2</div>
            <div>HTML and CSS Basics</div>
          </li>
          <li>
            <div>Module 3</div>
            <div>Responsive Website</div>
          </li>
          <li>
            <div>Module 4</div>
            <div>Css Flexbox and Grid</div>
          </li>
          <li>
            <div>Module 5</div>
            <div>Fundamentals of JavaScript</div>
          </li>
          <li>
            <div>Module 6</div>
            <div>Javascript and DOM</div>
          </li>
          <li>
            <div>Module 7</div>
            <div>Working with Apis</div>
          </li>
          <li>
            <div>Module 8</div>
            <div>"Introduction to version control with Git"</div>
          </li>
          <li>
            <div>Module 9</div>
            <div>Frameworks and Libraries</div>
          </li>
          <li>
            <div>Module 10</div>
            <div>What next?</div>
          </li>
        </ul>
      </div>
    </section>
    <section class="detail_learn">
      <h1>What you will learn</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>APIs</li>
        <li>Responsive Design</li>
        <li>Git</li>
      </ul>
    </section>
    <section class="detail_build">
      <h1>What you will build</h1>
      <p>This program includes five concrete projects</p>
      <ul>
        <li>
          <div class="Bx">
            <img src="@/assets/images/web/portfolio.jpg" alt="" />
            <p>Portfolio</p>
          </div>
        </li>
        <li>
          <div class="Bx">
            <img src="@/assets/images/web/calculator.png" alt="" />
            <p>Calulator</p>
          </div>
        </li>
        <li>
          <div class="Bx">
            <img src="@/assets/images/web/todolist.png" alt="" />
            <p>To do list</p>
          </div>
        </li>
        <li>
          <div class="Bx">
            <img src="@/assets/images/web/tictacgame.png" alt="" />
            <p>Tic Tac Toe game</p>
          </div>
        </li>
        <li>
          <div class="Bx">
            <img src="" alt="" />
            <img src="@/assets/images/web/tictacgame.png" alt="" />
            <p>Clone</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="detail_requirements">
      <h1>Prerequisite</h1>
      <p>What you need to have before this program</p>
      <div>No programming experiences required</div>
      <div>The willingness to succeed</div>
      <div>A PC or Mac computer (optional)</div>
    </section>
  </div>
</template>
<script>
export default {
  name: "CourseDetailTemplate",
  props: ["imgUrl"],
};
</script>
<style scoped>
section {
  padding: 24px 64px;
}
h1 {
  color: #657482;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -1px;
  margin: 0px 0px 30px;
  font-weight: 700;
  text-align: left;
}
.detail_hero {
  position: relative;
  min-height: 50vh;
  background: linear-gradient(to right, #022e62, #004693);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #f3f3f3;
}
.detail_hero h1 {
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -1px;
  margin: 0px 0px 20px;
  font-weight: 600;
  color: #f3f3f3;
}
.detail_hero p {
  font-size: 18px;
  line-height: 20px;
  margin: 0px 0px 20px;
  font-weight: 700;
}
.detail_hero p#location {
  max-width: 420px;
  font-size: 20px;
  line-height: 32px;
}
.detail_hero .action_btn {
  color: #000;
  background: #ffcc2d;
  padding: 10px 16px;
}
.detail_hero .action_btn div {
  padding: 2px 3px;
}
.detail_hero .action_btn div.itm1 {
  font-weight: 700;
  text-align: center;
}
.detail_hero .action_btn div.itm2 {
  font-weight: 300;
  text-align: center;
  color: #525151;
}
.detail_action {
  background: linear-gradient(0deg, #55275f 0%, rgb(0, 136, 207) 100%);
  position: fixed;
  top: 20%;
  left: 80%;
  z-index: 3;
  color: #f3f3f3;
}
.detail_action .enroll_btn {
  padding: 10px 16px;
  background: #f3f3f3;
  text-align: center;
  margin: 0px 0px 13px;
}
.detail_action .feature {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding: 12px;
  text-transform: uppercase;
}
.detail_intro {
  background: #ededed;
}
.detail_intro p {
  font-size: 19px;
  font-weight: 400;
  word-spacing: 0px;
  line-height: 32px;
  width: 60%;
}
.detail_intro .moduleBx {
  font-size: 16px;
  padding: 24px 0px 64px;
  font-weight: 400;
}
.detail_intro .moduleBx li {
  display: flex;
  justify-content: flex-start;
}
.detail_intro .moduleBx li div {
  font-size: 18px;
  line-height: 28px;
  margin: 0px 12px 0px 0px;
  font-weight: 600;
  text-align: start;
  color: #2c5282;
}
.detail_learn li {
  position: relative;
  color: #2b2839;
  font-size: 20px;
  padding: 0px 0px 0px 32px;
  font-weight: 300;
  line-height: 28px;
}
.detail_learn li::before {
  content: "";
  position: absolute;
  background: #2c5282;
  width: 16px;
  height: 16px;
  top: 4px;
  left: -1px;
  border-radius: 50%;
}
.detail_requirements p {
  margin: 0px 0px 20px;
  font-weight: 500;
}
.detail_requirements div {
  position: relative;
  color: #2e3d49;
  font-size: 16px;
  line-height: 24px;
  padding: 0px 24px;
  font-weight: 400;
}
.detail_requirements div::before {
  content: "";
  position: absolute;
  background: #2c5282;
  width: 16px;
  height: 3px;
  top: 40%;
  left: -1px;
}
.detail_build li {
  display: inline-block;
  flex-direction: column;
  justify-content: space-around;
  margin: 28px;
  border: 2px solid rgba(0, 136, 207, 0.5);
}
.detail_build li p {
  text-align: center;
  padding: 6px;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
}
.detail_build .Bx img {
  max-width: 300px;
  max-height: 250px;
}
</style>
