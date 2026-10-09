<script setup>
import {ref} from 'vue'
import City from '@/components/City.vue'

const h1Title = 'Météo - Liste des villes'

const toto = "dfsdfsdf"

const citiesMeteo = [
  {id: 1, name: 'SEOUL', weather: 'Ensoleillé', temperature: 22.0, updatedAt: new Date()},
  {id: 2, name: 'TOKYO', weather: 'Peu nuageux', temperature: 19.5, updatedAt: new Date()}
]

</script>

<template>
  <h1>{{ h1Title }}</h1>

  <City
      v-for="cityData in citiesMeteo"
      :key="cityData.id"
      :name="cityData.name"
      :weather="cityData.weather"
      :temperature="cityData.temperature"
      :updatedAt="cityData.updatedAt"
  />


  <!--button  @click="displayAlert(toto)">TEST</button-->
</template>

<style scoped>
h1 {
  color: green;
}
</style>