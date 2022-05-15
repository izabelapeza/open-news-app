<template>
  <nav>
    <div class="nav">
      <div class="logo" @click="$emit('openWelcomePage')">
        <span class="logo__first-part">ope</span>
        <span class="logo__second-part">n</span>
        <span class="logo__third-part">ews</span>
      </div>
      <SearchElement 
        @emitKeyword="transmitKeyword"
        class="nav__search"
        topNav="True"
        :placeholderText="placeholderText"
      />
    </div>
  </nav>
</template>

<script>
import SearchElement from '@/components/SearchElement.vue';

export default {
  name: 'TopNav',

  components: {
    SearchElement,
  },

  data() {
    return {
      placeholderText: 'Type your keyword here'
    }
  },

  methods: {
    transmitKeyword(keyword) {
      this.$emit('emitKeyword', keyword)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
  font-size: 40px;
  margin: auto 30px;
  margin-top: 30px;

  @media (min-width: 768px) {
    font-size: 30px;
    margin-top: auto;
  }
}

.nav {
  display: flex;
  width: 100vw;

  flex-direction: column;
  align-items: center;
  height: 160px;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 80px;

    &__search {
      margin: auto 30px auto auto; 
    }
  }

  background-color: $background-color;
  background-image: $background-image;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 5%;

  box-shadow: $main-box-shadow;

  &__search {
    margin-bottom: 15px;
  }
}
</style>