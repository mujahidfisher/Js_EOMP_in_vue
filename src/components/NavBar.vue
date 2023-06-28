<template>
  <div>
    <nav id="top" class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <img
          class="logo-img"
          src="https://i.postimg.cc/zGKkzYh5/Screenshot-2023-06-09-124717.png"
          alt="logo"
          loading="lazy"
        />
        <a  class="navbar-brand" href="#">MF.GAMING</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active"
              aria-current="page">HOME</router-link>
            </li>
            <li class="nav-item">
              <a
                href="#sect2"
                class="nav-link"
                aria-current="page"
                >PRODUCTS</a
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/about"
                class="nav-link"
                aria-current="page"
                >ABOUT</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/checkout"
                class="nav-link"
                aria-current="page"
                >CHECKOUT</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/admin"
                class="nav-link"
                aria-current="page"
                >ADMIN</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
