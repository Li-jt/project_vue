<template>
  <div>
    <h1>当前求和：{{ sum }}</h1>
    <h1>放大10倍{{ bigSum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
    <hr />
    <h2>{{ msg }}</h2>
    <button @click="getHitokoto">获取诗词</button>
    <el-divider content-position="left">少年包青天</el-divider>
    <el-button type="primary" @click="open" :circle="true">弹窗</el-button>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import * as type from '../store/hitokoto/types'
import * as countType from '../store/count/types'
export default {
  name: 'Count',
  data() {
    return {
      n: 1
    }
  },
  //计算属性
  computed: {
    ...mapState('hitokotoOptions', ['msg']),
    // ...mapState('countOptions', ['sum'])
    sum() {
      return this.$store.state.countOptions.sum
    },
    // ...mapGetters('countOptions', ['bigSum']),
    bigSum() {
      return this.$store.getters['countOptions/bigSum']
    }
  },
  mounted() {
    // console.log(this);
    this.getHitokoto();
  },
  methods: {
    ...mapMutations('countOptions', [countType.DECREMENT]),
    ...mapActions('hitokotoOptions', [type.GETHITOKOTO]),
    increment(value) {
      this.$store.commit(`countOptions/${countType.INCREMENT}`, value);
    },
    // ...mapActions('countOptions', ['incrementOdd']),
    incrementOdd(value) {
      this.$store.dispatch('countOptions/incrementOdd', value);
    },
    incrementWait() { },
    open() {
      // this.$message({
      //   message: '恭喜你，这是一条成功消息',
      //   type: 'success' 
      // })
      Message.success({
        message: '恭喜你，这是一条成功消息',
      });
    }
  }
}
</script>

<style>
</style>