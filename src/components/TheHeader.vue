<template>
  <section class="header-container">
    <img src="../assets/coffee-app-logo.png" class="header-logo" alt="coffe app"/>
    <div class="header-menu">
      <menu-list></menu-list>
    </div>
    <div>
      <user-options></user-options>
    </div>
  </section>
</template>

<script>
import MenuList from './header-items/MenuList.vue';
import UserOptions from './header-items/UserOptions.vue';

export default {
  name: 'the-header',
  components: {
    MenuList,
    UserOptions
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 17px ;
  max-width: 1140px;
  margin: auto;
}
.header-logo {
  width: 150px;
  height: 40px;
}
.header-menu {
  display: flex;
}
</style>
