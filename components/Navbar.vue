<template>
  <!-- navbar start -->
  <v-app-bar>
    <!-- toggle button for the drawer -->
    <v-btn icon @click="drawer = !drawer">
      <v-icon>mdi-cart-outline</v-icon>
    </v-btn>
    <v-toolbar-title>My App</v-toolbar-title>
  </v-app-bar>

  <!-- drawer -->
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
  </v-navigation-drawer>
  <!-- navbar end -->
</template>

<script>
export default {
  data() {
    return {
      drawer: false // State to control the visibility of the drawer
    };
  }
};
</script>

<style>
/* Add any custom styles here */
</style>
