<template>
  <div class="navbar">
    <div @click="$router.push('/')" class="mainlogo">Q</div>
    <div class="navbar__btns">
      <nav-button @click="$router.push('/quizzes')">Quizzes</nav-button>
      <nav-button style="margin-left: 20px" @click="$router.push('/quizgame')">Quiz Game</nav-button>
      <!--<nav-button style="margin-left: 20px" @click="$router.push('/store')">store</nav-button>-->
      <nav-button style="margin-left: 20px" @click="$router.push('/consructor')">–°onstructor</nav-button>
      <nav-button style="margin-left: 20px" @click="$router.push('/about')">About</nav-button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.navbar {
  width: 100%;
  display: flex;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
}
.mainlogo {  
  cursor: pointer; 
  font-size: 40px;
  font-family: 'Gwen-Trial';
  font-weight: 350;
  color: #7000FF;
  text-shadow: 0px 0px 11px rgba(112, 0, 255, 0.3);
  margin-left: 12%;
  margin-top: 50px;
}

.navbar__btns {
  margin-top: 50px;
  margin-left: 50%;
}
</style>

<!--.navbar {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 15px;
  width: 1920px;
  margin: 0 auto;
}
.navbar__btns {
  margin-left: auto;
}

.mainlogo {
  cursor: pointer; 
  font-size: 40px;
  font-family: 'Gwen-Trial';
  font-style: normal;
  font-weight: 350;
  color: #7000FF;
  text-shadow: 0px 0px 121px rgba(112, 0, 255, 0.54);
}-->