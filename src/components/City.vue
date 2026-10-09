<script setup>
import {ref} from 'vue'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr' // Pour avoir les textes en français
// Activation du plugin et passage en français
dayjs.extend(relativeTime)
dayjs.locale('fr')

defineProps({
  name: String,
  weather: String,
  temperature: Number,
  updatedAt: Date
})
</script>

<template>

  <h2>{{ name }}</h2>
  <ul>
    <li>{{ weather }}</li>
    <li>{{ temperature }}°C</li>
    <li>{{ dayjs(updatedAt).fromNow() }}</li>
  </ul>

  <!--ON DANS CITY-->

</template>

<style scoped>

</style>