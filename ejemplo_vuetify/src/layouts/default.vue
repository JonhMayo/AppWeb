<template>
  <v-app>
    <v-app-bar title="Vuetify">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>

    <v-navigation-drawer class="drawer-background" v-model="drawer" width="150" theme="dark" temporary>
      <v-list-item title="Páginas"></v-list-item>
      <v-divider></v-divider>
      <v-list-item link to="/" title="Inicio"></v-list-item>
      <v-list-item link to="/pagina2" title="Cactus"></v-list-item>
      <v-list-item link to="/pagina3" title="Peliculas"></v-list-item>
      <v-list-item link to="/Inicio" title="Estudiantes"></v-list-item>
    </v-navigation-drawer>

    <v-main>

      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
const drawer = ref(false);
</script>

<style scoped>
.drawer-background {
  background-image: url('/src/assets/galaxia.png');
  background-size: cover;
  background-repeat: no-repeat; 
  background-position: center;
  background-attachment: fixed; 
}
</style>
