// 卡片种类
export const cardType = {
  ATTACK: 'attack', //攻击
  DEFENSE: 'defense', //防御
}

/**
 * 卡片模板
 * @param {type} 卡片种类
 * @param {number} 卡片数值
 * @param {energy} 卡片消耗能量
 * @param {describe} 卡片描述
 */
export const cardTemplate = [{
  id: 0,
  type: cardType.ATTACK,
  number: 5,
  energy: 1,
  describe: '攻击'
}, {
  id: 1,
  type: cardType.DEFENSE,
  number: 5,
  energy: 1,
  describe: '防御'
}, {
  id: 2,
  type: cardType.ATTACK,
  number: 10,
  energy: 2,
  describe: '攻击'
}, {
  id: 3,
  type: cardType.DEFENSE,
  number: 3,
  energy: 0,
  describe: '防御'
}, ]