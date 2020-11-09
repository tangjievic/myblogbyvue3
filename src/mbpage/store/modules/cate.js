const state = {
    catelist: []
}
const mutations = {
    setCateList(state = state, data) {
        state.catelist = data
    }
}
const actions = {
    setCateList: ({ commit }, data) => commit('setCateList', data)
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}