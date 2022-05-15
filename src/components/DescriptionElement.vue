<template>
  <div class="description-wrapper">
    <h1 class='logo'>
      <span class="logo__first-part">ope</span>
      <span class="logo__second-part">n</span>
      <span class="logo__third-part">ews</span>
    </h1>
    <p>Easy access to articles from all over the world. <br/> Search for interesting entries across the web and be open to new topic with our website.</p>
  </div>
</template>

<script>
export default {
  name: 'DescriptionElement',
}
</script>

<style lang="scss" scoped>
.description-wrapper {
  width: 70vw;
  text-align: center;
  color: $text-color;

  @media (min-width: 768px) {
    width: 50vw;
  }

  @media (min-width: 1024px) {
    width: 40vw;
  }

  h1 {
    font-size: 50px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 55px;
    }

    @media (min-width: 1024px) {
      font-size: 60px;
    }
  }

  p {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 30px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
}
</style>