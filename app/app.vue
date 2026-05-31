<template>
  <div class="app">
    <PageHeader class="app__header" />

    <main class="app__main">
      <NuxtPage class="app_page"/>
    </main>

    <PageFooter class="app__footer" />
  </div>
</template>

<script setup>
const lang = ref("ru")
const store = useStore()

useHead({
  htmlAttrs: {
    lang: () => lang.value
  },
  bodyAttrs: {
    class: {
      "overflow-nav": () => store.navActive,
      "overflow": () => store.getModal
    }
  },
  title: "Lenni Art",
  meta: [
    { charset: "UTF-8" },
    { name: "viewport", content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" },
    { name: "description", content: "Арт–пространство для людей, горящих сердец и делом" },
    { name: "keywords", content: "Lenni Art, пространство, мероприятия" },
    { property: "og:title", content: "Lenni Art" },
    { property: "og:description", content: "Арт пространство для людей, горящих сердцем и делом" },
    { property: "og:image", content: "/assets/images/lenni-art.jpg" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://lenni-art.ru/" }
  ],
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap" }
  ]
});
</script>

<style lang="less">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex: 1 0 auto;
  }

  &__footer {
    flex: 0 0 auto;
  }
}
</style>
