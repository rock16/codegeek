<template>
  <div id="all_courses">
    <div class="all_course_hero"></div>
    <section class="tech_list">
      <h1>Introductory Level program</h1>
      <p>
        Programss that does not require any previous experience in programming
      </p>
      <ul class="course_list">
        <li v-for="(course, index) in featuredCourses" :key="index">
          <a href="#">
            <img :src="course.imgUrl" alt="course Image" class="course_img" />
            <div class="course">
              <h3>{{ course.title }}</h3>
              <div class="action">
                <a href="#" id="date">{{ course.date }}</a>
                <a href="#" class="btn_course">Read more</a>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <section class="tech_list">
      <h1>Intermediate Level programs</h1>
      <p>Codegeek offers courses in some of the most in demand tech skills</p>
      <ul class="course_list">
        <li v-for="(course, index) in featuredCourses" :key="index">
          <a href="#">
            <img :src="course.imgUrl" alt="course Image" class="course_img" />
            <div class="course">
              <h3>{{ course.title }}</h3>
              <div class="action">
                <a href="#" id="date">{{ course.date }}</a>
                <a href="#" class="btn_course">Read more</a>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <section class="tech_list">
      <h1>Advance Level programs</h1>
      <p>Codegeek offers courses in some of the most in demand tech skills</p>
      <ul class="course_list">
        <li v-for="(course, index) in featuredCourses" :key="index">
          <a href="#">
            <img :src="course.imgUrl" alt="course Image" class="course_img" />
            <div class="course">
              <h3>{{ course.title }}</h3>
              <div class="action">
                <a href="#" id="date">{{ course.date }}</a>
                <a href="#" class="btn_course">Read more</a>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
