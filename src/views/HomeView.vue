<template>
  <main>
    <section class="home ">
      <!-- header -->
      <section class="header ">
        <h1>BOOTH</h1>
        <br>
        <SearchPhoto />
      </section>
      <!--Main content  -->
      <section class="grid">
        <unsplash-collections/>
      </section>
      <!-- footer -->
      <section class="footer">
        
      </section>
  </section>
  </main>
  
</template>

<script>
// @ is an alias to /src
import SearchPhoto from '@/components/SearchPhoto';
import Unsplash_collections from '@/components/Unsplash_Collections';

export default {
  name: 'HomeView',
  components: {
    SearchPhoto,
    Unsplash_collections
  }
}
</script>
<style>
.header{
  font-family: poppins;
  padding: 50px auto;
  background: linear-gradient(0deg, #0DAFE4 20%, #31C4F3 62%);
  height: 170px;
  padding-top: 30px;
}
.header h1 {
  position:relative; 
  font-size:20px; 
  font-weight:700;  
  letter-spacing:0px; 
  text-transform:uppercase; 
  width:150px; 
  text-align:center; 
  margin:auto; 
  white-space:nowrap; 
  border:2px solid #222;
  padding:5px 11px 3px 11px;
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

</style>
