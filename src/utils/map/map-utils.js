/*
 * @Author: lijt
 * @Date: 2022-08-25 14:06:03
 * @LastEditors: lijt
 * @LastEditTime: 2022-09-01 15:04:00
 * @FilePath: \proxy_vue\src\utils\map\map-utils.js
 * @Description: 省份映射文件
 */
// 省份对应的拼音
const nameToPinyin = {
  安徽省: 'ah',
  澳门特别行政区: 'am',
  北京市: 'bj',
  福建省: 'fj',
  甘肃省: 'gs',
  广东省: 'gd',
  广西壮族自治区: 'gx',
  贵州省: 'gz',
  海南省: 'hn',
  河北省: 'hb',
  河南省: 'hn1',
  黑龙江省: 'hlj',
  湖北省: 'hb1',
  湖南省: 'hn2',
  吉林省: 'jl',
  江苏省: 'js',
  江西省: 'jx',
  辽宁省: 'ln',
  内蒙古自治区: 'nmg',
  宁夏回族自治区: 'nx',
  青海省: 'qh',
  山东省: 'sd',
  山西省: 'sx',
  陕西省: 'sx1',
  上海市: 'sh',
  四川省: 'sc',
  台湾省: 'tw',
  天津市: 'tj',
  西藏自治区: 'xz',
  香港特别行政区: 'xg',
  新疆维吾尔自治区: 'xj',
  云南省: 'yn',
  浙江省: 'zj',
  重庆市: 'cq',
}

// 获取省份名称及地图矢量数据的地址
export function getProvinceMapInfo (arg) {
  // static/map/province 为各省份json数据
  const path = `@/static/map/province/${nameToPinyin[arg]}.json`
  const data = require(`@/static/map/province/${nameToPinyin[arg]}.json`)
  console.log(data);
  return {
    key: nameToPinyin[arg],
    path,
    data
  }
}