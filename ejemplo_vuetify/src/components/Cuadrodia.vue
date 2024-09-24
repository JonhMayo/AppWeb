<template>
  <div v-if="pelicula">
    <v-sheet class="mx-auto" width="300">
    <v-form  fast-fail @submit.prevent="editarInformacion" class="form-container">
      
      <div class="form-group">
      <v-text-field
        v-model="peliculaEditada.movie"
        label="Título"
        required
      ></v-text-field>
      </div>

      <div class="form-group">
      <v-text-field
        v-model="peliculaEditada.rating"
        label="Rating"
        required
      ></v-text-field>
      </div>

      <div class="form-group">
      <v-text-field
        v-model="peliculaEditada.imdb_url"
        label="IMDB"
        required
      ></v-text-field>
      </div>
      
      <div class="form-actions">
        <v-btn class="mt-2" type="submit" block>Guardar Cambios</v-btn>
      </div>
    </v-form>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  pelicula: {
    type: Object,
    required: true,
  }
});

const emit = defineEmits(['editar_informacion']);

const peliculaEditada = ref({ ...props.pelicula });

watch(() => props.pelicula, (newPelicula) => {
  peliculaEditada.value = { ...newPelicula };
});

function editarInformacion() {
  console.log("Datos a emitir:", peliculaEditada.value);

  emit('editar_informacion', peliculaEditada.value);
}
</script>


<style scoped>
  .form-container {
    background-color: black;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    height: auto; 
    margin: auto;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-group input {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    width: 100%;
  }

  .form-actions {
    display: flex;
    justify-content: center; /* Centrar el botón */
  }

  .form-actions button {
    background-color: #007bff; /* Color del botón */
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s; /* Suaviza la transición */
  }

  .form-actions button:hover {
    background-color: #0056b3; /* Color al pasar el mouse */
  }

</style>