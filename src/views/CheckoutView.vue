<template>
    <h2 class="checkhead">Checkout</h2>
      <button id="clear" class="clear-btn">remove all</button>

    <div class="container-fluid">
        <div class="container-fluid">
            <div class="table table-responsive-xxl">
              <table class="table table-warning table-striped table-hover table-bordered border-warning">
                <thead>
                  <tr>
                    <th scope="col">Product Name:</th>
                    <th scope="col">Specs:</th>
                    <th scope="col">Quantity:</th>
                    <th scope="col">Price:</th>
                  </tr>
                </thead>
              </table>
            </div>
        </div>
        <div class="container-check">
            <div class="checkout-box">
              <h2 class="check-head">
                Checkout
              </h2>
              <h6 class="dis-items">
                <p></p>
              </h6>

              <h4 class="tot">
                Total Price:
              </h4>
              <div id="pricing">
              </div>
              <a href="https://www.google.com/search?rlz=1C1ONGR_enZA1052ZA1052&sxsrf=APwXEdc06HazPUbhSrRHkXLH_xHjVpCtnQ:1686830251292&q=successful+purchase&tbm=isch&sa=X&ved=2ahUKEwiysbKvnMX_AhVHgFwKHSquC0wQ0pQJegQIDBAB&biw=744&bih=736&dpr=1.25#imgrc=7F--jaWNH77p4M"><button class="buy-items" style="border: 2px solid black; margin-top: 50px; ">Purchase</button></a>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>