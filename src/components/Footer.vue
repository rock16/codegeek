<template>
  <div id="footer_content">
    <div>
      <a href="#"><img src="@/assets/images/biglogo.svg" alt="Logo"/></a>
    </div>
    <div>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Bootcamp</a></li>
        <li><a href="#">Career</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="socialBx">
      <img src="@/assets/socialIcons/facebook.png" alt="facebook" class="sos" />
      <img src="@/assets/socialIcons/twitter.png" alt="facebook" class="sos" />
    </div>
  </div>
</template>

<style lang="css" scoped>
#footer_content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background: linear-gradient(to right, #022e62, #004693);
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
.socialBx {
  display: flex;
  justify-content: center;
  align-items: center;
  filter: invert(1);
}
.socialBx .sos {
  width: 24px;
  height: 24px;
  margin-right: 24px;
}
</style>
