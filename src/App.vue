<script setup>
import {ref} from 'vue'
import CitiesList from './views/CitiesList.vue'

/*
const h1Title =  ref('Hello World!')
const h2Title =  ref("What's UP !")
const inputText = ref("Ecrire ici")
const isCheckBoxChecked = ref(false)
const isImageVisible = ref(false)
const mettreAJour = () => {
  h1Title.value = inputText.value;
}
*/
const onListClick = () => {
  alert("YOOOOOOOO !")
}

</script>

<!--template>
  <h1 :class="{redClass: isCheckBoxChecked}"  >{{h1Title}}</h1>
  <input v-model="isCheckBoxChecked" type="checkbox" />
  <h2 :class="{redClass: isCheckBoxChecked}"  >{{h2Title}}</h2>
  <input v-model="inputText" /> <button  @click="mettreAJour">MAJ TITRE</button>
  <img v-show="isImageVisible" src="https://vuejs.org/images/logo.png" alt="Logo Vue" width="100" />
  <input v-model="isImageVisible" type="checkbox" />

  <a href="#">Voir les villes</a>
</template-->

<template>
  <CitiesList />
  <a href="#" @click.prevent="onListClick">Voir les villes</a>
</template>

<style>
.redClass {
  color: red;
}
</style>