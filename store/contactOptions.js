const state = () => ({
  contactOptions: {},
});

const mutations = {
  setContactOptions(state, payload) {
    state.contactOptions = {};
    for (const obj of payload) {
      state.contactOptions[obj.slug] = obj;
    }
  },
};

const actions = {
  index({ commit }) {
    return new Promise((resolve, reject) => {
      const files = require.context(
        "~/assets/content/contact_options/",
        false,
        /\.json$/
      );
      const contactOptions = files.keys().map((key) => {
        const res = files(key);
        res.slug = key.slice(2, -5);
        return res;
      });
      commit("setContactOptions", contactOptions);
      resolve(true);
    });
  },
};

const getters = {
  contactOptions: (state) =>
    Object.values(state.contactOptions).sort((o1, o2) => o1.order > o2.order),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
