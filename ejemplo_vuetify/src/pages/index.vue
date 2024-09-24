<template>
  <v-app>
    <v-main>
      <v-container>
        <div v-if="loading" class="d-flex justify-center align-center" style="height: 500px;">
          <v-progress-circular
            indeterminate
            color="white"
            size="64"
          ></v-progress-circular>
        </div>
        <v-img
          :src="imageUrl"
          max-height="800px"
          max-width="1200px"
          @load="loading = false"
        ></v-img>
        <v-btn @click="nextImage" color="black" class="mt-5" margin-right="16px">Siguiente Imagen</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
const loading = ref(false)
const imageUrl = ref('https://picsum.photos/1200/500')

const nextImage = () => { // para siguiente imagen
  loading.value = true
  imageUrl.value = `https://picsum.photos/1200/500?random=${Math.random()}`
}
</script>