<!--
 * @Author: lijt 15226153903@163.com
 * @Date: 2022-08-21 10:33:21
 * @LastEditors: lijt 15226153903@163.com
 * @LastEditTime: 2022-08-21 11:35:00
 * @FilePath: \proxy_vue\src\views\game\music\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id='' class='bg'>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'index',
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      ctx: null,
      canvasSize: {
        width: 0,
        height: 0,
      },
      stepSize: 100,
      courses: [],
    }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    init() {
      this.canvasSize.width = window.innerWidth
      this.canvasSize.height = window.innerHeight
      //初始化
      this.setWH();
      //取得2d上下文对象(画笔)
      this.ctx = this.$refs.canvas.getContext('2d');
      this.frame()
    },
    frame() {
      this.setWH();
      this.addCourse()
      this.drawCourse()
      this.drawPlayer()
      requestAnimationFrame(this.frame);
    },
    // 添加道路
    addCourse() {
      let { courses, stepSize, canvasSize } = this
      if (courses.length < 10) {
        courses.push({
          x: courses[courses.length - 2]?.x + courses[courses.length - 2]?.w || canvasSize.width / 2,
          y: canvasSize.height / 2,
          w: stepSize,
          h: stepSize / 2
        })
      }
    },
    // 绘制角色
    drawPlayer() {
      const { ctx, courses } = this
      ctx.beginPath();//开始绘制
      ctx.arc(95, 50, 10, 0, 2 * Math.PI);//arc 的意思是“弧”
      ctx.fillStyle = "#ff0";//设置填充颜色
      ctx.fill();//开始填充
      ctx.beginPath();
      // 绘制新的圆环
      ctx.strokeStyle = "lightgreen";
      ctx.lineWidth = 10;
      //从顶点位置开始
      ctx.arc(250, 200, 100, -90 * Math.PI / 180, -90 * Math.PI / 180);
      ctx.stroke();
    },
    // 绘制道路
    drawCourse() {
      const { ctx, courses } = this
      ctx.fillStyle = "MediumTurquoise";
      for (let i = 0; i < courses.length; i++) {
        ctx.fillRect(courses[i].x, courses[i].y, courses[i].w, courses[i].h);
      }
    },
    //设置canvas宽高
    setWH() {
      const { width, height } = this.canvasSize
      this.$refs.canvas.width = width
      // this.$refs.canvas.width = this.$refs.canvasw.clientWidth
      this.$refs.canvas.height = height
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
    this.init()
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
.bg {
  width: 100vw;
  height: 100vh;
  background-color: dimgrey;
  overflow: hidden;
}
</style>
