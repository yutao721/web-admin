import { createStore } from 'vuex'
import app from './modules/app'
import user from './modules/user'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import settings from './modules/settings'
import assembly from './modules/assembly'
import getters from './getters'

const store = createStore({
  modules: {
    app,
    user,
    tagsView,
    permission,
    settings,
    assembly
  },
  getters
});


export default store
