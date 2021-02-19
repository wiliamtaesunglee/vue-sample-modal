<template>
  <div id="app">
    <ImageLeadCapture />
  </div>
</template>

<script>
import ImageLeadCapture from './components/ImageLeadCapture.vue'

export default {
  name: 'app',
  components: {
    ImageLeadCapture
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body, ul, li, h1, h2, p {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

body {
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  text-decoration: block;
}
#app {
  margin: 0 auto;
}
</style>
