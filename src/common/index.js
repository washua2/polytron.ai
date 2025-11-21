import SvgIcon from './SvgIcon.vue' // svg图标

const allGloablComponent = {SvgIcon}

export default {
  install(app) {
    Object.keys(allGloablComponent).forEach((key) => {
      app.component(key, allGloablComponent[key])
    })
  },
}