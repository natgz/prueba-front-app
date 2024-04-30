<template>
  <v-app-bar>
    <v-btn icon @click="drawer = !drawer">
      <v-icon>mdi-cart-outline</v-icon>
    </v-btn>
    <v-toolbar-title @click="backHome()">My App</v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item>
    </v-list>

    <Carrito
      :products="productsCarrito"
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
      deleteProductoCarrito(id) {
        console.log('test1')
        this.productsCarrito = this.productsCarrito.filter(product => product.id !== id)
        console.log('test2')
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
/* Add any custom styles here */
</style>
