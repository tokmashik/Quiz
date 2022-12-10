<template>
  <button class="button">
      <slot></slot>
  </button>
</template>

<script>
export default {
name: 'my-button'
}
</script>


<style scoped>
.button { 
  display: inline-block;
  cursor: pointer; 
  font-size: 16px;
  text-decoration:none;
  padding:15px 30px; 
  color:#ffffff;
  background: #7000FF;
  border-radius: 8px;
  border: 2px solid #7000FF;
}
.button:hover {
  background:#B18CFF;
  color:#ffffff;
  border: 2px solid  #7000FF;
  transition: all 0.9s ease;
  }
  
</style>


