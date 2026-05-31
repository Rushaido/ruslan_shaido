<template>
  <section class="app-upcoming">
    <div class="app-upcoming__wrapper">
      <div class="app-upcoming__container">
        <h2 class="app-upcoming__title section-title">Мероприятия</h2>

        <TheSwiper :list="events" :component="EventCard" />

        <NuxtLink to="/events" class="app-upcoming__link link">Смотреть все</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import EventCard from '@/components/event/EventCard.vue'

const { data } = await useAsyncData('upcoming-events', () => {
  return $fetch('http://localhost:3000/json/events.json')
})

const events = computed(() => data.value ?? [])
</script>

<style lang="less">
.app-upcoming {
  position: relative;
  width: 100%;
  padding: 35px 0;
  overflow: hidden;
  margin-bottom: 54px;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-bottom: 35px solid fade(@white, 60%);
  }

  &::before {
    left: 0;
    border-right: 39vw solid transparent;
  }

  &::after {
    right: 0;
    border-left: 61vw solid transparent;
  }

  &__wrapper {
    width: 100%;
    padding: 90px 0 55px;
    background-color: fade(@white, 60%);

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      border-top: 35px solid fade(@white, 60%);
    }

    &::before {
      left: 0;
      border-right: 60vw solid transparent;
    }

    &::after {
      right: 0;
      border-left: 39vw solid transparent;
    }
  }

  &__container {
    .container();
    display: flex;
    flex-direction: column;
  }

  &__link {
    width: fit-content;
    padding: 15px 0 15px 40px;
    align-self: end;
  }
}
</style>
