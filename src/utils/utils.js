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