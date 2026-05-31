<template>
  <div class="home">
    <AppHero class="home__hero" />
    <AppWant class="home__want" />
    <AppAbout class="home__about" />
    <AppUpcoming class="home__upcoming" />

    <AppListing class="home__listing" title="Блог" variant="blog">
      <ArticleCard
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />
    </AppListing>

    <AppContacts class="home__contacts" />
    <AppQuote class="home__quote" />
  </div>
</template>

<script setup>
const { data } = await useAsyncData('blog', () => {
  return $fetch('http://localhost:3000/json/blog.json')
})

const articles = computed(() => data.value ?? [])
</script>

<style lang="less">
.home {
  padding: 100px 0;

  @media @bw1340 {
    padding: 50px 0;
  }

  &__listing {
    margin-bottom: 78px;

    @media @bw1340 {
      max-width: 708px;
    }

    @media @bw768 {
      max-width: 464px;
    }
  }
}
</style>
