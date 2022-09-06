<template>
  <ul>
    <img src="../../assets/icons/user.png" alt="user options" class="user-options-icons">
    <img src="../../assets/icons/favorite.png" alt="favorites" class="user-options-icons">
    <img src="../../assets/icons/cart.png" alt="cart" class="user-options-icons">
    <img src="../../assets/icons/search.png" alt="search" class="user-options-icons">
  </ul>
</template>

<script>
  export default {
    name: 'user-options'
  }
</script>

<style scoped>
ul {
  display: flex;
  gap: 22px;
}
.user-options-icons {
  width: 22px;
}
</style>e