/*
 * @Author: lijt
 * @Date: 2022-08-24 17:15:17
 * @LastEditors: lijt
 * @LastEditTime: 2022-08-24 17:15:35
 * @FilePath: \proxy_vue\src\views\eCharts\config.js
 * @Description: 
 */
export default {
  /**
   * @description 改变地球背景图
   */
  changeEarthImg(earth, value) {
    let result;
    if (value) {
      result = require("@/assets/earth.jpg");
    } else {
      result = null;
    }
    earth.setOption({
      globe: {
        baseTexture: result,
      },
    });
  },
  /**
   * @description 改变地球背景
   */
  changeEarthColor(map, value) {
    let result;
    if (value) {
      result = value;
    } else {
      result = "transparent";
    }
    map.setOption({
      backgroundColor: result,
    });
  },
  /**
   * @description 改变国家背景
   */
  changeCountryColor(map, value) {
    let result;
    if (value) {
      result = value;
    } else {
      result = "transparent";
    }
    map.setOption({
      series: [{
        itemStyle: {
          areaColor: result,
        },
      }, ],
    });
  },
};