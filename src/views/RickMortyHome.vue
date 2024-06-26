<!-- src/components/CharacterList.vue -->
<template>
  <!-- hero start -->
   <div class="container-fluid mt-3">
        <div class="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll" style="">
        </div>
  <!-- hero end -->
  <!-- main cotent start -->
    <div class="row">
      <div class="row mb-4">
                <h2 class="col-12 tm-text-primary">
                  Characters
                </h2>
                <p class="col-12 text-muted">View All Rick And Morty Show Characters Though The Rick And Morty API</p>
        </div>
      <div v-if="loading" class="mt-4 text-center">
          <p style="font-size: 30px; color: #53A535">Loading Characters, please wait...</p>
      </div>
      <div v-if="error">{{ error }}</div>
      <div v-if="characters" class="row">
        <div  v-for="character in characters" :key="character.id" class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
          
          <div class="card mb-4 tm-video-item">
                  <div class="image-fluid">
                      <img :src="character.image" class="card-img-top " :alt="character.name" height="200">
                  </div>
                  <span class="card-action text-center" style="" ><i class="fa fa-heart" style=""></i></span>
                  <div class="card-body">
                      <div class="card-heading" style="font-size: 23px; font-weight: bolder; margin-top: 0; margin-bottom: 2px;" > {{ truncatetitle(character.name) }}</div>
                      <p class="card-text">{{ truncateDescription(character.status) }} </p>
                      <router-link class="btn card-button" :to="{ name: 'RickMortyPhotos',params:{name: character.name} }" style="background-color: #53A535; color: #fff;">View Character</router-link>
                  </div>
              </div>


        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  import { GET_CHARACTERS } from '../services/graphql/queries.js';
  
  export default {
    name: 'CharacterList',
    data() {
      return {
        characters: null,
        loading: false,
        error: null,
        maxPagesToShow: 5,
        maxDescriptionLength: 20,
        maxtitleLength :15,
        TotalPages: null,
        pages: null,
      };
    },
    created() {
      this.fetchCharacters();
    },
    methods: {
      async fetchCharacters(page = 1) {
        try {
          this.loading = true;
          const response = await axios.post('https://rickandmortyapi.com/graphql', {
            query: GET_CHARACTERS,
            variables: { page: 1 }

          });
          this.characters = response.data.data.characters.results;
          this.TotalPages = response.data.data.characters.info.pages
          
          console.log(this.page)
        } catch (error) {
          this.error = error.message;
        } finally {
          this.loading = false;
        }
      },
      truncatetitle(title) {
        if (!title) return 'No Title';
        if (title.length <= this.maxtitleLength) return title;
        return title.slice(0, this.maxtitleLength) + '...';
      },
      truncateDescription(description) {
        if (!description) return 'No Description';
        if (description.length <= this.maxDescriptionLength) return description;
        return description.slice(0, this.maxDescriptionLength) + '...';
      },
      changePage(){

      }
    
    },
  };
  </script>
  
  <style scoped>
 /* hero 1 and search bar css */
.tm-hero {
  min-height: 200px !important;
    background-image: url('../assets/images/rickandmorty2.jpg') !important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.align-items-center {
    align-items: center !important;
}
.justify-content-center {
    justify-content: center !important;
}
.tm-search-input {
    width: 360px !important;
    border-radius: 0 !important;
    padding: 12px 15px !important;
    color: #009999 !important;
    border: none !important;
}
.tm-search-btn {
    color: white !important;
    background-color: #009999 !important;
    border: none !important;
    width: 100px !important;
    height: 50px !important;
    margin-left: -1px !important;
}
.tm-text-primary {
      color: #53A535;
  }

/* buttons */
.btn-mod.btn-large {
      height: auto;
      padding: 10px 30px;
      font-size: 16px;
  }
  .btn-mod.btn-circle {
      -webkit-border-radius: 30px;
      -moz-border-radius: 30px;
      border-radius: 15px;
  }
  .btn-mod.btn-border {
      color: #000;
      border: 2px solid #077B3C;
      background: transparent;
  }
  .btn-mod:hover, .btn-mod:focus, a.btn-mod:hover, a.btn-mod:focus {
      font-weight: 400;
      color: #077B3C;
      background: #000;
      text-decoration: none;
      outline: none;
      border-color: transparent;
      -webkit-box-shadow: none;
      box-shadow: none;
  }
  /* pagination */
  .tm-paging {
          flex-wrap: wrap;
      }
  .tm-paging-link.active {
      background-color: #009999;
      color: #fff;
  }
  .tm-paging-link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      font-size: 1.1rem;
      color: #999;
      background-color: #EEEEEE;
      margin: 10px;
      border-radius: 5px;
      text-decoration: none;
      transition: all 0.3s ease;
      
  }
  .tm-btn-prev{
    display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      width: 90px !important;
      height: 60px !important;
      font-size: 1.1rem !important;
      color: #fff !important;
      background-color: #009999 !important;
      margin: 10px !important;
      border-radius: 5px !important;
      text-decoration: none !important;
      transition: all 0.3s ease !important;
  }
  .tm-btn-next{
    display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 60px;
      font-size: 1.1rem;
      color: #fff;
      background-color: #009999;
      margin: 10px;
      border-radius: 5px;
      text-decoration: none;
      transition: all 0.3s ease;
  }

  /* cards */
  figure.effect-ming {
      background: #030c17;
  }
  .tm-video-item {
      position: relative !important;
      overflow: hidden !important;
      text-align: center !important;
      cursor: pointer !important;
  }

  .card-button{
    text-decoration: none !important;
    color: #fff;
  }
  .card-button:hover{
    text-decoration: none !important;
    background-color: #077B3C!important;
    color: #fff !important;
  }
  .card-action{
    border: 2px solid #077B3C;
    border-radius: 300px;
    color: #077B3C;
    width: 44px !important;
    align-content: left !important; 
    margin-left: 4px;
    height:30px;
    position: relative;
    bottom: 15px;
    background-color: #fff;

    /* box-shadow: 5px; */
  }
  </style>
  