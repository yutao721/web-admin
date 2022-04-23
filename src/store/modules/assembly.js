const assembly = {
  state: {
    global: {}, //当前全局
    stageSetData: {
      name: '',
      director: '',
      trigger: '',
      confirm: true,
      notify: '',
      notifyType: []
    }, //当前阶段
    steps: {} //当前步骤
  },

  mutations: {
    SET_STAGE: (state, stage) => {
      state.stageSetData = stage
    }
  },

  actions: {
    SetStage({ commit }, stage) {
      commit('SET_STAGE', stage)
    }
  }
}
export default assembly
