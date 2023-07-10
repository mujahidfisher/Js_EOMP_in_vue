<template>
    <div class="title1">
        <h1>ADMIN</h1>
      </div>
  
      <div class="btn-group">
        <button class="sorting" id="sort">SORT</button>
  
        <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add New Product
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <input type="number" placeholder="Enter ID" id="id" />
                <input type="text" placeholder="Enter Product Name" id="product" />
                <input type="text" placeholder="Enter Specs" id="specs" />
                <input type="text" placeholder="Enter img-url" id="img" />
                <input type="number" placeholder="Enter Price" id="price" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-outline-warning" id="added" data-bs-dismiss="modal">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="adding btn" id="add-btn" data-bs-toggle="modal" data-bs-target="#add"
          data-bs-whatever="add">
          ADD
        </button>
      </div>
  
  
      <div class="admin-title2">
        <h2>Product Listing</h2>
      </div>
  
      <div class="table table-responsive-xxl">
        <table class="table table-warning table-striped table-hover table-bordered border-warning">
          <thead>
            <tr>
              <th scope="col">ID:</th>
              <th scope="col">Product Name:</th>
              <th scope="col">Specs:</th>
              <th scope="col">Image:</th>
              <th scope="col">Price:</th>
              <th scope="col">Edit/Delete:</th>
            </tr>
          </thead>
          <tbody v-for="product in products" id="display-items" :key="product.id">
            <tr>
              <td>{{product.id}}</td>
              <td>{{product.product}}</td>
              <td>{{product.specs}}</td>
              <td><img :src="product.img" alt="product" class="prodpic" loading="lazy"></td>
              <td class="pricing">R {{product.price}}</td>
              <td><button class="deleter">Delete</button><button class="buy-items">Edit</button></td>
            </tr>
          </tbody>
        </table>
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
        }
    }
  </script>

<style scoped>

</style>