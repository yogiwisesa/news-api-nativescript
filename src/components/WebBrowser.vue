<template>
    <Page class="page">
        <ActionBar class="action-bar" title="News" />
        <FlexboxLayout flexDirection="column">
            <ActivityIndicator id="progressBar" v-if="isLoading" busy="true" />
            <WebView :src="url" />
        </FlexboxLayout>
    </Page>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    url() {
      return this.$store.state.url.url;
    }
  },
  methods: {
    hideProgressbar(event) {
        console.log(event);
      this.isLoading = false;
    }
  }
};
</script>

<style>
#progressBar {
  margin-top: 30%;
}
</style>
