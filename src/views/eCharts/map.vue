<!--
 * @Author: lijt
 * @Date: 2022-08-14 20:40:58
 * @LastEditors: lijt
 * @LastEditTime: 2022-10-22 16:26:06
 * @FilePath: \proxy_vue\src\views\eCharts\map.vue
 * @Description: 地球
-->

<template>
  <div id=''
       class=''>
    <img v-show="false"
         ref="img"
         id="img2"
         src="@/static/images/weixingditu11.png"
         alt="">
    <div class="earth-container">
      <!-- <div class="handle-container">
        <el-form :inline="true">
          <el-form-item label="切换3D/2D地图">
            <el-switch v-model="config.is3D"
                       :active-value="true"
                       :inactive-value="false"
                       @change="change3Dor2D">
            </el-switch>
          </el-form-item>
          <el-form-item label="是否需要地球背景图">
            <el-switch v-model="config.hasEarthImg"
                       :active-value="true"
                       :inactive-value="false"
                       @change="changeEarthImg">
            </el-switch>
          </el-form-item>
          <el-form-item label="切换柱状/热力图">
            <el-switch v-model="config.dataType"
                       :active-value="0"
                       :inactive-value="1"
                       @change="changeDataType">
            </el-switch>
          </el-form-item>
          <el-form-item label="地球背景色">
            <el-color-picker v-model="config.earthBackground"
                             show-alpha
                             @change="changeBackground" />
          </el-form-item>
          <el-form-item label="国家背景色">
            <el-color-picker v-model="config.countryBackground"
                             show-alpha
                             @change="changeCountryBackground" />
          </el-form-item>
        </el-form>
      </div> -->
      <div id="earth"
           ref="earth"
           @dblclick="revertMap"></div>

    </div>
    <el-dialog :visible.sync="message.visible"
               title="详细信息"
               width="30%">
      <span>{{  message.name  }}:{{  message.value  }}</span>
    </el-dialog>
  </div>
</template>

