/*
 * @Author: lijt 15226153903@163.com
 * @Date: 2022-06-18 18:23:26
 * @LastEditors: lijt
 * @LastEditTime: 2022-08-24 17:05:53
 * @FilePath: \proxy_vue\src\element\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Message,
  Button,
  Divider,
  Input,
  Icon,
  Tooltip,
  Col,
  Upload,
  Dialog,
  Form,
  FormItem,
  Switch,
  ColorPicker
} from 'element-ui'

const coms = [
  Message,
  Button,
  Divider,
  Input,
  Icon,
  Tooltip,
  Col,
  Upload,
  Dialog,
  Form,
  FormItem,
  Switch,
  ColorPicker
]

export default {
  install(Vue, options) {
    coms.map(c => {
      Vue.component(c.name, c)
    })
  }
}