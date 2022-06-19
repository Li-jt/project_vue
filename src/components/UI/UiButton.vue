<template>
  <div class="button" @click="click">
    <button class="btn" v-circle>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  directives: {
    circle: {
      inserted(el) {
        el.style.borderRadius = `${el.clientHeight / 2}px`;
      }
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 100%;

  .btn {
    width: 100%;
    height: 100%;
    background-color: #fff;
    /* Green */
    border: none;
    color: #606266;
    // padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    // border-radius: ;
  }

  .btn:hover {
    box-shadow: 0 0 10px #fff;
  }

  .btn:active {
    box-shadow: 0 0 10px #ccc;
  }
}
</style>