<script>
import { EarthDataType } from './interface'
import Maps from './map/index.vue'
import changeConfig from './config'
// 中国地图
import chianJson from '@/utils/map/China.json'
// 各省份对应的矢量数据地址
import { getProvinceMapInfo } from '@/utils/map/map-utils'
export default {
  // 组件名称
  name: 'map',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {
    Maps
  },
  // 组件状态值
  data () {
    return {
      reverts: [],
      isMaps: false,
      mapChart: null,
      map: null,
      earth: null,
      config: {
        is3D: true,
        hasEarthImg: true,
        earthBackground: "",
        countryBackground: "",
        dataType: 0,
      },
      select: {
        selectData: [1, 10],
        selectDataCopy: [1, 10],
      },
      common: {
        isHover: false,
        hoverTimer: 0,
        rotaionTime: 36, //默认一圈36秒
        autoRotateAfterStill: 2, //在鼠标静止操作后恢复自动旋转的时间间隔
      },
      message: {
        name: "",
        value: "",
        visible: false,
      },
      geoGpsMap: [116.4551, 40.2539],
      geoCoordMap: {
        江苏: [118.8062, 31.9208],
        黑龙江: [127.9688, 45.368],
        内蒙古: [110.3467, 41.4899],
        吉林: [125.8154, 44.2584],
        北京: [116.4551, 40.2539],
        辽宁: [123.1238, 42.1216],
        河北: [114.4995, 38.1006],
        天津: [117.4219, 39.4189],
        山西: [112.3352, 37.9413],
        陕西: [109.1162, 34.2004],
        甘肃: [103.5901, 36.3043],
        宁夏: [106.3586, 38.1775],
        青海: [101.4038, 36.8207],
        新疆: [87.9236, 43.5883],
        四川: [103.9526, 30.7617],
        重庆: [108.384366, 30.439702],
        山东: [117.1582, 36.8701],
        河南: [113.4668, 34.6234],
        安徽: [117.29, 32.0581],
        湖北: [114.3896, 30.6628],
        浙江: [119.5313, 29.8773],
        福建: [119.4543, 25.9222],
        江西: [116.0046, 28.6633],
        湖南: [113.0823, 28.2568],
        贵州: [106.6992, 26.7682],
        云南: [102.9199, 25.4663],
        广东: [113.12244, 23.009505],
        广西: [108.479, 23.1152],
        海南: [110.3893, 19.8516],
        上海: [121.4648, 31.2891],
        西藏: [91.141017, 29.668461]
      },
      geoData: [{
        name: '山西省',
        value: 123321,
        selected: true
      }, {
        name: '北京市',
        value: 999999111
      }, {
        name: '辽宁省',
        value: 123
      }, {
        name: '河北省',
        value: 3211
      }, {
        name: '山东省',
        value: 998231
      }, {
        name: '广西省',
        value: 3122222222
      }, {
        name: '云南省',
        value: 312
      }, {
        name: '浙江省',
        value: 321
      }, {
        name: '上海市',
        value: 312
      }, {
        name: '江苏省',
        value: 3112
      }, {
        name: '湖北省',
        value: 3121
      }, {
        name: '湖南省',
        value: 321321
      }, {
        name: '西藏',
        valie: 321321
      }, {
        name: '内蒙古',
        value: 321
      }, {
        name: '黑龙江省',
        value: 321
      }, {
        name: '吉林省',
        value: 44412
      }, {
        name: '天津市',
        value: 312
      }, {
        name: '广州省',
        value: 321
      }, {
        name: '重庆市',
        value: 312
      }],
      mapData: [],
      data: [
        {
          name: "中国",
          lng: "116.417492",
          lat: "39.920469",
          value: 10,
        },
      ]
    }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {
    'common.isHover': {
      handler (value) {
        let { common } = this
        if (value) {
          // hover停止旋转
          if (common.hoverTimer) {
            window.clearTimeout(common.hoverTimer);
          }
          this.earth.setOption({
            globe: {
              viewControl: {
                autoRotate: false,
              },
            },
          });
        } else {
          // 移出旋转
          common.hoverTimer = window.setTimeout(() => {
            this.earth.setOption({
              globe: {
                viewControl: {
                  autoRotate: false,
                },
              },
            });
          }, common.autoRotateAfterStill * 1000);
        }
      },
      deep: true
    },
    'select.selectData': {
      handler (value) {
        this.select.selectDataCopy = value;
      },
      deep: true
    }
  },
  // 组件方法
  methods: {
    /**
     * @description 改变国家颜色
     */
    changeCountryBackground (value) {
      changeConfig.changeCountryColor(this.map, value);
    },
    /**
     * @description 切换2/3d
     */
    change3Dor2D () {
      this.map.dispose();
      if (this.config.is3D) {
        this.initMap();
      } else {
        this.earth.dispose();
        this.map = null;
        const chartDom = document.getElementById("earth");
        this.map = this.$echarts.init(chartDom);
        this.map.setOption({
          tooltip: {
            trigger: "item",
          },
          visualMap: {
            min: this.select.selectData[0],
            max: this.select.selectData[1],
            calculable: true, //是否显示拖拽用的手柄
            realtime: false, //拖拽时，是否实时更新。
          },
          geo: {
            type: 'map', // 类型
            map: 'world',
            top: 0,
            left: 100,
            right: 100,
            bottom: 0,
            boundingCoords: [
              [-180, 90],
              [180, -90],
            ],
            roam: true, //是否开启鼠标缩放和平移漫游。
            itemStyle: {
              color: {
                image: require('@/assets/earth.jpg'),
                repeat: 'repeat-x'
              },
              borderColor: '#fff',
              borderWidth: 1
            },
          },
          series: [
            {
              type: "map",
              map: "world",
              // 绘制完整尺寸的 echarts 实例
              top: 0,
              left: 100,
              right: 100,
              bottom: 0,
              boundingCoords: [
                [-180, 90],
                [180, -90],
              ],
              roam: true, //是否开启鼠标缩放和平移漫游。
              label: {
                show: false, //展示国家名
              },
              itemStyle: {
                areaColor: "transparent",
              },
              // hover样式
              emphasis: {},
              // select样式
              select: {
                disabled: true,
              },
              data: this.data.map((item) => ({ name: item.name, value: item.value })),
            },
          ],
        });
      }
    },
    /**
     * @description 配置3d地球
     */
    initEarth () {
      this.earth = this.$echarts.init(this.$refs.earth);

      // 地球配置
      const earthOption = {
        backgroundColor: "transparent",
        globe: {
          baseTexture: require("@/assets/earth.jpg"),
          shading: "color",
          // environment: require("@/assets/starfield.jpg"),
          layers: [
            {
              type: "blend",
              texture: this.map, //将map和3d地球纹理混合
            },
          ],
          viewControl: {
            autoRotate: false, //是否开启视角绕物体的自动旋转查看
            autoRotateAfterStill: this.common.autoRotateAfterStill, //在鼠标静止操作后恢复自动旋转的时间间隔
            animation: false, // 非常重要！！！ 解决setOption时停顿一下的问题
            targetCoord: [116.46, 39.92], // 定位到北京
          },
        },
        visualMap: {
          min: this.select.selectData[0],
          max: this.select.selectData[1],
          calculable: true, //是否显示拖拽用的手柄
          realtime: true, //拖拽时，是否实时更新。
        },
        // series: [{
        //   type: "map",
        //   map: "world",
        //   // 绘制完整尺寸的 echarts 实例
        //   top: 0,
        //   left: 0,
        //   right: 0,
        //   bottom: 0,
        //   boundingCoords: [
        //     [-180, 90],
        //     [180, -90],
        //   ],
        //   nameMap: {
        //     China: '中华人民共和国',
        //   }, // 自定义地区的名称映射
        //   label: {
        //     show: false, //展示国家名
        //     fontSize: 30
        //   },
        //   itemStyle: {
        //     areaColor: "transparent",
        //   },
        //   zlevel: 2,
        //   regions: [
        //     {
        //       name: 'China',
        //       label: {
        //         show: true,
        //         color: '#fff',
        //       },
        //       itemStyle: {
        //         areaColor: '#2B91B7',
        //         color: '#2B91B7'
        //       }
        //     }
        //   ],
        //   // // hover样式
        //   // emphasis: {
        //   //   show: true
        //   // },
        //   // // select样式
        //   // select: {
        //   //   disabled: true,
        //   // },
        //   // data: this.data.map((item) => ({ name: item.name, value: item.value })),
        // },],
      };

      this.earth.setOption(earthOption);
      // console.log('earth', this.earth);
      // this.earth.on("datarangeselected", (event) => {
      //   this.select.selectDataCopy = event.selected;
      //   if (this.config.dataType) {
      //     this.dataSeriesUpdate(this.map, this.filterData());
      //   }
      // });
      // this.map.getZr().on("mousemove", () => {
      //   if (this.config.is3D) {
      //     this.common.isHover = true;
      //   }
      // });
      // this.map.getZr().on("mouseout", () => {
      //   if (this.config.is3D) {
      //     this.common.isHover = false;
      //   }
      // });
    },
    /**
     * @description 改变地球背景图
     */
    changeEarthImg (value) {
      changeConfig.changeEarthImg(this.earth, value);
    },
    /**
     * @description 切换柱状图或热力图
     */
    changeDataType () {
      const { data, config, map, earth, dataSeriesUpdate, filterData } = this
      if (config.dataType) {
        // 热力图
        dataSeriesUpdate(map, filterData());
        dataSeriesUpdate(earth);
      } else {
        // 柱状图
        dataSeriesUpdate(map);
        dataSeriesUpdate(
          earth,
          data.map((item) => [item.lng, item.lat, item.value])
        );
      }
    },
    /**
     * @description 改变地球背景
     */
    changeBackground (value) {
      const { map } = this
      changeConfig.changeEarthColor(map, value);
    },
    /**
     * @description 筛选数据
     */
    filterData () {
      let { select } = this
      return this.data.filter(
        (item) =>
          item.value >= select.selectDataCopy[0] &&
          item.value <= select.selectDataCopy[1]
      );
    },
    /**
     * @description 配置地图
     */
    initMap () {
      // 使用 echarts 绘制世界地图的实例作为纹理
      var canvas = document.createElement("canvas");
      this.map = this.$echarts.init(canvas, null, {
        width: 4096,
        height: 2048,
      });
      // 数据
      this.$echarts.registerMap("world", require("@/utils/map/world.json"));
      // 地图 数据
      this.map.setOption(this.map3dOption());
      /**
       * @description 点击国家展示信息
       */
      this.map.on("click", this.mapClick);
      this.initEarth();
    },
    /**
     * @description 更新实例的数据
     */
    dataSeriesUpdate (instance, data = []) {
      let { select, earth } = this
      let visualMap = {
        min: select.selectData[0],
        max: select.selectData[1],
      };
      if (instance === earth) {
        this.earth.setOption({
          visualMap,
          series: [
            {
              data: [[0, 0, 0], ...data], //当数据大于2个时，最后一个元素无法展示
            },
          ],
        });
      } else {
        instance.setOption({
          visualMap,
          series: [
            {
              data, //当数据大于2个时，最后一个元素无法展示
            },
          ],
        });
      }
    },
    /**
     * @description 获取筛选范围
     */
    getSelectData () {
      let { data, select } = this
      let dataValue = data.map((item) => item.value);
      select.selectData[1] = Math.max(...dataValue);
    },
    /**
     * 3d 地球数据
     */
    map3dOption () {
      return {
        series: [
          {
            type: "map",
            map: "world",
            // 绘制完整尺寸的 echarts 实例
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            boundingCoords: [
              [-180, 90],
              [180, -90],
            ],
            nameMap: {
              China: '中华人民共和国',
            }, // 自定义地区的名称映射
            label: {
              show: false, //展示国家名
              fontSize: 30
            },
            itemStyle: {
              areaColor: "transparent",
            },
            // regions: [
            //   {
            //     name: 'China',
            //     label: {
            //       show: true,
            //       color: '#fff',
            //     },
            //     itemStyle: {
            //       areaColor: '#2B91B7',
            //       color: '#2B91B7'
            //     }
            //   }
            // ],
            // hover样式
            emphasis: {
              show: true,
              itemStyle: {
                areaColor: '#2B91B7',
                color: '#2B91B7'
              }
            },
            // select样式
            select: {
              disabled: true,
              itemStyle: {
                areaColor: '#2B91B7',
                color: '#2B91B7'
              }
            },
            data: [
              {
                name: "中华人民共和国",
                label: {
                  show: true,
                  color: '#ffffff', // 选中文字颜色
                },
                itemStyle: {
                  areaColor: '#2B91B7',
                  color: '#2B91B7'
                },
                selected: true
                // visualMap: false,
              },
            ],
          },
        ],
      }
    },
    /**
     * 2d 地图数据
     */
    map2dOption () {
      return {
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
        ],
      }
    },
    /**
     * 二级地图
     */
    initChart () {
      // init第一个参数 ref定义的的，第二个参数主题
      this.earth && this.earth.dispose();
      this.map && this.map.dispose()
      this.map = this.$echarts.init(this.$refs.earth);
      this.$echarts.registerMap("china", chianJson)
      // this.map.dispatchAction({
      //   type: 'geoSelect',
      //   name: '湖南省'
      // })
      // this.map.setOption(this.map2dOption());

      this.map.setOption({
        title: {
          text: '中国地图',
          left: 20,
          top: 20,
        },
        // visualMap: {
        //   type: 'piecewise',
        // },
        geo: {
          type: 'map', // 类型
          map: 'china',
          top: '5%', // 距离顶部
          bottom: '5%', // 距离底部
          selectedMode: 'single',
          // zlevel: 1,
          // itemStyle: {
          //   color: {
          //     image: require('@/static/images/weixingditu11.png'),
          //     repeat: 'repeat-x'
          //   },
          //   borderColor: '#fff',
          //   borderWidth: 1
          // },
          itemStyle: {
            // areaColor: {
            //   type: "linear-gradient",
            //   x: 0,
            //   y: 1200,
            //   x2: 1000,
            //   y2: 0,
            //   colorStops: [
            //     {
            //       offset: 0,
            //       color: "#152E6E", // 0% 处的颜色
            //     },
            //     {
            //       offset: 1,
            //       color: "#0673AD", // 50% 处的颜色
            //     },
            //   ],
            //   global: true, // 缺省为 false
            // },
            shadowColor: 'rgb(58,115,192)',
            shadowOffsetX: 4,
            shadowOffsetY: 6,
          },
          select: {
            label: {
              show: true,
              color: '#ffffff', // 选中文字颜色
            },
            itemStyle: {
              color: '#2B91B7',
              areaColor: '#2B91B7', // 高亮区域颜色
            },
          },
          emphasis: {
            label: {
              show: true,
              color: '#ffffff', // 选中文字颜色
            },
            itemStyle: {
              color: '#2B91B7',
              areaColor: '#2B91B7', // 高亮区域颜色
            },
          },
          regions: [
            {
              name: '河南省',
              label: {
                show: true,
                color: '#fff',
              },
              itemStyle: {
                areaColor: '#2B91B7',
                color: '#2B91B7'
              }
            }
          ],
        },
        // 自定义提示框的内容
        tooltip: {
        },
        series: [
          // 地图效果
          {
            type: 'map',
            map: 'china',
            // zlevel: 0,
            // itemStyle: {
            //   areaColor: 'transparent',
            //   normal: {
            //     shadowColor: 'rgba(58,115,192,0.5)',
            //     shadowOffsetX: 4,
            //     shadowOffsetY: 6
            //   },
            // },
            itemStyle: {
              areaColor: {
                image: require('@/static/images/weixingditu11.png'),
                repeat: 'repeat-x'
              },
              borderColor: '#fff',
            },
            top: '5%', // 距离顶部
            bottom: '5%', // 距离底部
            tooltip: {
              show: true,
              trigger: 'item',
              triggerOn: 'mousemove',
              // 自定义提示框的内容
              formatter (params) {
                console.log('tooltip', params)
                return (
                  "<div>" +
                  params.name +
                  "<br/>" +
                  params.value +
                  "</div>"
                );
              }
            },
            data: this.geoData
          },
        ],
      })
      this.map.on("click", this.mapClick);
    },
    mapClick (event) {
      console.log(event);
      if (event.componentType === "geo") {
        const provinceInfo = getProvinceMapInfo(event.name)
        // 如果存在key执行下面内容
        if (provinceInfo.key !== undefined) {
          // 获取static下面的json数据
          // const res = await axios.get("http://192.168.72.180:8081" + provinceInfo.path)
          this.$echarts.registerMap(provinceInfo.key, provinceInfo.data)
          const changeOption = {
            geo: {
              map: provinceInfo.key,
            },
            series: [{
              map: provinceInfo.key,
            }]
          }
          this.map.setOption(changeOption)
          this.reverts.push(changeOption)
        }
      } else {
        event.name = 'china'
        this.initChart()
        this.reverts.push({
          geo: {
            map: event.name,
          },
          series: [{
            map: event.name,
          }]
        })
      }
      console.log(this.reverts);
    },
    // 当浏览器的大小发生变化的时候，会调用此方法来完成适配
    screenAdapter () {
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
      this.map.setOption(adapterOption)
      // 自适应
      this.map.resize()
    },
    // 回退
    revertMap () {
      if (this.reverts.length <= 0) return
      try {
        this.map.setOption(this.reverts[this.reverts.length - 2])
        this.reverts.splice(this.reverts.length - 1, 1)
      } catch (error) {
        this.map.dispose()
        this.initMap()
        this.reverts.splice(this.reverts.length - 1, 1)
      }
    },
    convertToLineData (data, gps) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var toCoord = this.geoCoordMap[dataItem.name];
        var fromCoord = gps;// gps：‘中心点’
        if (fromCoord && toCoord) {
          res.push({
            fromName: gps,
            toName: dataItem.name,
            coords: [
              fromCoord,
              toCoord
            ]
          });
        }
      }
      return res;
    },
    convertData (data) {
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    },
  },
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
  * 在实例初始化之后，组件属性计算之前，如data属性等
  */
  beforeCreate () {
  },
  /**
  * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
  */
  created () {
    for (var key in this.geoCoordMap) {
      if (name.includes(key)) {
        this.geoGpsMap = this.geoCoordMap[key];
      }
      const keys = key;
      const filters = this.geoData.filter(item => {
        return item.name.includes(keys);
      })[0];

      this.mapData.push({
        name: key,
        value: filters ? filters.value : 0
      });
    }
    this.mapData.sort((a, b) => {
      return a.value - b.value;
    });
  },
  /**
  * 在挂载开始之前被调用：相关的 render 函数首次被调用。
  */
  beforeMount () {
  },
  /**
  * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
  * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
  */
  mounted () {
    this.getSelectData();
    this.$nextTick(() => {
      this.initMap();
    })
  },
  /**
  * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
  * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
  */
  beforeUpdate () {
  },
  /**
  * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
  * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
  */
  updated () {
  },
  /**
  * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
  */
  activated () {
  },
  /**
  * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
  */
  deactivated () {
  },
  /**
  * 实例销毁之前调用。在这一步，实例仍然完全可用。
  */
  beforeDestroy () {
    const { common } = this
    if (common.hoverTimer) {
      window.clearTimeout(common.hoverTimer);
    }
  },
  /**
  * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
  * 所有的事件监听器会被移除，所有的子实例也会被销毁。
  */
  destroyed () {
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，当前组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped lang="scss">
.earth-container {
  width: 100%;
  height: 100%;

  .handle-container {
    height: 100px;
  }

  #earth {
    width: 100%;
    height: calc(100vh - 100px);
  }
}
</style>

