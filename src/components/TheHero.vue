<template>
  <div class="hero-container">
    <section class="hero-content">
      <div class="hero-texts">
        <h1>Come & <br/> see our fabulous Coffees!</h1>
        <div class="hero-texts--link">
          <a href="#">Shop Coffees <img src="../assets/icons/top-right.png" class="top-right" alt=""></a>
        </div>
      </div>
      <div class="hero-image">
        <img src="../assets/hero-banner.png" alt="coffee" class="hero-image--banner">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'the-hero',

}
</script>

<style scoped>
.hero-container {
  background: #0F5C48;
}
.hero-content {
  max-width: 1140px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.hero-texts {
  display: flex;
  gap: 28px;
  justify-content: center;
  flex-direction: column;
}
.hero-texts h1,
.hero-texts a{
  color: #FFF;
  font-weight: 500;
}
.hero-texts a{
  text-decoration: none;
  border-bottom: 2px solid #FFF;
}
.hero-texts h1{
  font-size: 52px;
}
.top-right {
  width: 14px;
  margin-left: 5px;
}
.hero-image--banner {
  width: 700px;
}
.hero-texts a:hover{
  filter: brightness(.8)
}

</style>