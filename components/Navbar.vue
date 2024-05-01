<template>

  <v-app-bar color="teal" :elevation="3">
    <template v-slot:append>
      <v-btn 
        icon @click="drawer = !drawer">
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </template>
    <v-toolbar-title class="my-shop" @click="backHome()" >My Shop</v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer
    color="teal-lighten-5"
    location="right" 
    v-model="drawer" 
    temporary >
    <v-list>
      <v-list-item class="carrito-title">
        <h2>Carrito</h2>
        <v-divider :thickness="3"></v-divider>
      </v-list-item>
    </v-list>
    <Carrito 
      class="carrito"
      :products="productsCarrito"
      @increase="increaseProductoCarrito"
      @decrease="decreaseProductoCarrito"
      @delete="deleteProductoCarrito" />
  </v-navigation-drawer>

</template>

<script>
  import Carrito from './Carrito.vue';
  import { snackbarStore } from "../stores/snackbar";
  const snackStore = snackbarStore();
  export default {
    components: {
      Carrito
    },
    data() {
      return {
        drawer: false,
        productsCarrito: []
      };
    },
    watch: {
      drawer(open) {
        if (open) {
          this.productsCarrito = JSON.parse(localStorage.getItem('carrito')) || []
        }
      }
    },
    methods: {
      increaseProductoCarrito(id) {
        const product = this.productsCarrito.find(product => product.id === id)
        product.quantity++
        localStorage.setItem('carrito', JSON.stringify(this.productsCarrito))
      },
      decreaseProductoCarrito(id) {
        const product = this.productsCarrito.find(product => product.id === id)
        if (product.quantity > 1) {
          product.quantity--
          localStorage.setItem('carrito', JSON.stringify(this.productsCarrito))
        } else {
          this.deleteProductoCarrito(id)
        }
      },
      deleteProductoCarrito(id) {
        this.productsCarrito = this.productsCarrito.filter(product => product.id !== id)
        localStorage.setItem('carrito', JSON.stringify(this.productsCarrito))

        snackStore.setSnackbar({
          show: true,
          message: 'Producto eliminado del carrito'
        });
      },
      backHome() {
        this.$router.push('/')
      }
    }
  };
</script>

<style>
  .carrito {
    padding: 20px;
    margin-bottom: 60px;
  }

  .carrito-title h2 {
    font-size: 30px;
    font-weight: normal;
  }

  .my-shop {
    cursor: pointer;
    text-shadow: 2px 2px 3px #000000;
  }
</style>
