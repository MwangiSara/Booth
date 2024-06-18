<template>
  <div class="container mt-3">
    <form class="d-flex" @submit.prevent="onSubmit">
      <input class="form-control me-3"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="query"
      />
      <button class="btn btn-mod btn-border btn-circle btn-large" type="submit">Search</button>
    </form>

    <div v-if="photos.length" class="mt-4">
      <div class="row">
        <div class="col-md-4 col-sm-12 col-lg-4" v-for="photo in photos" :key="photo.id">
          <div class="card mb-4">
            <img :src="photo.urls.small" class="card-img-top" :alt="photo.alt_description">
            <div class="card-body">
              <p class="card-text">{{ photo.description || 'No description' }}</p>
            </div>
          </div>
        </div>
        <div class="mx-auto ml-auto text-center" >
          <a v-on:click="prevPage" :disabled="currentPage === 1" >&laquo;</a>
          <a v-for="page in total_pages"  :class="{active: currentPage === page}" :key=page>{{ page }}</a>
          <a v-on:click="nextPage" :disabled="currentPage === total_pages">&raquo;</a>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { searchPhotos } from '@/services/unsplash';

export default {
  name: 'SearchBar',
  data() {
    return {
      query: '',
      photos: [],
      currentPage: this.page
    };
  },
  methods: {
    onSubmit() {
      if (this.query.trim() !== '') {
        searchPhotos(this.query, this.page)
          .then(response => {
            this.photos = response.data.results;
            this.page= 1
            console.log(this.photos)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }
    }
  }
};
</script>

<style scoped>
.btn-mod.btn-large {
    height: auto;
    padding: 10px 30px;
    font-size: 16px;
}
.btn-mod.btn-circle {
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
}
.btn-mod.btn-border {
    color: #000;
    border: 2px solid #F36031;
    background: transparent;
}
.btn-mod:hover, .btn-mod:focus, a.btn-mod:hover, a.btn-mod:focus {
    font-weight: 400;
    color: #F36031;
    background: #000;
    text-decoration: none;
    outline: none;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
}
</style>
