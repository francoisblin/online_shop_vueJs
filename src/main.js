import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  data: {
    products: [
      {
        id: '1',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7ekQ3gBH4qgpA_rFjIi5BRHelutd--Q0xhf76XENxHC_gpsIZA',
        title: 'MacBook',
        description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté l\'impossible. C\'est le plus fin et le plus léger de nos ordinateurs portables',
        price: 1500
      },
      {
        id: '2',
        img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/e2/0e/1a/1707746/1540-0/tsp20180327114010/PC-Portable-Gaming-Acer-Predator-21-X-GX21-71-76VC-21-Incurve.jpg',
        title: 'Predator',
        description: 'The GPU. The source of any competent, powerful gaming machine. With next-gen solutions from NVIDIA® and AMD, this source is overflowing.',
        price: 2300
      },
      {
        id: '3',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7ekQ3gBH4qgpA_rFjIi5BRHelutd--Q0xhf76XENxHC_gpsIZA',
        title: 'MacBook',
        description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté l\'impossible. C\'est le plus fin et le plus léger de nos ordinateurs portables',
        price: 1500
      }
    ],
    cart: [
    ]
  },
  methods: {
    addProductToCart (product) {
      if (!this.cart.map(i => i.id).includes(product.id)) {
        this.cart = [...this.cart, product]
        this.$emit('update:cart', this.cart.slice())
      }
    },
    removeItemFromCart (item) {
      this.cart = this.cart.slice().filter(i => i.id !== item.id)
      this.$emit('update:cart', this.cart.slice())
    }
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
