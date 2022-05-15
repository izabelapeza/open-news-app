<template>
  <div class="search">
    <input
      class='search__input' 
      type='text' 
      :placeholder='placeholderText'
      v-model='keyword'
      @keyup.enter='emitKeyword'
    />
    <button 
      class='search__button' 
      @click='emitKeyword' 
      v-if='topNav'
    >
      <font-awesome-icon icon="magnifying-glass" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchElement',

  props: ['topNav', 'placeholderText'],

  data() {
    return {
      keyword: ''
    }
  },

  methods: {
    emitKeyword() {
      this.$emit('emitKeyword', this.keyword);
      if (this.topNav) {
        this.keyword = '';
      }
    }
  }
}
</script>

