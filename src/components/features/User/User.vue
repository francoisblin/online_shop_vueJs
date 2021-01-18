<template>
  <div class="d-flex flex-row">
      <shop class="w-75"></shop>
      <cart class="w-25"></cart>
    </div>
</template>

<script>
import Shop from './Shop/Shop.vue'
import Cart from './Cart/Cart.vue'

export default {
  components: {
    Shop,
    Cart
  }
}
</script>

<style>

</style>
