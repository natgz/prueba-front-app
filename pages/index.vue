<template>

  <div>
    <div>
      <img src="/online-shop-banner.jpg" alt="banner" class="w-full" />
    </div>
    <v-row dense class="row-products">
      <Card v-for="product in products" 
        :product="product" 
        :key="product.id"
        @click="openDetail(product.id)"/>
    </v-row >
  </div>

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
      async getProductos() {
        const url = 'https://eshop-deve.herokuapp.com/api/v2/products'
        const { data, error } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })

        this.products = data.products

        if (!error) {
          this.products = data.products
        } else { 
          throw new Error('Error al cargar productos')
        }
      },
      openDetail(id) {
        this.$router.push(`/detail/${id}`)
      }
    }
  }
</script>

<style>
  .row-products {
    justify-content: center;
    margin: 30px;
  }

  .w-full {
    width: 100%;
  }

  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-track {
    background: #f3f3f3;
    border-radius: 5px;
  }

  body::-webkit-scrollbar-thumb {
    background: #eab569;
    border-radius: 5px;
    border: 2px solid #f3f3f3;
  }

  @supports not selector(::-webkit-scrollbar) {
    body {
        scrollbar-color: #eab569 #f3f3f3;
    }
  }
</style>