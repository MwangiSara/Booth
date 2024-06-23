<template>
<section class="home ">
<!-- navbar start -->
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <router-link  class="navbar-brand" :to="{ name : 'home'}" >
                <i class="fas fa-film mr-2"></i>
                BOOTH
            </router-link>
            <button type="button" class="navbar-toggler collapsed" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-expanded="false">
                            <span class="navbar-toggler-icon"></span>
                        </button>
            
            <div class="navbar-collapse collapse" id="navbarCollapse" style="">
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
      </section>
<!-- footer start -->
  </section>
  
</template>

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
        width: 150px;
        padding: 15px;
    }}
</style>
