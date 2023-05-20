<template>
    <!-- <categoryPage -->
    <div class="row">

        <div class="col-3">
            <div style="height:300px;overflow-y:scroll">
                <h2>Filter By Title</h2>
                <div class="col-12 py-2 text-bold" v-for="product in productsList" :key="product.id" @click="filterProductList(product.title)">
                {{ product.title }}
                </div>
            </div>

            <div style="height:300px;overflow-y:scroll">
                <h2>Filter By category</h2>
                <div class="col-12 py-2 text-bold" v-for="product,index in productsList" :key="+product.category.id+index" @click="filterProductByCategory(product.category.id)">
                {{ product.category.name }}
                </div>
            </div>

            <div style="padding-top:30px;height:300px;overflow-y:scroll">
                <h2>Shop By Price</h2>
                <md-checkbox class="col-12 py-2 text-bold" v-for="price,index in priceRange" :key="index" @change="filterProductByPrice(price)">
                    {{index == 0 ? 'Under ': index == priceRange.length-1 ? 'Above ' :  `${priceRange[index-1]} -` }} {{ price-1 }}
                
                </md-checkbox>
            </div>
        </div>

        <div class="col-9">
            <div class="row">
                <Product v-for="product in filterProducts" :prod="product" :key="product.id" clas="col-3"
                    style="max-width:400px" />
            </div>
        </div>


    </div>
</template>

<script>
import Product from './Product.vue';

export default {
    name: 'productPage',
    components: {
        Product
    },
    data(){
    return{
        priceRange:[100,500,1000,1500,2000]
    }
    },
    mounted() {
        this.$store.dispatch('fetchproducts')
        
        this.filterProductList('generic')
    },
    computed: {
        productsList() {
            return this.$store.getters['productsList']
        },
        filterProducts() {
            return this.$store.getters['filterProducts']
        }
      
    },
    methods:{
        async filterProductList(title) {
            console.log(title)
             this.$store.dispatch('getFilterProduct',title)
        },

        async filterProductByCategory(id) {
           
             await this.$store.dispatch('getProductByCategory',id)
        },


        async filterProductByPrice(price) {
            let index = this.priceRange.findIndex(x=>x == price);
          let  price_min= index == 0 ? price-1 : index ==   this.priceRange.length-1 ? this.priceRange[this.priceRange.length-1]-1:  this.priceRange[index-1];
          let price_max = index == 0 ? this.priceRange[index -1] : index ==   this.priceRange.length-1 ? 5000 :  this.priceRange[index]-1
        
            this.$store.dispatch('getFilterProductByPrice',{'price_min': price_min, 'price_max': price_max})
        }
    }
}
</script>