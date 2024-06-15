<template>
  <main>
    <section class="home ">
      <!-- header -->
      <section class="header  ">
        <SearchPhoto />
      </section>
      <!--Main content  -->
      <section class="grid">

      </section>
      <!-- footer -->
      <section class="footer">

      </section>
  </section>
  </main>
  
</template>

<script>
// @ is an alias to /src
import SearchPhoto from '@/components/SearchPhoto.vue';

export default {
  name: 'HomeView',
  components: {
    SearchPhoto
  }
}
</script>
<style>
.home{
  display: grid;
  grid-template-rows: 80px auto 1fr auto 50px;
  grid-template-columns: 1fr 4fr 1fr;
  height: 100vh;
  grid-template-areas: 
  "header header header"
  "grid grid grid"
  "footer footer footer"
  ;
  grid-gap: 10px;
  pad: 10px;
  font-weight: 600;
  font-size: 20px;
}
@media(max-width:678px){
  .home{
  grid-template-columns: 1fr;
  grid-template-rows: 50px 50px 50px 1fr 50px 50px 50px;
  grid-template-areas: 
  "header"
  "grid"
  "footer"

  ;

  }
} 


</style>
