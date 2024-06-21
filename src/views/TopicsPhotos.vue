<template>
      <!--Main content  -->
      <section class="grid">
        <div v-if="query.trim() === '' && topics.length" class=" row container-fluid mt-3 text-center">
            <div class="row mb-4 pt-5 mt-4 ">
                <h2 class="col-6 tm-text-primary ">
                  Photos of {{slug}}
                </h2>
            </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5" v-for="topic in topics" :key="topic.id">
            <div class="card mb-4 tm-video-item">
              <img :src="topic.urls.small" class="image-fluid" :alt="topic.description" height="200">
              <div class="card-body">
                <p class="card-text">{{ truncateDescription(topic.description) }}</p>
              </div>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                  <a v-on:click="changePage2(currentPage - 1)" :disabled="currentPage === 1" class=" btn tm-btn-prev mb-2 ">Previous</a>
                  <div class="tm-paging d-flex">
                      <a v-for="page in paginationPages" :key="page" @click="changePage2(page)"  class="active tm-paging-link">{{ page }}</a>
                  </div>
                  <a v-on:click="changePage2(currentPage - 1)" :disabled="currentPage === totalPages" class="tm-btn-next">Next Page</a>
                 
                 

              </div> 
    </div>
  
      </section>
    
</template>
  
  <script>
  // @ is an alias to /src
  

  
 // import {   } from '@/services/unsplash';
  import axios from 'axios';

  export default {
    name: 'topis_photos',
    props: {slug: {type: String,required: true}},

    data() {
      return {
        query: '',
        topics: [],
        currentPage: 1,
        totalPages: 1,
        maxPagesToShow: 5,
        maxDescriptionLength: 20,
        maxtitleLength :15,
        loading: true,
        isSearching: false,
        
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
    this.fetchTopics();
    // console.log('Slug:',this.slug);
  },
  methods: {
    fetchTopics() {
      const unsplashApi = axios.create({
        baseURL: 'https://api.unsplash.com',
        headers: {
          Authorization: `Client-ID ${process.env.VUE_APP_UNSPLASH_CLIENT_ID}`
        }
      });
      unsplashApi.get(`/topics/${this.slug}/photos`, {
        params: {
          per_page: 10
        }
      })
      .then(response => {
        this.topics = response.data;
        this.totalPages = Math.ceil(response.data.length / 10);
        console.log('topics:', response.data.length);

      })
      .catch(error => {
        console.error('Error fetching topics:', error);
      })
      .finally(() => {
        this.loading = false;
      });
    },
    changePage2(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
        this.fetchTopics();
        console.log('page:');
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
};
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
  .btn-mod:hover, .btn-mod:focus, a.btn-mod:hover,
   a.btn-mod:focus, .tm-paging-link:hover,.tm-paging-link:focus
    {
      font-weight: 400;
      color: #E26D5C;
      background: #000;
      text-decoration: none;
      outline: none;
      border-color: transparent;
      -webkit-box-shadow: none;
      box-shadow: none;
      cursor: pointer;
  }
  .tm-btn-next:hover, .tm-btn-next:focus{
    cursor: pointer;
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
  
  </style>
  