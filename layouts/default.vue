<template>
  <v-app>
    <Navbar />
    <v-main>
      <slot />
    </v-main>
    <Footer />
    <div v-if="snackbar?.show" class="text-center ma-2">
      <v-snackbar
        v-model="snackbar"
      >
        {{ snackbar?.message }}

        <template v-slot:actions>
          <v-btn
            color="pink"
            variant="text"
            @click="closeSnackbar()"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import { snackbarStore } from "../stores/snackbar";
  const snackStore = snackbarStore();

  export default {
    components: {
      Navbar,
      Footer
    },
    methods: {
      closeSnackbar() {
        snackStore.setSnackbar({
          show: false,
          message: ''
        });
      }
    },
    computed: {
      snackbar: () => {
        return snackStore.snackbar
      }
    }
  }

</script>