import {
  Message,
  Button,
  Divider,
  Input,
  Icon,
  Tooltip,
  Col,
} from 'element-ui'

const coms = [
  Message,
  Button,
  Divider,
  Input,
  Icon,
  Tooltip,
  Col
]

export default {
  install(Vue, options) {
    coms.map(c => {
      Vue.component(c.name, c)
    })
  }
}