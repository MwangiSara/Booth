<template>
   <div class="container-fluid mt-3">
    <div class="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll" style="">
      <form class="d-flex  tm-search-form" @submit.prevent="onSubmit">
        <input class="form-control tm-search-input"
          type="search"
          placeholder="Search For Amazing Photos..."
          aria-label="Search"
          v-model="query"
          @input="onInput"
        />
        <!-- <button class="btn btn-mod card-button btn-border btn-circle btn-large" type="submit">Search</button> -->
      </form>
    </div>
    
      <div v-if="loading" class="mt-4 text-center">
      <p style="font-size: 30px; color: #009999">Loading topics, please wait...</p>
      </div>
  
      <div v-if="!loading && query.trim() !== ''" class="mt-4">
          <div v-if="photos.length === 0" class="row mb-4 container-fluid ">
                  <h2 class="col-6 tm-text-primary">
                      No photos related to the searched query
                  </h2>
            </div>
      
        <div v-else class="row container-fluid ">
          
          <div class="row mb-4">
                <h2 class="col-6 tm-text-primary">
                  Photos of {{query}}
                </h2>
            </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5" v-for="photo in photos" :key="photo.id">
            <div class="card mb-4 tm-video-item">
              <img :src="photo.urls.small" class="image-fluid" :alt="photo.alt_description" height="200">
              <div class="card-body">
                <p class="card-text">{{ truncateDescription(photo.description) }}</p>
              </div>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                  <a v-on:click="changePage(currentPage - 1)" :disabled="currentPage === 1" class=" btn tm-btn-prev mb-2 ">Previous</a>
                  <div class="tm-paging d-flex">
                      <a v-for="page in paginationPages" :key="page" @click="changePage(page)"  class="active tm-paging-link">{{ page }}</a>
                      
                  </div>
                  <a v-on:click="changePage(currentPage - 1)" :disabled="currentPage === totalPages" class="tm-btn-next">Next Page</a>
              </div> 
        </div>
        
      </div>
      <div v-if="query.trim() === '' && topics.length" class=" topics mt-4">
        <h2 class="col-6 tm-text-primary">
                Topics
              </h2>
        <div class="row">
          
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5" v-for="topics in topics" :key="topics.id">
              <div class="card card-sl mb-4 tm-video-item">
                  <div class="image-fluid">
                      <img :src="topics.cover_photo.urls.full" class="card-img-top " :alt="topics.description" height="200">
                  </div>
                  <panel class="card-action text-center" style="" href="#"><i class="fa fa-heart" style=""></i></panel>
                  <div class="card-body">
                      <div class="card-heading" style="font-size: 23px; font-weight: bolder; margin-top: 0; margin-bottom: 2px;" > {{ truncatetitle(topics.title) }}</div>
                      <p class="card-text">{{ truncateDescription(topics.description) }} </p>
                      <router-link class="btn card-button" :to="{ name: 'topicsPhotos', params: { slug: topics.slug } }" style="background-color: #009999; color: #fff;">View topics</router-link>
                      
                  </div>
              </div>
              </div>
        </div>
        <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                  <a v-on:click="changePage(currentPage - 1)" :disabled="currentPage === 1" class=" btn tm-btn-prev mb-2 ">Previous</a>
                  <div class="tm-paging d-flex">
                      <a v-for="page in paginationPages" :key="page" @click="changePage(page)"  class="active tm-paging-link">{{ page }}</a>
                      
                  </div>
                  <a v-on:click="changePage(currentPage - 1)" :disabled="currentPage === totalPages" class="tm-btn-next">Next Page</a>
              </div> 
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { searchPhotos, gettopics } from '@/services/unsplash';
export default {
  name: 'HomeView',
  
  data() {
    return {
      query: '',
      topics: [],
      photos: [],
      currentPage: 1,
      totalPages: 1,
      maxPagesToShow: 5,
      maxDescriptionLength: 20,
      maxtitleLength :15,
      loading: true,
      isSearching: false
    
    };
  },
  computed: {
    paginationPages() {
      let startPage = Math.max(1, this.currentPage - Math.floor(this.maxPagesToShow / 2));
      let endPage = startPage + this.maxPagesToShow - 1;

      if (endPage > this.totalPages) {
        endPage = this.totalPages;
        startPage = Math.max(1, endPage - this.maxPagesToShow + 1);
      }

      const pages = [];
      for (let page = startPage; page <= endPage; page++) {
        pages.push(page);
      }

      return pages;
    }
  },
  mounted() {
    this.fetchtopics();
  },
  methods: {
    fetchtopics() {
      gettopics()
        .then(response => {
          this.topics = response.data;
          console.log()
        })
        .catch(error => {
          console.error('Error fetching topics:', error);
        })
        .finally(() => {
          this.loading = false;
          
        });
    },
    fetchPhotos(page = 1) {
      searchPhotos(this.query, page)
        .then(response => {
          this.photos = response.data.results;
          this.totalPages = Math.ceil(response.data.total / 10); // Assuming 10 items per page
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    onSubmit() {
      if (this.query.trim() !== '') {
        this.currentPage = 1;
        this.fetchPhotos();
      }else{
        this.fetchtopics();
      }
    },
    onInput() {
      this.currentPage = 1;
      if (this.query.trim() === '') {
        this.isSearching = false;
        this.photos = [];
        this.fetchtopics();
      } else {
        this.isSearching = true;
        this.fetchPhotos();
      }
    },
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
        this.fetchPhotos(page);
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
    }
  }
}
</script>
<style>
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
      border: 2px solid #E26D5C;
      background: transparent;
  }
  .btn-mod:hover, .btn-mod:focus, a.btn-mod:hover, a.btn-mod:focus {
      font-weight: 400;
      color: #E26D5C;
      background: #000;
      text-decoration: none;
      outline: none;
      border-color: transparent;
      -webkit-box-shadow: none;
      box-shadow: none;
  }
  
  
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
  @media screen and (max-width: 600px){
    .tm-paging-col {
          flex-direction: column;
      }
  }
  figure.effect-ming {
      background: #030c17;
  }
  .tm-video-item {
      position: relative !important;
      overflow: hidden !important;
      text-align: center !important;
      cursor: pointer !important;
  }
  .tm-text-primary {
      color: #009999;
  }
  .card-button{
    text-decoration: none !important;
    color: #fff;
  }
  .card-button:hover{
    text-decoration: none !important;
    background-color: #E26D5C!important;
    color: #fff !important;
  }
  .card-action{
    border: 2px solid #E26D5C;
    border-radius: 300px;
    color: #E26D5C;
    width: 44px !important;
    align-content: left !important; 
    margin-left: 4px;
    height:30px;
    position: relative;
    bottom: 15px;
    background-color: #fff;

    /* box-shadow: 5px; */
  }
/* hero 1 and search bar css */
.tm-hero {
    min-height: 200px !important;
    background-image: url('../assets/images/sanddune2.jpg') !important;
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
</style>
