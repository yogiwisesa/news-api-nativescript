<template>
    <Page class="page">
        <ActionBar class="action-bar" title="News" />
        <WebView :src="url" />
    </Page>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    url() {
        return this.$store.state.url.url; 
    }
  }
};
</script>