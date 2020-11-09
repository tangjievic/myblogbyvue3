import { getUserMsg } from '../../apilist'
const state = {
    username: '',
    nickname: '',
    email: '',
    level: 0,
    id: -1,
    profession: "",
    signature: '',
    score: 0,
    scoretime: 0
}
const mutations = {
    setUserMsg(state = state, data) {
        state.catelist = data
    }
}
const actions = {
    setUserMsg() {
        getUserMsg().then(res => {
            console.log(res)
        }).catch(res => {
            console.log(res)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}