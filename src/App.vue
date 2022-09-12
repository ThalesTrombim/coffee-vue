<template>
  <div id="app">
    <TheHeader msg="Welcome to Your Vue.js App"/>
    <the-hero></the-hero>
    <main>
      <collection-area></collection-area>
    </main>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheHero from './components/TheHero.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheHero
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #161616;
  font-family: 'Montserrat', sans-serif;
}
</style>
