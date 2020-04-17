export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('projects/index')
    await dispatch('contactOptions/index')
  }
}
