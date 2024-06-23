<template>
 <div class="in_main">
  <div class="container py-3" >
  <!-- Card Start -->
   
  <div class="card  mt-5 ">
    <!-- load -->
    <div v-if="loading" class="mt-4 text-center">
          <p style="font-size: 30px; color: #53A535">Loading Characters, please wait...</p>
      </div>
      <div v-if="loading" class="mt-4 text-center">
          <p style="font-size: 30px; color: #53A535">Error: {{ error }}</p>
      </div>
    <div v-if="character" class="row">
      <div  class="col-md-7 col-sm-12 col-lg-7 px-3 d-flex flex-col justify-content-center align-items-center gap-2">
        <div class="card-block px-6">
              <h4 class="card-title" style="font-size: 30px; color: #53A535; font-weight: 900;">{{ character.name }}</h4>
                <p class="card-text">
                   <span style="font-size: 20px;font-weight: bold;">Status:</span> <span class="text-muted" style="font-size: 20px !important;font-weight: bold;">{{ character.status || 'Undefined' }}</span> <br>
                   <span style="font-size: 20px;font-weight: bold;">Species:</span> <span class="text-muted" style="font-size: 20px !important;font-weight: bold;"> {{ character.species || 'Undefined'}}</span><br>
                    <span style="font-size: 20px;font-weight: bold;">Type:</span> <span class="text-muted" style="font-size: 20px !important;font-weight: bold;">{{ character.type || 'Undefined'}}</span><br>
                      <span style="font-size: 20px;font-weight: bold;">Gender:</span> <span class="text-muted" style="font-size: 20px !important;font-weight: bold;">{{ character.gender || 'Undefined'}}</span>
                  </p>
                  <br>
        </div>
          <br>
      </div>
      <!-- Carousel start -->
      <div class="col-md-5 col-sm-12 col-lg-5">
        <div id="CarouselTest" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block" :src="character.image" :alt="character.name" height="300" width="300">
            </div>
          </div>
        </div>
      </div>
      <!-- End of carousel -->
    </div>
  </div>
  <!-- End of card -->
  </div>
 </div> 

</template>

<script>
  import axios from 'axios';
  import { GET_CHARACTER_BY_NAME } from '../services/graphql/queries.js';
export default {
  name: 'OneCharacter',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      character: null,
      loading: false,
      error: null
    };
  },
  created() {
    this.fetchCharacter();
  },
  methods: {
    async fetchCharacter() {
      this.loading = true;
      try {
        const response = await axios.post('https://rickandmortyapi.com/graphql', {
          query: GET_CHARACTER_BY_NAME,
          variables: {name: this.name }
        });
        const results = response.data.data.characters.results;
        for (let character of results) {
          if (character.name === this.name) {
            this.character = character;
            break;
          }
        }
        if (!this.character) {
          this.error = 'Character not found';
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.in_main{
  min-height: 575px !important;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/images/rickandmorty2.jpg') !important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
}
</style>