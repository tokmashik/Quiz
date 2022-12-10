<template>
  <button class="navbutton">
      <slot></slot>
  </button>
</template>

<script>
export default {
name: 'nav-button'
}
</script>


<style scoped>
.navbutton { 
  display: inline-block;
  cursor: pointer; 
  font-size:16px;
  text-decoration:none;
  padding:12px 20px; 
  border: 0px;
  background:#E9E9E9;
}

.navbutton:hover {
  color:#7000FF;
  transition: color 1s ease; 
}

</style>

<!-- border-bottom: 1px solid #7000FF;  -->
