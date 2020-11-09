import { createStore } from 'vuex';
import cate from './modules/cate';
import user from './modules/user';
const state = {}
const actions = {}
const getters = {}
const mutations = {}

export default createStore({
    state,
    mutations,
    getters,
    actions,
    modules: {
        cate,
        user
    }
})