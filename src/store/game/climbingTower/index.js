import * as type from './types'
import {
  enemyType
} from '@/common/game/enemy'
import {
  cardType
} from '@/common/game/card'
import {
  cardTemplate
} from '@/common/game/card'
import {
  getRandom
} from '@/utils/utils'

export default {
  namespaced: true,
  state: {
    player: {
      defense: 0,
      energy: 3, //能量
      hp: 80
    },
    roundNum: 1, //回合数
    selectCard: null, //选中的卡片
    selectEnemy: null, //选中的敌人
    cards: cardTemplate, //当前所拥有的卡片
    discardPile: [], //弃牌堆
    enemys: [{
      hp: 5,
      defense: 3,
      id: 0,
      state: {
        type: enemyType[0].type,
        typeName: enemyType[0].name,
        number: 10
      }
    }, {
      hp: 100,
      defense: 3,
      id: 0,
      state: {
        type: enemyType[1].type,
        typeName: enemyType[1].name,
        number: 20
      }
    }], //当前场上的敌人

  },
  mutations: {
    //设置选中的卡牌
    [type.SETSELECTCARD](state, value) {
      state.selectCard = value === null ? null : state.cards[value];
    },
    //设置选中的敌人
    [type.SETSELECTENEMY](state, value) {
      state.selectEnemy = value === null ? null : value;
    },
    //设置敌人
    [type.SETENEMYS](state) {
      //减少敌人属性
      if (state.selectCard === null) return;

      //判断当前能量
      if (state.player.energy !== null && state.selectCard.energy > state.player.energy) return;

      if (state.selectCard.type === cardType.ATTACK && state.selectEnemy !== null) {
        let number = state.selectCard.number - state.enemys[state.selectEnemy].defense;
        if (number > 0) {
          state.enemys[state.selectEnemy].defense = 0;
          state.enemys[state.selectEnemy].hp -= number;
          if (state.enemys[state.selectEnemy].hp <= 0) {
            state.enemys.splice(state.selectEnemy, 1)
          }
          if (state.enemys.length <= 0) {
            console.log('游戏结束');
            alert('游戏结束')
          }
        } else {
          state.enemys[state.selectEnemy].defense -= state.selectCard.number;
        }
      } else if (state.selectCard.type === cardType.DEFENSE) {
        state.player.defense += state.selectCard.number;
      } else {
        return
      }

      //减少能量
      state.player.energy -= state.player.energy === null ? 0 : state.selectCard.energy;

      // 把当前选中卡片放入弃牌堆
      state.discardPile.push(state.selectCard);
      state.cards.splice(state.cards.indexOf(state.selectCard), 1)
      // 把当前选中卡片制空
      state.selectCard = null;
    },
    //弃牌堆添加卡片
    [type.ADDDISCARDPILE](state, value) {
      state.discardPile.push(value);
    },
    //敌人回合开始
    [type.ENEMYROUND](state, value) {
      //玩家手牌放入弃牌堆
      state.cards.map((item, i) => {
        state.discardPile.push(item);
      })
      state.cards = [];

      state.enemys.map((item, i) => {
        item.defense = 0;
        if (item.state.type === enemyType[0].type) {
          //攻击 666
          let num = item.state.number - state.player.defense;
          if (num > 0) {
            state.player.defense = 0;
            state.player.hp -= num;
            if (state.player.hp <= 0) {
              console.log('玩家阵亡，游戏结束');
              alert('玩家阵亡，游戏结束');
            }
          } else {
            state.player.defense -= item.state.number;
          }
        } else if (item.state.type === enemyType[1].type) {
          // 防御
          item.defense += item.state.number;
        }
      });
      ++state.roundNum;
    },
    //玩家回合开始
    [type.PLAYERROUND](state) {
      let n = 0;
      state.enemys.map((item, i) => {
        n = getRandom(0, 1);
        item.state.type = enemyType[n].type;
        item.state.typeName = enemyType[n].name;
        item.state.number = getRandom(5, 10);
      });
      state.player.energy = 3;
      state.player.defense = 0;
      state.cards = state.discardPile;
      state.discardPile = [];
    }
  },
  actions: {}
}