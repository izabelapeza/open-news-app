<template>
  <div class="dialog">
    <div class="dialog__close-button">
      <button @click="$emit('closeDialog')">
        <font-awesome-icon icon="xmark" class="dialog-icon" />
      </button>
    </div>
    <div class="dialog__content">
      <div class="dialog__content__img" :style='articleImage' />
      <div class="dialog__content__text">
        <p class="dialog-author">
          {{ dialogInfo.author }} 
          <span class="dialog-source">{{ dialogInfo.source.name }}</span>
        </p>
        <p class="dialog-title">{{ dialogInfo.title }}</p>
        <p class="dialog-description">{{ dialogInfo.description }}</p>
        <button class="dialog-button">
          <a :href="dialogInfo.url" target="_blank" rel="noopener noreferrer">Check more</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogElement',

  props: ['dialogInfo'],

  data() {
    return {
      articleImage: {
        backgroundImage: `url(${this.dialogInfo.urlToImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 0%',
      }
    }
  },
}
</script>
