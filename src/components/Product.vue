<template>

  <div class="p-4">
    <div class="">
      <div class="">
        <div class="card text-black">
          
          <img
            :src="prod.images[0]"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body px-1">
            <div>
              <h5 class="card-title">{{ prod.title }}</h5>
              <p class="text-muted mb-0">{{ prod.category ? prod.category.name : ""}}</p>

              <p class="text-muted mb-2">{{ prod.description}}</p>
            </div>
          
            <div class="d-flex  total font-weight-bold mt-4">
              <span class="pr-3">MRP:</span><span>₹ {{ prod.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>





</template>
<script>

export default{
    name: 'product',
    props:{
        prod:{
            default:()=>{},
            type: Object
        }
    }
}
</script>
<style scoped>
.card{
    border: none
}
</style>