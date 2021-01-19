<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" >
      <img src="../assets/logo.png" width="30" height="30"/>
    </a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" :class="{ active: page === 'User'}" @click="changePage('User')">Boutique</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: page === 'Admin'}" @click="changePage('Admin')">Admin</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { eventBus } from '../main'
export default {
  data () {
    return {
      page: eventBus.page
    }
  },
  methods: {
    changePage (page) {
      eventBus.changePage(page)
    }
  },
  created () {
    eventBus.$on('update:page', (page) => {
      this.page = page
    })
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
