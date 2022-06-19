import {
  Message,
  Button,
  Divider,
  Input
} from 'element-ui'

const coms = [
  Message,
  Button,
  Divider,
  Input
]

export default {
  install(Vue, options) {
    coms.map(c => {
      Vue.component(c.name, c)
    })
  }
}