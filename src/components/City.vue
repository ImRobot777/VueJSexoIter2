<script setup>
  import {ref} from 'vue'

  const city = ref({
    name: 'SEOUL',
    weather: 'Peu nuageux',
    temperature: 20.55,
    updatedAt: new Date()
  })
</script>

<template>

  <h2>{{city.name}}</h2>
  <ul>
    <li>{{city.weather}}</li>
    <li>{{city.temperature}}°C</li>
    <li>{{city.updatedAt.toLocaleString()}}</li>
  </ul>

</template>

<style scoped>

</style>