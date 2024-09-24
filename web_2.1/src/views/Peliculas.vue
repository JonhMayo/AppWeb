<template>
    <div>
      <h2 v-if="seleccionado"> Película: {{ seleccionado.movie }}</h2>
      <Lista :peliculas="peliculas" @nombre_pelicula="funcion_nombre" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Lista from '../components/Lista.vue'; // Importar el componente
  
  //estado reactivo para las películas
  const peliculas = ref([]);
  const seleccionado = ref(null);
  
  function funcion_nombre(payload) {
    seleccionado.value = payload;
  }
  
  onMounted(async () => {
    try {
      const response = await fetch('https://dummyapi.online/api/movies');
      const data = await response.json();
      peliculas.value = data;
    } catch (error) {
      console.error('Error fetching peliculas:', error);
    }
  });
  </script>