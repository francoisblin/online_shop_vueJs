<template>
  <form @submit="trySubmit" class="d-flex flex-column">
    <h4>Ajouter un produit :</h4>
    <hr class="w-100">
    <div class="form-group">
      <label>Image</label>
      <input v-model="form.img" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>Titre</label>
      <input v-model="form.title" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea v-model="form.description" class="form-control"></textarea>
    </div>
    <div class="form-group">
      <label>Prix</label>
      <input v-model.number="form.price" type="number" class="form-control" />
    </div>
    <ul v-if="errors.length">
      <li v-for="error in errors" :key="error" class="text-danger">{{ error }}</li>
    </ul>
    <button class="btn btn-primary">Ajouter</button>
  </form>
</template>

<script>

export default {
  data () {
    return {
      form: {
        img: '',
        title: '',
        description: '',
        price: ''
      },
      errors: []
    }
  },
  methods: {
    trySubmit (event) {
      event.preventDefault()
      if (this.formIsValid()) {
        this.$store.dispatch('product/saveOne', { ...this.form })
        this.resetForm()
        this.$router.push('/shop')
      }
    },
    resetForm () {
      this.form = {
        img: '',
        title: '',
        description: '',
        price: ''
      }
    },
    formIsValid () {
      this.errors = []
      if (!this.form.img) {
        this.errors.push('img required')
      }
      if (!this.form.title) {
        this.errors.push('title required')
      }
      if (!this.form.description) {
        this.errors.push('description required')
      }
      if (!this.form.price) {
        this.errors.push('price required')
      }
      return (!this.errors.length)
    }
  }
}
</script>

<style>

</style>
