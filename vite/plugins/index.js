import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import createSetupExtend from './setup-extend'
import createAutoImport from './auto-import'
import createSvgIcon from './svg-icon'
import createCompression from './compression'
import createViteMockServe from './mock'

export default function createVitePlugins(viteEnv, isBuild = false) {
  const { VITE_USE_MOCK } = viteEnv;

  const vitePlugins = [
    vue(),
    vueJsx(),
    createSetupExtend
  ]
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createSvgIcon(isBuild))
  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(createViteMockServe(isBuild))
  isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
