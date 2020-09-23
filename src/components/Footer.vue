<template>
  <div id="footer_content">
    <div>
      <a href="#"><img src="@/assets/images/biglogo.svg" alt="Logo"/></a>
    </div>
    <div>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div>Form</div>
  </div>
</template>

<style lang="css" scoped>
#footer_content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background: linear-gradient(to bottom, #5a2963, #061e40);
  padding: 64px 90px;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  color: #ffffff;
}

#footer_content a {
  color: #ffffff;
}
#footer_content li a {
  position: relative;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 3px;
  padding: 0px 0px 10px;
}

#footer_content li a::after {
  content: "";
  position: absolute;
  left: 0px;
  bottom: 8px;
  height: 2px;
  width: 0%;
  background: #fff;
  transition: all 300ms ease-in-out;
}

#footer_content li a:hover::after {
  width: 100%;
}
</style>
