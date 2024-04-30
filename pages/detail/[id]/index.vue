<template>
   <v-container class="bg-surface-variant">
    <v-row v-if="!isLoading" no-gutters>
      <v-col>
        <v-sheet class="ma-2 pa-2">
          <v-img :src="product.imageUrl"></v-img>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="ma-2 pa-2">
          <v-title>
            {{ product.name }}
          </v-title>
          <v-subtitle>
            {{ product.price }}
          </v-subtitle>
          <v-text>
            {{ product.description }}
          </v-text>
          <v-btn>
            <v-btn variant="outlined" text="Agregar a carrito"></v-btn>
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <v-progress-circular indeterminate></v-progress-circular>
      </v-col>
    </v-row>
  </v-container> 
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqNENWdUR6R0RpQTJzeHUwWVlPW W5kaUU0WGtvbnNGYiIsImlhdCI6MTY3NDU4NjI5OTUyN30.W01xe4zYHPf8-n8KlW_OnPe8anXZ FzNPLIHHmmYTsDCBIeVqTYhbbYxHvRW3HTrN3nnwD9CSvbnFpvC_655UAQ",
        product: () => {},
        isLoading: true
      }
    },
    mounted() {
      const id = this.$route.params.id
      this.getProductos(id)
    },
    methods: {
      async getProductos(id) {
        const url = `https://eshop-deve.herokuapp.com/api/v2/products/${id}`
        
        const { data, error } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })

        console.log(data)

        if (!error) {
          this.product = data.product
          this.isLoading = false
        } else { 
          throw new Error('Error al cargar productos')
        }
      },
    }
  }
</script>

<style>
main {
  .product-detail {
    display: grid;
  }

  .img-side {
    position: relative;
    padding: 30px;
    align-items: left;
    justify-content: left;
    flex: 1 1 200px;
    gap: 20px;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 200px;
    gap: 20px;

    product-btn {
      width: 50%;
      padding: 10px 40px;
      cursor: pointer;
    }
  }
}
</style>