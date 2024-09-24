<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Título</th>
        <th>Calificación</th>
        <th>IMDB</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pelicula in peliculas" :key="pelicula.id">
        <td>{{ pelicula.id }}</td>
        <td @click="nombre_pelicula(pelicula)" style="cursor: pointer;">{{ pelicula.movie }}</td>
        <td>{{ pelicula.rating }}</td>
        <td>
          <a :href="pelicula.imdb_url" target="_blank">{{ pelicula.imdb_url }}</a>
        </td>
        <td class="d-flex fluid">
          <v-btn icon="mdi-pencil" @click="$emit('editar', pelicula)"></v-btn>
          <v-btn icon="mdi-delete" @click="borrar(pelicula)"></v-btn>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const emit = defineEmits(['nombre_pelicula','editar','borrar']);


function nombre_pelicula(pelicula) {
  const payload = {
    movie: pelicula.movie
  };
  emit('nombre_pelicula', payload); // Emitir el payload completo
}

function editar(pelicula) {
  emit('editar', pelicula);
}

function borrar(pelicula) {
  emit('borrar', pelicula);
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

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: black;
}
</style>