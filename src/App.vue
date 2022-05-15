<template>
  <div class="wrapper" :class="{ wrapperHeight: welcomePage }">
    <template v-if="welcomePage">
      <MainBackground />
      <DescriptionElement />
      <SearchElement 
        @emitKeyword="checkKeyword" 
        :placeholderText="placeholderText"
      />
    </template>

    <template v-else>
      <TopNav 
        @emitKeyword="checkKeyword"
        @openWelcomePage="openWelcomePage"
        class="sticky-nav" 
      />

      <LoaderElement v-if="isLoading" />
      <ErrorElement v-if="error.length" :errorInfo="error" />

      <DialogElement v-if="dialog" :dialogInfo="dialogInfo" @closeDialog="closeDialog" class="fixed-dialog" />

      <div class="news-wrapper" v-if="!isLoading">
        <NewsElement 
          v-for="(article, index) in response" 
          :key="index" 
          :article="article"
          @click="openDialog(article)"
        />
      </div>

      <FooterElement :class="{ bottom: isLoading || error.length }" />
    </template>
  </div>
</template>

<script>
import SearchElement from '@/components/SearchElement.vue';
import DescriptionElement from '@/components/DescriptionElement.vue';
import MainBackground from '@/components/MainBackground.vue';
import NewsElement from '@/components/NewsElement.vue';
import TopNav from '@/components/TopNav.vue';
import LoaderElement from '@/components/LoaderElement.vue';
import FooterElement from '@/components/FooterElement.vue';
import ErrorElement from '@/components/ErrorElement.vue';
import DialogElement from '@/components/DialogElement.vue';

import axios from 'axios';

export default {
  name: 'App',
  components: {
    SearchElement,
    DescriptionElement,
    MainBackground,
    NewsElement,
    TopNav,
    LoaderElement,
    FooterElement,
    ErrorElement,
    DialogElement,
  },

  data() {
    return {
      apiKey: '091c1263e2a243b9b2fc148478756a76',
      url: 'https://newsapi.org/v2/everything',
      response: '',
      isLoading: false,
      welcomePage: true,
      placeholderText: 'Type&Enter',
      error: '',
      dialog: false,
      dialogInfo: '',
    }
  },

  methods: {
    checkKeyword(keyword) {
      this.isLoading = true;
      this.error = '';
      if (!keyword.length) {
        this.error = 'You didn\'t enter a keyword. Try again!';
        this.isLoading = false;
        this.welcomePage = false;
      } else {
        this.searchNews(keyword);
      }
    },
    async searchNews(keyword) {
      let axiosRes = await axios.get(`${this.url}?q=${keyword}&apiKey=${this.apiKey}`)
        .then(res => {
          this.response = res.data.articles;
          if (!this.response.length) {
            this.error = `No articles found for "${keyword}". Try again!`
          }
          })
        .catch(error => this.error = error);

      if (axiosRes) {
        if (axiosRes.message === 'Request failed with status code 429') {
          this.error = 'Request failed with status code 429, too many requests';
        }
      }
      
      this.isLoading = false;
      this.welcomePage = false;
    },
    openWelcomePage() {
      this.dialog = false;
      this.welcomePage = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    openDialog(info) {
      if (!this.dialog) {
        this.dialogInfo = info;
        this.dialog = true;
      }
    },
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
  background-color: $background-color;
  overflow-x: hidden;
}

.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: $text-color;
}

.wrapperHeight {
  height: 100vh;
}

.sticky-nav {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 6;
}

.fixed-dialog {
  position: fixed;
  top: 15vh;
  z-index: 10;
}

.bottom {
  position: absolute; 
  bottom: 0;
}

.news-wrapper {
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;
  margin: 5vh 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>

