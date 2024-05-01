<template>
  <div>
    <div v-if="products.length === 0">
      No hay productos
    </div>
    <v-row else>
      <v-col v-for="producto in products" :key="producto.id" class="carrito-items" >
        <v-img class="carrito-img" :src="producto.images[0].url" cover/>
        <div class="product-info">
          <h3>{{ producto.name }}</h3>
          <h4>${{ producto.price }}</h4>
          <v-card-text>
            <v-text-field
              prepend-icon="mdi-minus"
              append-icon="mdi-plus"
              density="compact"
              variant="solo"
              hide-details
              :model-value= "quantities"
              single-line
              @click:append="qtyIncre"
              @click:prepend="qtyDecre"
              v-if="producto.id > 0"
            ></v-text-field>
          </v-card-text>
        </div>
        <div class="text-center">
          <v-btn 
            class="delete-btn on-hover"
            @click="deleteCarrito(producto.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-divider color="info"></v-divider>
        </div>
      </v-col>
    </v-row>
    <v-dialog max-width="500">
      
    <template v-slot:activator="{ props: activatorProps }">
      <div class="realizar-compra">
        <v-btn
          v-bind="activatorProps"
          color="surface-variant"
          text="Realizar Compra"
          variant="flat"
        ></v-btn>
      </div>
    </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Compra Exitosa">
      <v-card-text>
        ¡La compra se realizó con éxito!
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text="Entendido"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
  </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    quantities: 1,
  }),
  computed: {
    quantity: { get () {
      return this.quantity
    }},
  },
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    qtyIncre(id) {
      this.quantities++;
    },
    qtyDecre(id) {
      if (this.quantities > 0) {
            this.quantities--;
        }
    },
    deleteCarrito(id) {
      this.$emit('delete', id)
    }
  },
}
</script>

<style>
.carrito-items {
  flex-wrap: wrap;
  min-width: fit-content;
}

.carrito-img {
  width: 200px;
  height: 200px;
}

.delete-icon {
  color: white;
}

.delete-btn {
  width: -webkit-fill-available;
}

.on-hover:hover {
  background-color: red;
  color: white;
}

.product-info {
  text-align: center;
}

.product-info h3{
  font-weight: normal;
}

.product-info h4{
  font-weight: normal;
}

.realizar-compra {
  text-align: center;
  padding: 10px;
  background-color: white;
  width: -webkit-fill-available;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>