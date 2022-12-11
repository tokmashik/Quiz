<template>
  <div class="mainvr">
    <div class="main_text">
       <h1 style="margin-bottom: 10px;" >Quizzes</h1>
    <h3>
      Квиз – это интеллектуальное соревнование, в ходе которого один или несколько участников отвечают на поставленные вопросы.
    </h3>
    </div>
    <div class="mainphoto">
          <img src="@/assets/MainPageIMG.png" alt="main photo">
    </div>
  </div>

  <div class="instr_wr">
    <div class="instr_main">
          <h2>How to make a quiz</h2>
    </div>
  <div class="instr">
    <div class="instr_card">
    <h2>1</h2>
    <h3>Choose your quiz type    </h3>
    <h4>Built for both students, lead capture and leisure, you can make your own trivia quiz, personality tests, polls, and surveys. </h4> 
    </div>
    <div class="instr_card">
    <h2>2</h2>
    <h3>Write your questions</h3>
    <h4>Add your question from more than 4 types, tick the correct answer and repeat. </h4> 
    </div>
    <div class="instr_card">
    <h2>3</h2>
    <h3>Share with your network</h3>
    <h4>Send out your quiz via a direct link, embed on your website or share on social and start getting responses right away.</h4> 
  </div>
  </div>
      
</div>
<div class="h2quizzes">
      <h2>
    Quizzes:
  </h2>
</div>

<div class="Quizzesmain">

  <VWrapper/>
</div>


</template>

<script>
import VWrapper from "@/components/VWrapper.vue"
export default {
  components: {
    VWrapper 
  },
  data() {
    return {
      quizzez: [
        {id: 1, title: "1erererere"},
        {id: 2, title: "2erererere"},
        {id: 3, title: "3erererere"},
        {id: 4, title: "4erererere"},
      ]
    }
  }
}
</script>

<style>
.mainvr {
  display: flex;
  width: 76%;
  margin: 0 auto;
}

.Quizzesmain {
  display: flex;
  width: 60%;
  margin: 0 auto;
}

.main_text
{
  margin-left: 10px;
  padding: 290px 0 200px 0;
  width: 40;
}

main {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.instr_wr {
  padding: 10px 0 100px 0;
}

.instr {
  display: flex;
  width: 75%;
  margin: 0 auto;
}

.instr_main {
  text-align: center;
  margin: 0 auto;
  padding-bottom: 30px;
}

.instr_card {
  width: 33.3%;
  margin: 0 30px;
}

.h2quizzes {
  width: 76%;
  margin: 0 auto;
  text-align: center; 
  margin-bottom: 20px;
}

.instr h2 {
  text-align: center; 
  border-bottom: 1px solid #7000FF;
  margin-bottom: 20px;
}

.instr h3 {
  margin-bottom: 5px;
}
</style>
