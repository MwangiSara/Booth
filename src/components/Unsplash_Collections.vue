<template>
    {{ collections }}
  <div v-if="collections.length" class=" collection mt-4">
      <div class="row">
        <div class="col-md-4 col-sm-12 col-lg-4" v-for="collection in collections" :key="collection.id">
          <div class="card card-sl mb-4">
            <div class="card_image">
                <img :src="collection.cover_photo.urls.full" class="card-img-top " :alt="collection.description" height="400">
            </div>
            <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
            <div class="card-body">
                <div class="card-heading"> Audi Q8</div>
                <p class="card-text">{{ collection.description || "no Description" }}</p>
                <a href="#" class="card-button"> View Collection</a>
            </div>
          </div>
        </div>
        <!-- <div class="mx-auto ml-auto text-center" >
          <a v-on:click="prevPage" :disabled="currentPage === 1" >&laquo;</a>
          <a v-for="page in total_pages"  :class="{active: currentPage === page}" :key=page>{{ page }}</a>
          <a v-on:click="nextPage" :disabled="currentPage === total_pages">&raquo;</a>
        </div> -->
      </div>
    </div>
</template>

<script>
import { getcollections } from "@/services/unsplash";
export default {
    name: 'collections',
    data(){
        return{
            query: '',
            collections: [],
        }
    },
    mounted(){
        getcollections(this.page)
          .then(response => {
            this.collections = response.data;
            
            console.log(response.data)

          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    }

}
</script>

<style>
.collection{
    margin: 20px;
}
.collection .card-sl {
        border-radius: 8px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .card-image img {
        max-height: 100%;
        max-width: 100%;
        border-radius: 8px 8px 0px 0;
    }
    .card-action {
        position: relative;
        float: right;
        margin-top: -25px;
        margin-right: 20px;
        z-index: 2;
        color: #E26D5C;
        background: #fff;
        border-radius: 100%;
        padding: 15px;
        font-size: 15px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
    }
    .card-action:hover {
        color: #fff;
        background: #E26D5C;
        -webkit-animation: pulse 1.5s infinite;
    }
    .card-body .card-heading {
        font-size: 18px;
        font-weight: bold;
        background: #fff;
        padding: 10px 15px;
    }
    .card-body .card-text {
        padding: 10px 15px;
        background: #fff;
        font-size: 14px;
        color: #636262;
    }
    .card-body .card-button {
        display: flex;
        justify-content: center;
        padding: 10px 0;
        width: 100%;
        background-color: #1F487E;
        color: #fff;
        border-radius: 0 0 8px 8px;
    }

    .card-body .card-button:hover {
        text-decoration: none;
        background-color: #1D3461;
        color: #fff;

    }
    @-webkit-keyframes pulse {
        0% {
            -moz-transform: scale(0.9);
            -ms-transform: scale(0.9);
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
        }

        70% {
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -webkit-transform: scale(1);
            transform: scale(1);
            box-shadow: 0 0 0 50px rgba(90, 153, 212, 0);
        }

        100% {
            -moz-transform: scale(0.9);
            -ms-transform: scale(0.9);
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
            box-shadow: 0 0 0 0 rgba(90, 153, 212, 0);
        }
    }


</style>