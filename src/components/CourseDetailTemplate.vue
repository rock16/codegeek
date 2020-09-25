<template>
  <div class="course_detail_template">
    <section class="detail_hero"></section>
    <section class="detail_action"></section>
    <section class="detail_intro">
      <h1>Program Detail</h1>
      <p>
        The program contains 14 modules and covers how to write HTML5 and CSS3,
        and how to create interactive web experiences with JavaScript that
        displays correctly on mobile, tablet, and large screen browsers. During
        this bootcamp you will develop series of professional-quality websites
        accessible to a wide audience, including those with visual, audial,
        physical, and cognitive impairments.
      </p>
      <div>
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
      <ul>
        <li>
          <div class="Bx">
            <img src="" alt="" />
            <p>Game</p>
          </div>
        </li>
        <li>
          <div class="Bx">
            <img src="" alt="" />
            <p>To do list</p>
          </div>
        </li>
        <li>
          <div class="Bx">
            <img src="" alt="" />
            <p>Portfilio</p>
          </div>
        </li>
        <li>
          <div class="Bx">
            <img src="" alt="" />
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
.detail_hero {
  position: relative;
  min-height: 50vh;
  background: linear-gradient(to right, #022e62, #004693);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}
.detail_action {
  position: sticky;
}
</style>
