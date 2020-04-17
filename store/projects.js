const state = () => ({
  projects: {}
})

const mutations = {
  setProjects (state, payload) {
    state.projects = {}
    for (const obj of payload) {
      state.projects[obj.slug] = obj
    }
  }
}

const actions = {
  index ({ commit }) {
    return new Promise((resolve, reject) => {
      const files = require.context('~/assets/content/projects/', false, /\.json$/)
      const projects = files.keys().map((key) => {
        const res = files(key)
        res.slug = key.slice(2, -5)
        return res
      })
      commit('setProjects', projects)
      resolve(true)
    })
  }
}

const getters = {
  projects: state => Object.values(state.projects)
}

export default {
  state,
  mutations,
  actions,
  getters
}
