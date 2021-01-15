<template>
  <cart-products-list :cart="cart" class="p-3"></cart-products-list>
</template>

<script>
import CartProductsList from './CartProductsList.vue'
import { eventBus } from '../../main'

export default {
  components: {
    CartProductsList
  },
  data () {
    return {
      cart: []
    }
  },
  created () {
    this.cart = eventBus.cart
    eventBus.$on('update:cart', (cart) => {
      this.cart = cart
    })
  }
}

</script>

<style>

</style>
