<template>
  <v-col cols="12" lg="3" md="4" sm="6" xs="12">
    <v-card min-height="500" hover >

      <v-card-item class="card-item">
        <v-img class="img-card" :src="imageUrl" ></v-img>
        <br>
        <v-card-title>
          {{ product.name }}
        </v-card-title>
        <v-card-subtitle>
          Precio: ${{ product.price  }}
        </v-card-subtitle>
        <v-card-text>
          {{ product.description || 'No hay descripción'}}
        </v-card-text>
      </v-card-item>
      
      <v-card-item class="add-cart">
        <v-btn
          variant="tonal"
          color="#009688"
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
    }
  }
</script>

<style>
  .add-cart {
    justify-content: center;
    height: fit-content;
  }

  .img-card {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }

  .card-item {
    text-align: center;
  }

</style>