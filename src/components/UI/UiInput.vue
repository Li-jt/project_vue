<template>
  <div class="UI">
    <input :type="type" :placeholder="placeholder" class="ui_input" :class="{ ui_input_active: active }"
      @focus="active = true" @blur="active = false" v-model="model">
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "请输入"
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      active: false,
    }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit('input', newVal)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.UI {
  height: 100%;
}

.ui_input {
  border-radius: 30px;
  border: 1px solid transparent;
  padding: 0 10px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  outline-style: none;
  font-size: 16px;
  color: #999;
  overflow: hidden;
}

.ui_input_active {
  box-shadow: 0 0 10px #fff;
}
</style>