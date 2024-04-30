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
          {{ this.product.name }}
        </v-card-title>
  
        <v-card-subtitle>
          {{ this.product.price  }}
        </v-card-subtitle>
      </v-card-item>
  
      <v-card-text>
        {{ this.product.description }}
      </v-card-text>
      
      <v-card-item class="add-cart">
        <v-btn variant="outlined" text="Agregar a carrito"></v-btn>
      </v-card-item>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: this.product.images[0].url,
    }
  },
  props: ['product'],
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