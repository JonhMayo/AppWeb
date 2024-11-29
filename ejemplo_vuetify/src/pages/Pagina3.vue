<template>
  <div>
    <div v-if="mostrarFormulario" class="modal">
      <Cuadro
        :pelicula="seleccionado" 
        @editar_informacion="guardarCambios" 
      />
    </div>
    <h2 v-if="seleccionado"> Película: {{ seleccionado.movie }}</h2>
    <Lista :peliculas="peliculas" @nombre_pelicula="funcion_nombre" @editar="mostrarCuadro" @borrar="eliminar"/>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Lista from '../components/Lista.vue'; // Importar el componente
import Cuadro from '../components/Cuadrodia.vue';
//estado reactivo para las películas
const peliculas = ref([]);
const seleccionado = ref(null);
const mostrarFormulario = ref(false);

function funcion_nombre(payload) {
  seleccionado.value = payload;
}

function mostrarCuadro(pelicula) {
  seleccionado.value = pelicula;
  mostrarFormulario.value = true;
}

function guardarCambios(peliculaEditada) {
  console.log("Película editada:", peliculaEditada);
  const index = peliculas.value.findIndex(p => p.id === peliculaEditada.id);
  if (index !== -1) {
    peliculas.value[index] = { ...peliculaEditada };
    console.log("Se han guardado los cambios");
  } else {
    console.error("No se encontró la película");
  }
  mostrarFormulario.value = false;
}

function eliminar(pelicula){
  const confirmacion = confirm(`¿Está seguro de eliminar la película: "${pelicula.movie}"?`);
  if (confirmacion) {
    console.log("Película a borrar:", pelicula.movie);
    peliculas.value = peliculas.value.filter(p => p.movie !== pelicula.movie);
  } else {
    console.log("Eliminación cancelada.");
  }
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