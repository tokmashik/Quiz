<template>
  <div class="constructor">
    <div class="contein">
      <h2 style="text-align: center">Create an awesome quiz in minutes</h2> 
      <my-input
      placeholder="Вопрос">
    </my-input>
    
  </div>
  </div>
  
  </template>
  
  <script>
  export default {
    data() {
      return {
       
      }
    }
  }
  </script>
  
  <style scoped>
.constructor {
  display: flex;
  width: 76%;
  margin: 0 auto;
}

.contein {
  width: 100%;
  margin-top: 40px;
}

.contein input {
  width: 50%;
}


  </style>
  