<template>
  <div class="events">
    <AppListing class="events__listing" title="Мероприятия">
      <EventCard
        v-for="card in list"
        :key="card.slug"
        :event="card"
        class="app-listing__card"
      />
    </AppListing>

    <AppService class="events__service" />
    <AppWant class="events__want" />
  </div>
</template>

<script setup>
const list = ref([])

const URL = "http://localhost:3000/json/events.json"

const { data } = await useAsyncData("events", () => {
  return $fetch(URL)
})

if (data?.value) list.value = data.value
</script>

<style lang="less">
.events {
  padding: 140px 0 100px;

  /* адаптив сюда нужен */

  &__listing {
    margin-bottom: 100px;
  }
}
</style>
