<template>
  <div class="background" />
</template>

<script>
export default {
  name: 'MainBackground',
}
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;

  background-image: $background-image;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 10%;

  z-index: -2;

  &::after {
    content: '';
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
  }
}
</style>