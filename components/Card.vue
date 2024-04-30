<template>
  <v-col cols="12" md="3" sm="6">
    <v-card
      max-width="344"
      hover
    >
      <v-card-item>
        <v-img class="img-card"
          :src="imageUrl"
  
        ></v-img>
        <v-card-title>
          {{ product.name }}
        </v-card-title>
  
        <v-card-subtitle>
          {{ product.price  }}
        </v-card-subtitle>
      </v-card-item>
  
      <v-card-text>
        {{ product.description }}
      </v-card-text>
      
      <v-card-item class="add-cart">
        <v-btn
          variant="outlined"
          text="Agregar a carrito"
          @click="agregarCarrito" />
      </v-card-item>
    </v-card>
  </v-col>
</template>

<script>
import { snackbarStore } from "../stores/snackbar";

export default {
  data() {
    return {
      imageUrl: this.product.images[0].url,
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    },
  },
  methods: {
    agregarCarrito(e) {
      e.stopPropagation();

      let carrito = JSON.parse(localStorage.getItem('carrito')) || []
      carrito.push(this.product)
      localStorage.setItem('carrito', JSON.stringify(carrito))

      const snackbar = snackbarStore();
      snackbar.setSnackbar({
        show: true,
        message: 'Producto agregado al carrito'
      });
    },

  }
}
</script>

<style>
  .add-cart {
    justify-content: center;
    height: fit-content;
  }

  .img-card {
    height: 300px;
    object-fit: cover;
  }

</style>