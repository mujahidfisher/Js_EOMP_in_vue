<template>
    <Landing />
    <div class="section-2">
      <div class="container">
        <a  href="#top" id="sect2"><button class="blink2">&#8593;</button></a>
        <div class="title-1">
            <h1>Products</h1>
        </div>

        <a 
        href="/checkout"><button class="checkout-btn">Checkout</button>
        </a>
        <ProductsCard />
    </div>
    </div>
</template>

<script>
import Landing from '@/components/Landing.vue';
import ProductsCard from '@/components/ProductsCard.vue';

export default {
  name: 'HomeView',
  components: {
    Landing,
    ProductsCard
  }
}
</script>

<style scoped>

</style>
