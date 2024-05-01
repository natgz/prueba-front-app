<template>

  <v-sheet class="sheet-product"
    :max-width="1000"
    border
    rounded
  >
    <v-row 
    class="product-row" 
    v-if="!isLoading">
      <v-col cols="12" md="6" sm="12" :key="4">
        <v-img class="img-side elevation-10" :src="product.imageUrl"/>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="product-side">
        <v-list class="product-info elevation-5">
          <v-list-item>
            <h2>
              {{ product.name }}
            </h2>
          </v-list-item>
          <v-list-item>
            <h3>
            Precio: ${{ product.price }}
            </h3>
          </v-list-item>
          <v-list-item>
            <p>
              {{ product.description || 'No hay descripción'}}
            </p>
          </v-list-item>
          <v-btn 
            class=""
            variant="tonal"
            color="#009688"
            text="Agregar a carrito"
            @click="agregarCarrito" />
        </v-list>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col class="loader-info">
        <v-progress-circular indeterminate></v-progress-circular>
      </v-col>
    </v-row>
  </v-sheet>

</template>

<script>
  import axios from 'axios'
  import { snackbarStore } from "../stores/snackbar";
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
      agregarCarrito(e) {
        e.stopPropagation();

        let carrito = JSON.parse(localStorage.getItem('carrito')) || []

        const exist = carrito.find(item => item.id === this.product.id)
        if (exist) {
          exist.quantity++
          localStorage.setItem('carrito', JSON.stringify(carrito))
          const snackbar = snackbarStore();
          snackbar.setSnackbar({
            show: true,
            message: 'Producto agregado al carrito'
          });
        } else {
          carrito.push({
            id: this.product.id,
            name: this.product.name,
            price: this.product.price,
            imageUrl: this.product.imageUrl,
            quantity: 1
          });
        }

        localStorage.setItem('carrito', JSON.stringify(carrito))
        const snackbar = snackbarStore();
        snackbar.setSnackbar({
          show: true,
          message: 'Producto agregado al carrito'
        });
      },
      async getProductos(id) {
        const url = `https://eshop-deve.herokuapp.com/api/v2/products/${id}`
        
        const { data, error } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })

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
  .loader-info {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .sheet-product {
    margin: auto;
  }

  .v-main {
    align-content: center;
  }

  .img-side {
    padding: 30px;
    max-height: 100%;
    max-width: 100%;

    @media screen and (max-width: 960px){
      margin: 20px 150px 0px 150px;
    }
  }

  .product-row {
    background-color: #ffffff;
  }

main {
  .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 200px;
    gap: 20px;
    border-radius: 20px;
    margin: 20px 20px;
  }

  .product-side {
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 960px){
      margin: 0px 0px 20px 0px;
    }
  }
}
</style>