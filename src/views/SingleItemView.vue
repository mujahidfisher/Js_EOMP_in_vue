<template>
    <br>
        <div class="container">
            <div class="row justify-content-center gap-4" id="itemCard">
                <div class="card"  style="width: 15rem;">
                    <img :src="$route.query.img" class="card-img-top" alt="product img" style="width: 14rem; height: 14rem;" loading= "lazy">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{ $route.query.name }}</li>
                    <li class="list-group-item">{{ $route.query.specs }}</li>
                    <li class="list-group-item">{{ $route.query.price }}</li>
                  </ul>
                </div>
            </div>
        </div>
    <br>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>


</style>