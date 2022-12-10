<template>
  <div class="app">  
  <navbar></navbar>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>

</template>

<script>
import Navbar from "@/components/Navbar";
import TheFooter from "@/components/TheFooter.vue"

export default {
  components: {
    Navbar,
    TheFooter
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;  
  background: #E9E9E9; 
}

.app {
  font-family: 'Roboto';
  font-weight: 300;
}

h1 {
  width: 649px;
  height: 171px;

  font-family: 'Gwen-Trial';
  font-style: normal;
  font-weight: 350;
  font-size: 128px;
  line-height: 160px;
  color: #7000FF;
  text-shadow: 0px 0px 121px rgba(112, 0, 255, 0.54);
}

h2 {
  line-height: 80px;
  font-family: 'Gwen-Trial';
  font-style: normal;
  font-weight: 350;
  font-size: 64px;
  line-height: 80px;
  color: #7000FF;
  text-shadow: 0px 0px 50px rgba(112, 0, 255, 0.40);
}

h3 { 
  font-size: 20px;
  font-weight: 300;
  line-height: 145%;
}

h4 { 
  font-size: 16px;
  font-weight: 300;
  line-height: 145%;
}

::-webkit-scrollbar {
  width: 13px;
}

::-webkit-scrollbar-track {
  background: #E9E9E9;
}

::-webkit-scrollbar-thumb {
  background: #B18CFF;
  border-radius: 8px;
  border: 3px solid #E9E9E9;
}

::-webkit-scrollbar-thumb:hover {
  background: #7000FF;
}

@media screen and (max-width: 1200px) {
  
}
</style>
