import {
  Message,
  Button,
  Divider,
  Input,
  Icon
} from 'element-ui'

const coms = [
  Message,
  Button,
  Divider,
  Input,
  Icon
]

export default {
  install(Vue, options) {
    coms.map(c => {
      Vue.component(c.name, c)
    })
  }
}