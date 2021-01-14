<template>
  <div class="w-25 p-3 product-container d-flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img style="height:150px" :src="product.img" />
    </div>
    <div>
      <h3>{{ product.title }}</h3>
      <hr>
    </div>
    <div>
      <p>{{ product.description }}</p>
    </div>
    <div>
      <span>{{ product.price }}</span>
    </div>
    <button class="btn btn-primary btn-sm float-right">Commander</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      product: {
        img: 'https://www.notebookcheck.biz/uploads/tx_nbc2/air13teaser.jpg',
        title: 'Mac Book 13',
        description: 'Notre portable le plus fin et le plus léger est métamorphosé par la puce Apple M1.',
        price: '1500 €'
      }
    }
  }
}

</script>

<style>
.product-container {
  height: 400px;
}

p {
  font-size: 12px;
}

</style>
