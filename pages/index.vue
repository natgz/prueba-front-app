<template>
  <div>
    <img src="/online-shop-banner.jpg" alt="banner" class="w-full" />
  </div>

  <v-row >
    <Card v-for="product in products" 
      :product="product" 
      :key="product.id"/>
  </v-row >
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        products: [],
        token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqNENWdUR6R0RpQTJzeHUwWVlPW W5kaUU0WGtvbnNGYiIsImlhdCI6MTY3NDU4NjI5OTUyN30.W01xe4zYHPf8-n8KlW_OnPe8anXZ FzNPLIHHmmYTsDCBIeVqTYhbbYxHvRW3HTrN3nnwD9CSvbnFpvC_655UAQ",
      }
    },
    created() {
      this.getProductos()
    },
    methods: {
      getProductos() {
        axios
          .get('https://eshop-deve.herokuapp.com/api/v2/products', {
            headers: {
              Authorization: `Bearer ${this.token}`
            }
          })
          .then(response => (this.products = response.data.products))
      }
    }
  }
</script>

<style>
  /* main {
    .product-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  } */
</style>