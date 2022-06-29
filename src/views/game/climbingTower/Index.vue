<template>
  <div id='' class='' @mouseup='mouseup'>
    <div class="roundNum">{{ roundNum }}</div>
    <!-- 显示区 -->
    <div class="view">
      <div class="my">
        <p>血量：{{ player.hp }}</p>
        <p>防御：{{ player.defense }}</p>
      </div>
      <div class="enemys">
        <div class="enemy" :class="{ enemySelect: selectEnemy === i }" v-for="(item, i) in enemys"
          @mouseover="enemyOver(i)" @mouseout="enemyOut">
          <p>欲望：{{ item.state.typeName }} {{ item.state.number }}</p>
          <p>血量：{{ item.hp }}</p>
          <p>防御：{{ item.defense }}</p>
        </div>
      </div>
    </div>
    <!-- 卡片区 -->
    <div class="player">
      <div class="energy">{{ player.energy }}</div>
      <div class="cards">
        <Card v-for="(item, i) in cards" :card="item" :index="i" :key="item.id" />
      </div>
    </div>

    <div @click="end" class="endBtn">回合结束</div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { SETSELECTCARD, SETSELECTENEMY, SETENEMYS, ENEMYROUND, PLAYERROUND } from '@/store/game/climbingTower/types'
import Card from '../../../components/game/climbingTower/Card'
export default {
  // 组件名称
  name: 'Index',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: { Card },
  // 组件状态值
  data() {
    return {

    }
  },
  // 计算属性
  computed: {
    ...mapState('climbingTower', ['player', 'cards', 'enemys', 'selectEnemy', 'selectCard', 'roundNum']),
  },
  // 侦听器
  watch: {
    roundNum() {
      this.init();
    }
  },
  // 组件方法
  methods: {
    ...mapMutations('climbingTower', [SETSELECTCARD, SETSELECTENEMY, SETENEMYS, ENEMYROUND, PLAYERROUND]),
    //鼠标松开
    mouseup() {
      this[SETENEMYS]();
      this[SETSELECTCARD](null);
      // if (this.selectEnemy !== null && this.selectCard !== null) {
      //   this[SETENEMYS]();
      // } else {
      //   this[SETSELECTCARD](null);
      // }
    },
    //敌人鼠标移入
    enemyOver(i) {
      this[SETSELECTENEMY](i);
    },
    //敌人鼠标移出
    enemyOut() {
      this[SETSELECTENEMY](null);
    },
    // 回合结束
    end() {
      this[ENEMYROUND]();
    },
    init() {
      this[PLAYERROUND]();
      console.log('init');
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
<style lang="scss" scoped>
.roundNum {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  font-size: 30px;
  color: #000 !important;
  z-index: 1;
}

.view {
  width: 100%;
  background-color: aqua;
  height: 60vh;
  position: relative;

  .my {
    width: 100px;
    height: 150px;
    background-color: chartreuse;
    position: absolute;
    left: 100px;
    top: 50%;
  }

  .enemys {
    display: flex;
    position: absolute;
    right: 100px;
    top: 50%;

    .enemy {
      padding: 0 10px;
      height: 150px;
      background-color: brown;
      margin-left: 10px;
    }
  }

}

.enemySelect {
  box-shadow: 0 0 10px #000;
}

.player {
  width: 100%;
  background-color: antiquewhite;
  height: 40vh;
  position: relative;
  padding-left: 300px;
  padding-right: 100px;
  box-sizing: border-box;

  .energy {
    position: absolute;
    top: 50px;
    left: 100px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: aquamarine;
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    line-height: 100px;
    user-select: none;
  }

  .cards {
    height: 100%;
    background-color: blue;
    box-sizing: border-box;
    padding: 30px 20px;
    display: flex;
  }
}


.endBtn {
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
  user-select: none;
  background-color: blueviolet;
  position: fixed;
  bottom: 200px;
  right: 10px;
}
</style>
