<!--
 * @Author: lijt
 * @Date: 2022-08-25 14:01:32
 * @LastEditors: lijt
 * @LastEditTime: 2022-08-25 15:21:37
 * @FilePath: \proxy_vue\src\views\eCharts\map\index.vue
 * @Description: 
-->
<template>
  <div ref="main" class="map" @dblclick="revertMap"></div>
</template>

<script>
// 中国地图
import chianJson from '@/utils/map/China.json'
// 各省份对应的矢量数据地址
import { getProvinceMapInfo } from '@/utils/map/map-utils'
export default {
  // 组件名称
  name: 'index',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {}
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    initChart() {
      // init第一个参数 ref定义的的，第二个参数主题
      this.chart = this.$echarts.init(this.$refs.main, 'chalk')
      this.$echarts.registerMap("chain", chianJson)
      this.chart.setOption({
        title: {
          text: '中国地图',
          left: 20,
          top: 20,
        },
        geo: {
          type: 'map', // 类型
          map: 'chain',
          top: '5%', // 距离顶部
          bottom: '5%', // 距离底部
          itemStyle: { // 地图区域的样式。
            areaColor: '#2E72BF', // 地图整体区域的颜色
            borderColor: '#333', //地图边界线的颜色
          },
        },
        // 自定义提示框的内容
        tooltip: {
          trigger: 'item',
          // 自定义提示框的内容
          formatter(params) {
            return (
              "<div>" +
              params.data.name +
              " <br> " +
              params.seriesName +
              "</div>"
            );
          }
        },
        // 散点图
        series: [
          {
            type: 'effectScatter',  //特效散点图
            rippleEffect: { // 涟漪效果
              scale: 5,
              brushType: 'stroke'
            },
            coordinateSystem: 'geo', // 使用坐标
            name: "一线城市",
            data: [
              { name: "北京", value: [116.46, 39.92] },
              { name: "上海", value: [121.48, 31.22] },
              { name: "广州", value: [113.23, 23.16] },
              { name: "深圳", value: [114.07, 22.62] },
            ]
          },
          {
            type: 'effectScatter',  //特效散点图
            rippleEffect: { // 涟漪效果
              scale: 5,
              brushType: 'stroke'
            },
            coordinateSystem: 'geo', // 使用坐标
            name: "二线城市",
            data: [
              { name: "南京", value: [118.78, 32.04] },
              { name: "杭州", value: [120.19, 30.26] },
              { name: "成都", value: [104.06, 30.67] },
              { name: "武汉", value: [114.31, 30.52] },
            ]
          },
          {
            type: 'effectScatter',  //特效散点图
            rippleEffect: { // 涟漪效果
              scale: 5,
              brushType: 'stroke'
            },
            coordinateSystem: 'geo', // 使用坐标
            name: "三线城市",
            data: [
              { name: "拉萨", value: [91.11, 29.97] },
              { name: "乌鲁木齐", value: [87.68, 43.77] },
              { name: "西宁", value: [101.74, 36.56] },
              { name: "兰州", value: [103.73, 36.03] },
            ]
          },
        ],
        legend: { // 图例组件
          left: '5%',
          bottom: '5%',
          orient: 'vertical', // 竖着排列
          data: ['一线城市', '二线城市', '三线城市']
        },
      })
      this.chart.on('click', async arg => {
        const provinceInfo = getProvinceMapInfo(arg.name)
        console.log("provinceInfo", provinceInfo)
        // 如果存在key执行下面内容
        if (provinceInfo.key !== undefined) {
          // 获取static下面的json数据
          // const res = await axios.get("http://192.168.72.180:8081" + provinceInfo.path)
          this.$echarts.registerMap(provinceInfo.key, provinceInfo.data)
          const changeOption = {
            geo: {
              map: provinceInfo.key
            }
          }
          this.chart.setOption(changeOption)
        }
      })

    },
    // 当浏览器的大小发生变化的时候，会调用此方法来完成适配
    screenAdapter() {
      // 获取自适应大小
      const titleFontSize = this.$refs.main.offsetWidth / 100 * 3.6
      console.log("titleFontSize", titleFontSize)
      // 自适应配置
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize // 自适应字体大小
          }
        },
        legend: { // 图例组件
          itemWidth: titleFontSize / 2,
          itemHeight: titleFontSize / 2,
          itemGap: titleFontSize / 2,
          textStyle: {
            fontSize: titleFontSize / 2 // 自适应字体大小
          }
        },
      }
      this.chart.setOption(adapterOption)
      // 自适应
      this.chart.resize()
    },
    // 回退
    revertMap() {
      const revertOption = {
        geo: {
          map: 'chain'
        }
      }
      this.chart.setOption(revertOption)
    },
  },
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
  * 在实例初始化之后，组件属性计算之前，如data属性等
  */
  beforeCreate() {
  },
  /**
  * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
  */
  created() {
  },
  /**
  * 在挂载开始之前被调用：相关的 render 函数首次被调用。
  */
  beforeMount() {
  },
  /**
  * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
  * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
  */
  mounted() {
    this.$nextTick(() => {
      this.initChart()
      window.addEventListener('resize', this.screenAdapter)
      this.screenAdapter()
    })
  },
  /**
  * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
  * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
  */
  beforeUpdate() {
  },
  /**
  * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
  * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
  */
  updated() {
  },
  /**
  * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
  */
  activated() {
  },
  /**
  * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
  */
  deactivated() {
  },
  /**
  * 实例销毁之前调用。在这一步，实例仍然完全可用。
  */
  beforeDestroy() {
  },
  /**
  * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
  * 所有的事件监听器会被移除，所有的子实例也会被销毁。
  */
  destroyed() {
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，当前组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="scss">
.map {
  height: 879px;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
