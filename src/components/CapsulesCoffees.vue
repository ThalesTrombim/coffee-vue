<template>
  <section class="capsules">
    <h3>Coffee Capsules</h3>
    <span>Preorder now to receive exclusive deals & gifts</span>
  </section>
</template>

<script>
export default {
  name: 'capsules-coffees',
}
</script>

<style scoped>
.capsules {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.capsules h3{
  font-size: 52px;
  
}
.capsules span{
  font-size: 16px;
  color: #888;
}
</style>