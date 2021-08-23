const SET_CHARACTERS = 'SET_CHARACTERS'

export const store = () => ({
  charactersData: {}
})

export const actions = {
  async getCharacters ({ commit }) {
    const characters = await this.$axios.$get('character')
    commit(SET_CHARACTERS, characters)
  }
}

export const mutations = {
  [SET_CHARACTERS] (state, payload) {
    state.charactersData = payload
  }
}