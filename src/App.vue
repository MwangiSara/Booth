<template>
<section class="home ">
<!-- navbar start -->
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <router-link  class="navbar-brand" :to="{ name : 'home'}" >
                <i class="fas fa-film mr-2"></i>
                BOOTH
            </router-link>
            <a @click="collapseNav">
              <button class="navbar-toggler">
              <span class="navbar-toggler-icon"></span>
              </button>
            </a>
            <div class="navbar-collapse collapse" id="navbarCollapse" ref="nav_ref">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link :to="{ name : 'home'}"   class="nav-link nav-link-1 active" aria-current="page" href="">Unsplash</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name : 'RickMortyHome'}"  class="nav-link nav-link-2 active" href="">Rick & Morty</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
<!-- navbar start -->
<!-- Main content start -->
      <section class="main">
         <router-view/>   
      </section>
<!-- Main content end -->
<!-- footer start -->
      <section class="footer">   
        <footer class="text-center bg-body-tertiary">
  <!-- Grid container -->
  <div class="container pt-4">
     <!--Grid row-->
     <div class="row">
      <!--Grid column-->
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Unsplash Documentation</h5>

        <p class="text-muted">
            This project utilizes the Unsplash API to access and display images. By using this API, you agree to adhere to the  <a href="https://unsplash.com/documentation">Unsplash API Documentation</a> and the <a href="https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines">Unsplash API Guidelines</a>. Please ensure you understand and comply with these guidelines to respect the rights of content creators and the terms of service of Unsplash.
        </p>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Rick and Morty Documentation</h5>

        <p class="text-muted">
            This project utilizes the Rick and Morty GraphQL API to access and display data. By using this API, you agree to adhere to the <a href="https://rickandmortyapi.com/documentation/">Rick and Morty API Documentation</a> . Please ensure you understand and comply with the guidelines and terms of service provided in the documentation.
        </p>
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
    <!-- Section: Social media -->
    <section class="mb-4">
      

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=mwangisarah113@gmail.com"
        role="button"
        ><i class="fa fa-envelope" ></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="https://www.linkedin.com/in/sarah-mwangi/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>
      <!-- Github -->
      <a
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="https://github.com/MwangiSara/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2024 Copyright:
    <a class="text-body" href="https://sarahmwangi.netlify.app/">Sarah Wanjiru Mwangi</a>
  </div>
  <!-- Copyright -->
</footer>
      </section>
<!-- footer start -->
  </section>
  
</template>

<script>
export default{
  name: 'App',
  data(){
    return{}
  },
  methods:{
    collapseNav(){
      this.$refs.nav_ref.classList.toggle('show') 
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
.header{
  font-family: poppins;
  padding: 70px auto;
  background: linear-gradient(0deg, #0DAFE4 20%, #31C4F3 62%);
  height: 160px;
  
}
.nav-link a{
  align-content: left  !important;
  text-decoration: none !important;
  transition: all 0.3s ease !important;
  color: #fff;
  font-size: 20px !important;
}

.navbar-brand {
    color: #3399CC !important;
    font-size: 1.6rem !important;
}
.navbar-brand {
    padding-top: .3125rem !important;
    padding-bottom: .3125rem  !important;
    margin-right: 1rem !important;
    font-size: 1.60rem !important;
    text-decoration: none !important;
    white-space: nowrap !important;
}

.header h1:before, .header h1:after {
    background-color: #F36031;
    position:absolute; 
    content: '';
    height: 7px;

    width: 7px; border-radius:50%;
    bottom: 12px;
}
.header h1:before {
   left:-20px;
}
.header h1:after {
   right:-20px;
}

@media (min-width: 992px) {
    .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: .5rem;
        padding-left: .5rem;
    }
}
.nav-link-1.active, .nav-link-1:hover {
    border-color: #33CCFF !important;
}
.nav-link-2.active, .nav-link-2:hover {
    border-color: #53A535 !important;
}
.nav-link-3.active, .nav-link-3:hover {
    border-color: #33CC66 !important;
}
.nav-link {
    color: #666666 !important;
    border-bottom: 4px solid transparent !important;
    font-size: 1.2rem !important;
}
.nav-link {
    display: block !important;
    padding: .5rem 1rem !important;
    text-decoration: none !important;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out !important;
}
.nav-item {
    margin-right: 30px !important;
}
li {
    display: list-item !important;
    text-align: -webkit-match-parent !important;
    unicode-bidi: isolate !important;
}
@media (max-width: 991px) {
    .navbar-collapse {
        position: fixed;
        top: 50px;
        right: 0px;
        background: white;
        width: 230px;
        padding: 15px;
    }}
</style>
