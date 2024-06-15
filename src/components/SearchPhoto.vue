<template>
  <div class="container mt-3">
    <form class="d-flex" @submit.prevent="onSubmit">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="query"
      />
      <button class="btn btn-outline-info" type="submit">Search</button>
    </form>
  </div>
  
  <div class="wrapper">
    <h1>Photos</h1>
    <div class="card" v-for="photo in photos" :key="photo.id">
      <!-- {{ photo.urls.raw }} -->
      <div class="card-body ">
        
        <a href="#" target="_blank" class="demo_img">
          <img src="{{ photo.urls.raw }}" alt="{{ photo.urls.raw }}">
        </a>
        <h4 class="item_title">
          <a href="" target="_blank">{{ photo.urls.raw }}</a>
        </h4>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      photos: []
    };
  },
  mounted() {
    this.fetchPhotos();
  },
  methods: {
    fetchPhotos() {
      const params = new URLSearchParams();
      const clientId = process.env.VUE_APP_UNSPLASH_CLIENT_ID;

      axios.get('https://api.unsplash.com/photos/', { params: {
          client_id: clientId
        }
      })
      .then(response => {
        this.photos = response.data;
        console.log(this.photos)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }
  }

}
</script>

<style>
.search{
        border: 1px solid #c4c4c4;
        width: 100px;
        overflow-x: hidden;
        display: flex;
        border-radius: 20px;
        font-size: 8px;
    }
    .search input{
        width: 300px;
        height:45px;
        border: none;
        padding: 2px 15px;
        outline: none;
        font-size: 15px;
    }
    .button-src{
        padding: 0px 195px; 
        display: inline-block;
    }
    .button-src button{
        padding: 5px 17px 5px 17px;
        border-radius: 15px;
        border: none;
        margin: 5px 7px;
        background-color: #FF7A00;
        color: #ffffff;
        font-size: 15px;
    }
    

</style>