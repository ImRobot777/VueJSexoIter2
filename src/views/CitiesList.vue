<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import City from '@/components/City.vue'

const h1Title = "Cities List"

// 1. Data state : empty array waiting for server payload
const citiesMeteo = ref([])

// 2. Loading state : true while the network request is pending
const loading = ref(false)

// 3. Error state : stores error message if request fails
const error = ref(null)


function sleep(ms) {
  // 1. On fabrique une Promesse. JavaScript nous donne une fonction magique nommée "resolve"
  return new Promise((resolve) => {
    // 2. On lance un minuteur. Quand les millisecondes sont écoulées, on appelle "resolve"
    setTimeout(() => {
      resolve() // "Hé, le temps est écoulé, la promesse est tenu, on ne retourne rien ici dans resolve mais pas la peine !"
    }, ms)
  })
}

onMounted(async () => {
  loading.value = true

  try {
    await sleep(800)
    const response = await axios.get('/cities.json')
    if (response.data == undefined || response.data.length <= 0) {
      error.value = "Impossible de charger les données météo : Code 0"
    }
    else{
      citiesMeteo.value = response.data
    }
  }
  catch (err){
    error.value = "Impossible de charger les données météo : " + err.message
  }
  finally {
    loading.value = false
  }

})

</script>

<template>
  <h1>{{ h1Title }}</h1>

  <!-- State 1 : Loading feedback -->
  <p v-if="loading">Chargement des données en cours...</p>

  <!-- State 2 : Error feedback in red -->
  <p v-else-if="error" style="color: red;">{{ error }}</p>

  <!-- State 3 : Success rendering -->
  <div v-else>
    <City
        v-for="city in citiesMeteo"
        :key="city.id"
        :name="city.name"
        :weather="city.weather"
        :temperature="city.temperature"
        :updatedAt="new Date(city.updatedAt)"
    />
  </div>

  <!--button  @click="displayAlert(toto)">TEST</button-->
</template>

<style scoped>
h1 {
  color: green;
}
</style>