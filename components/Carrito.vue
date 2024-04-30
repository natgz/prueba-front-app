<template>
  <div>
    <div v-if="products.length === 0">
      No hay productos
    </div>
    <v-row else>
      <div v-for="producto in products">
        <div>
          <v-img :src="producto.images[0].url" />
          <v-title>{{ producto.name }}</v-title>
          <v-subtitle>{{ producto.price }}</v-subtitle>
          <v-text>{{ producto.description }}</v-text>
        </div>
        <button @click="deleteCarrito(producto.id)">Borrar</button>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    deleteCarrito(id) {
      this.$emit('delete', id)
    }
  },
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