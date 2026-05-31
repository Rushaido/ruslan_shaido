<template>
  <article class="event-card">
    <NuxtLink :to="`/events/${event.slug}`" class="event-card__link">
      <picture class="event-card__picture">
        <source v-if="event.img_webp" :srcset="event.img_webp" type="image/webp" />
        <img :src="event.img" :alt="event.alt" class="event-card__img" />
      </picture>
      <h4 class="event-card__title">{{ event.title }}</h4>
      <p class="event-card__description">{{ event.description }}</p>
      <time :datetime="event.date" class="event-card__time">{{
        formattedDate
      }}</time>
    </NuxtLink>
  </article>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const formattedDate = computed(() => {
  const date = new Date(props.event.date);
  const datePart = date.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const timePart = date
    .toLocaleString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(":", ".");
  return `${datePart} | начало ${timePart}`;
});
</script>

<style lang="less">
.event-card {
  display: flex;
  width: 406px;
  max-width: 100%;
  min-width: 280px;

  &__link {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: @black;
    text-decoration: none;

    &:hover {
      .event-card__title {
        color: @red;
        text-decoration-color: @red;
      }
    }
  }

  &__title {
    margin: 0 0 15px;
    min-height: 66px;
    color: @black;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    text-decoration: underline transparent;
    transition:
      color 0.2s,
      text-decoration-color 0.2s;

    @media @bw1660 {
      margin: 0 0 10px;
    }
    @media @bw1340 {
      min-height: 54px;
      font-size: 20px;
      line-height: 27px;
    }
    @media @bw768 {
      min-height: 44px;
      font-size: 16px;
      line-height: 22px;
    }
  }

  &__picture {
    display: block;
    position: relative;
    width: 100%;
    margin: 0 0 25px;
    font-size: 0;
    text-decoration: none;
    overflow: hidden;

    &::after {
      content: "";
      display: block;
      width: 100%;
      padding-top: 107.16%;
    }
  }

  &__img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__description {
    margin: 0 0 auto;
    font-size: 16px;
    line-height: 22px;

    @media @bw1020 {
      font-size: 14px;
      line-height: 19px;
    }
  }

  &__time {
    margin: 15px 0 0;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
  }
}
</style>
