<template>
  <div>
    <div v-if="$fetchState.pending">
      Cargando...
    </div>
    <div v-else-if="$fetchState.error">
      <button @click="$fetch()">Reintentar</button>
    </div>
    <div v-for="character in characters.results" :key="character.id">
      <h3>{{ character.name }}</h3>
    </div>
    <div class="mt-1' inline-flex bg-red-100">
      <button @click="goToPage" class="mr-2">Atras</button>
      <button @click="goToPage">Siguiente</button>
    </div>
  </div>
</template>

<script>
import { ref, useFetch, useContext } from '@nuxtjs/composition-api'

export default {
  name: 'list',
  setup () {
    const characters = ref({})
    const { $axios } = useContext()

    useFetch(async () => {
      characters.value = await $axios.$get('character')
    })

    return {
      characters
    }
  },
  methods: {
    goToPage (e) {
      console.log(e)
    }
  }
}
</script>
