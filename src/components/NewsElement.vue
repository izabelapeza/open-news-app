<template>
  <div class='new'>
    <div class='article-image' :style='articleImage'>
      <div class="desc">
        <p class="desc__source"><span class="desc__author">{{author}}</span> {{ source }}</p>
        <p class='desc__title'>{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsElement',

  props: ['article'],

  data() {
    return {
      author: this.article.author,
      content: this.article.content,
      description: this.article.description,
      publishedAt: this.article.publishedAt,
      source: this.article.source.name,
      title: this.article.title,
      url: this.article.url,

      articleImage: {
        backgroundImage: `url(${this.article.urlToImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 0%',
      }
    }
  },

  computed: {
    releaseDate() {
      return this.publishedAt.slice(0,10);
    }
  }
}
</script>

<style lang="scss" scoped>
.new {
  transition: box-shadow 0.4s ease-in-out;

  &:hover {
    box-shadow: $main-box-shadow;
    cursor: pointer;
  }
}

.article-image {
  height: 250px;
  position: relative;
  border-radius: 5px;

  &::after {
    content: '';
    bottom: 0;
    left: 0;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1));
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
}

.desc {
  position: absolute;
  bottom: 0;
  z-index: 2;
  padding: 20px;
  color: $text-color;

  &__source {
    font-size: 12px;
    font-weight: 300;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      display: block;
      bottom: -8px;
      height: 2px;
      width: 100px;
      background-color: $text-color;
    }
  }

  &__author {
    font-weight: 900;
  }

  &__title {
    font-size: 16px;
    font-weight: 700;
    padding-top: 12px;
  }
}
</style>