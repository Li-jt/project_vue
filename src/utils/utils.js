/*
 * @Author: lijt
 * @Date: 2022-06-20 00:28:20
 * @LastEditors: lijt
 * @LastEditTime: 2022-10-11 15:59:09
 * @FilePath: \proxy_vue\src\utils\utils.js
 * @Description: 
 */
/**
 * 生成随机数（整数），包含min，包含max
 * @param {number} min 最小随机数
 * @param {number} max 最大随机数
 * @param {number} num 生成多少次 默认1次
 * @returns 生成1次返回数字，多次返回数组
 */
export const getRandom = (min, max, num = 1) => {
  if (typeof min != 'number' || typeof max != 'number' || typeof num != 'number') return null;
  if (num > 1) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return arr;
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

/**
 * 截取视频第一帧
 * @param {number} url 视频地址
 * @returns 返回Base64图片
 */
export const getVideoBase64 = (url) => {
  //url为视频链接地址
  return new Promise(function (resolve, reject) {
    let dataURL = '';
    const video = document.createElement('video');
    video.setAttribute('crossOrigin', 'Anonymous'); // 处理跨域
    video.setAttribute('src', url);
    video.setAttribute('preload', 'auto'); // auto|metadata|none
    video.addEventListener('loadeddata', function () {
      const canvas = document.createElement('canvas');
      // canvas的尺寸和设置的视频宽高一样
      // const width = video.width
      // const height = video.height
      // 如果未设置创建时视频的宽高，则使用默认视频的宽高
      const width = video.videoWidth;
      const height = video.videoHeight;
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d')?.drawImage(video, 0, 0, width, height); // 绘制canvas
      dataURL = canvas.toDataURL('image/jpeg'); // 转换为base64
      resolve(dataURL);
    });
  });
}