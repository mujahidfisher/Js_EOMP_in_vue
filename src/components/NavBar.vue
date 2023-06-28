<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img src="" alt="logo">
              <a class="navbar-brand" href="#">MF.GAMING</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link to="/src/views/HomeView.vue" class="nav-link" aria-current="page">HOME</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/src/views/ProductView.vue" class="nav-link" aria-current="page">PRODUCTS</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/src/views/AboutView.vue" class="nav-link" aria-current="page">ABOUT</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/src/views/CheckoutView.vue" class="nav-link" aria-current="page">CHECKOUT</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/src/views/AdminView.vue" class="nav-link" aria-current="page">ADMIN</router-link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>