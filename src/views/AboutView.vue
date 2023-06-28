<template>
    <div class="main">
        <center>
          <br />
          <h1>About Us</h1>
          <div class="pic-body">
            <img
              src="https://i.postimg.cc/zGKkzYh5/Screenshot-2023-06-09-124717.png"
              alt="profile"
              class="profile"
            />
            <h3>
              "We do not stop playing games because we grow old, we grow old
              because we stop playing"<i>-No Game No Life.</i>
            </h3>
          </div>
        </center>
        <hr />
        <div class="com-text">
          <p>
            M.F Gaming is a shopping website that values our customers and our
            gamers. Our principle is lets game! We found that many gamers are a
            little low on budget when wanting to invest in a custome gaming setup
            so we found the solution. LOW PRICES WOW! For realy thats all it is.
            So our aim is getting you the gamer the affordable gaming setup.
          </p>
        </div>
        <div class="contact-btn">
          <button
            class="btn btn-outline-warning"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            CONTACT US
          </button>
  
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">CONTACT US</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <form action="https://formspree.io/f/myyargvq" method="POST">
  
                  <div class="row">
                      <div class="col">
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                      </div>
                    </div>
                    <br>
                    <div class="row">
                      <div class="col">
                          <input type="email"
                          name="email" 
                          class="form-control" placeholder="Email" aria-label="Email">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                      <div class="col">
                          <textarea
                          name="message" 
                          class="form-control" placeholder="Message" aria-label="message"></textarea>
                        </div>
                    </div>
                 
                <br>
                <button type="submit" class="join">Send</button>
              </form>
            </div>
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