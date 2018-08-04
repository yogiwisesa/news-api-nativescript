<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home" />
    <FlexboxLayout flexDirection="column">
      <ActivityIndicator id="progressBar" v-if="isLoading" busy="true" />
      <ListView for="article in articles" background="#FFF">
        <v-template>
          <FlexboxLayout flexDirection="column">
            <Image id="image-preview" :src="article.urlToImage" stretch="aspectFill" />
            <Label id="title" :text="article.title" />
            <Label id="description" :text="article.description" textWrap="true" />
            <Label id="author" :text="article.author"/>
          </FlexboxLayout>
        </v-template>
      </ListView>
    </FlexboxLayout>
  </Page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: [],
      isLoading: false
    };
  },
  methods: {
    loadApi() {
      this.isLoading = true;
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=109cafd7e6a94b0cae047707712c8c25"
        )
        .then(response => {
          this.articles = response.data.articles;
          console.log(this.articles[0]);
          this.isLoading = false;
        });
    }
  },
  mounted() {
    this.loadApi();
  }
};
</script>
<style>
#progressBar {
  margin-top: 30%;
}
#title {
  font-weight: bold;
  margin-top: 16px;
}

#image-preview {
  height: 700px;
  width: 100vh;
}
#description {
  margin-top: 16px;
  margin-bottom: 16px;
}

#author{
  margin-bottom: 16px;
  font-style: italic;
}
</style>
