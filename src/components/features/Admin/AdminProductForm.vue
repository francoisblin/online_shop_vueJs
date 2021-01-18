<template>
  <form class="d-flex flex-column">
    <h4>Ajouter un produit :</h4>
    <hr class="w-100">
    <div class="form-group">
      <label>Image</label>
      <input type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>Titre</label>
      <input type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea class="form-control"></textarea>
    </div>
    <div class="form-group">
      <label>Prix</label>
      <input type="number" class="form-control" />
    </div>
    <button class="btn btn-primary">Ajouter</button>
  </form>
</template>

<script>
export default {
}
</script>

<style>

</style>
