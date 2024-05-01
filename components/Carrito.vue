<template>
  <div>

    <div v-if="products.length === 0">
      No hay productos
    </div>

    <v-row else>
      <v-col v-for="producto in products" :key="producto.id" class="carrito-items" >
        <v-img class="carrito-img" :src="producto.imageUrl" cover/>
        <div class="product-info">
          <h4>{{ producto.name }}</h4>
          <h5>${{ producto.price * producto.quantity }}</h5>
        </div>
        <div>
          <v-card-text>
            <v-text-field
              prepend-icon="mdi-minus"
              append-icon="mdi-plus"
              density="compact"
              variant="solo"
              hide-details
              :model-value="producto.quantity"
              single-line
              @click:append="increase(producto.id)"
              @click:prepend="decrease(producto.id)"
              v-if="producto.id > 0"
            ></v-text-field>
          </v-card-text>
          <v-btn 
            class="delete-btn on-hover"
            @click="deleteCarrito(producto.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-card class="realizar-compra elevation-24">
      <v-btn
        @click="checkout()"
        :color="products.length === 0 ? '#CFD8DC' : '#009688'"
        text="Realizar Compra"
        variant="flat"
        :readonly="products.length === 0"
      ></v-btn>
    </v-card>

    <v-dialog v-model="dialog" max-width="290">
      <v-card title="Compra Exitosa">
        <v-card-text>
          ¡La compra se realizó con éxito!
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Entendido" @click="dialog = false" />
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false
      }
    },
    props: {
      products: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      increase(id) {
        this.$emit('increase', id);
      },
      decrease(id) {
        this.$emit('decrease', id);
      },
      deleteCarrito(id) {
        this.$emit('delete', id);
      },
      checkout() {
        if (this.products.length > 0) {
          this.dialog = true;
        } else {
          alert('No hay productos en el carrito');
        }
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
  max-width: 100px;
  height: 50px;
  margin: auto;
  border-radius: 5px;
}

.product-info {
  text-align: center;
  h4 {
    font-weight: normal;
  }
  h5 {
    font-weight: normal;
  }
}

.delete-btn {
  width: -webkit-fill-available;
}

.on-hover:hover {
  background-color: red;
  color: white;
}

.realizar-compra {
  text-align: center;
  padding: 10px;
  background-color: #e2fffb;
  width: -webkit-fill-available;
  position: absolute;
  bottom: 0;
  left: 0;
}

</style>