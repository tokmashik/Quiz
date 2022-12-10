<template>
  <div class="container">
    <div class="instr_wr">
    <div class="instr_main">
          <h2>Our team</h2>
    </div>
  <div class="instr">
    <div class="instr_card">
    <h2>Женя</h2>
    <h3>Проект менеджер</h3>
    <h4>План работ, распределение ресурсов (время, люди), реклама.</h4> 
    </div>
    <div class="instr_card">
    <h2>Лиза</h2>
    <h3>Разработчик</h3>
    <h4>Разработка программного продукта (Frontend)</h4> 
    </div>
    <div class="instr_card">
    <h2>Сергей</h2>
    <h3>Разработчик</h3>
    <h4>Разработка программного продукта (Backend)</h4> 
  </div>
  </div>
  <div class="instr2">
    <div class="instr_card">
    <h2>Дмитрий</h2>
    <h3>Разработчик</h3>
    <h4>Разработка программного продукта (Backend)</h4> 
    </div>
    <div class="instr_card">
    <h2>Василий</h2>
    <h3></h3>
    <h4>Жил был <div style="color: #E9E9E9;">аналитик</div> </h4> 
    </div>
  </div>
      
</div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  display: flex;
  width: 76%;
  margin: 0 auto;
}

.instr_wr {
  padding: 50px 0 100px 0;
}
.instr {
  display: flex;
  width: 75%;
  margin: 0 auto;
  padding: 50px 0 70px 0;
}

.instr2 {
  display: flex;
  width: 75%;
  margin: 0 auto;
  padding: 50px 0px 70px 180px;
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

.instr h2 {
  text-align: center; 
  border-bottom: 1px solid #7000FF;
  margin-bottom: 20px;
}
.instr2 h2 {
  text-align: center; 
  border-bottom: 1px solid #7000FF;
  margin-bottom: 20px;
}

.instr h3 {
  margin-bottom: 5px;
}


</style>
