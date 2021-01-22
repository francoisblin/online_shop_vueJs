<template>
  <cart-products-list :cart="cart" class="p-3"></cart-products-list>
</template>

<script>
import CartProductsList from './CartProductsList'

export default {
  components: {
    CartProductsList
  },
  props: ['cart']
}

</script>

<style>

</style>
