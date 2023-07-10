<template>
    <div class="container">
    <div class="row justify-content-center gap-4" id="itemCard">
        <div class="card" v-for="product in products"  style="width: 15rem;" :key="product.id">
            <img :src="product.img" class="card-img-top" alt="product img" style="width: 14rem; height: 14rem;" loading= "lazy">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ product.product }}</li>
            <li class="list-group-item">{{ product.specs }}</li>
            <li class="list-group-item">{{ product.price }}</li>
          </ul>
          <router-link :to="{ name: 'single', params:{id: product.id}, query:{name: product.product, specs: product.specs, price: product.price, img: product.img}}"><button class="buy">View</button></router-link>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        computed: {
            products() {
                return this.$store.state.products
            }
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
        },
        methods: {
            singleproduct() {
                this.$router.push({
                    name: this.name,
                    params: this.params.id,
                    query: this.query.name,
                })
            }
        }


    }
    
</script>

<style scoped>

</style>