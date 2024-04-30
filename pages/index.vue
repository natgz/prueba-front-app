<template>
  <div>
    <img src="/online-shop-banner.jpg" alt="banner" class="w-full" />
  </div>

  <v-row >
    <Card v-for="product in products" :key="product.id"/>
  </v-row >
</template>

<script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Product 1',
            price: 100,
            description: 'This is a product description',
            image: '/product-1.jpg'
          },
          {
            id: 2,
            name: 'Product 2',
            price: 200,
            description: 'This is a product description',
            image: '/product-2.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            description: 'This is a product description',
            image: '/product-3.jpg'
          }
        ]
      }
    }
  }
</script>

<style>
  /* main {
    .product-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  } */
</style>