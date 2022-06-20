<template>
  <div>
    <!-- <div class="home">
      <div></div>
    </div> -->
    <Bg />
  </div>
</template>

<script>
import Bg from '@/components/home/Bg'
export default {
  name: 'Home',
  components: { Bg },
  data() {
    return {

    }
  },
  mounted() {
    this.getToken();
    this.$nextTick(() => {
      this.display = true;
    })
  },
  methods: {
    getToken() {
      let token = this.$store.state.userOptions.token;
      if (token === '') {
        this.$router.push({
          name: 'login'
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 1200px;
  height: 1200px;
  overflow: hidden;
  margin: 150px auto 0;

  div {
    width: 100%;
    height: 100%;
    background: inherit;
    box-shadow: inset 0 0 0 1200px rgba(255, 255, 255, 0.65);
    filter: blur(10px);
  }
}
</style>