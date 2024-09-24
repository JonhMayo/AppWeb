<template>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Calificación</th>
          <th>IMDB</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pelicula in peliculas" :key="pelicula.id" @click="nombre_pelicula(pelicula)" style="cursor: pointer;">
          <td>{{ pelicula.movie }}</td>
          <td>{{ pelicula.rating }}</td>
          <td>
            <a :href="pelicula.imdb_url" target="_blank">{{ pelicula.imdb_url }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const emit = defineEmits(['nombre_pelicula']);
  
  
  function nombre_pelicula(pelicula) {
    const payload = {
      movie: pelicula.movie
    };
    emit('nombre_pelicula', payload); // Emitir el payload completo
  }
  
  //props que se recibirán en el componente
  const props = defineProps({
    peliculas: {
      type: Array,
      required: true,
    },
  });
  
  
  </script>
  <style>
  /* Agrega algunos estilos para la tabla si es necesario */
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: black;
  }
  </style>
  