<template>
    <Page class="page">
        <ActionBar class="action-bar" title="News">
        <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
        </ActionBar>
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