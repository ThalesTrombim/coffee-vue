<template>
  <section class="collection">
    <div class="collection-text">
      <h5>collection</h5>
      <span>Special <br> coffees</span>
      <p>Making the world a better place, with our everyday essentials. Tasty and fresh coffees to make one's mouth water.</p>

      <div class="collection-link">
        <!-- <a href="#">Shop Now</a> -->
        <a href="#">Shop Now <img src="../assets/icons/top-right-black.png" class="top-right" alt=""></a>
      </div>
    </div>
    <div class="collection-image">
      <img src="../assets/collection.png" alt="Special coffes">
    </div>
  </section>
</template>

<script>
export default {
  name: 'collection-area'
}
</script>

<style scoped>
.collection {
  display: flex;  
  gap: 48px;
  max-width: 1140px;
  padding: 0 36px;
  margin: auto;
}
.collection-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.collection-text h5{
  text-transform: uppercase;
  font-size: 12px;
}
.collection-text span{
  font-size: 52px;
  font-weight: 500;
}
.collection-text p{
  font-size: 16px;
  margin: 30px 0 50px 0;
}
.collection-image img {
  width: 600px;
}

.collection-link a{
  font-weight: 500;
  text-decoration: none;
  border-bottom: 2px solid #000;
}
.top-right {
  width: 14px;
  margin-left: 5px;
}

</style>