<template>

  <v-footer class="bg-teal-darken-3">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        class="mx-2"
        color="white"
        rounded="xl"
        variant="text"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>My Shop</strong>
      </v-col>
    </v-row>
  </v-footer>

</template>

<script>
  export default {
    data: () => ({
      links: [
        'Homepage',
        'Carrito',
        'Servicios',
        'Contactanos',
      ],
    }),
  }
</script>

<style lang="scss" scoped>

</style>