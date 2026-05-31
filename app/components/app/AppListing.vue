<template>
  <section class="app-listing">
    <h1 class="app-listing__title section-title">{{ title }}</h1>

    <div class="app-listing__list" :class="`app-listing__list--${variant}`">
      <slot />
    </div>

    <button v-if="variant === 'events'" type="button" class="more-btn app-listing__more-btn">
      Показать всё
      <SvgIcon class="more-btn__arrow" name="arrow" width="92" height="62" />
    </button>

    <a v-else-if="variant === 'blog'" href="#" class="app-listing__link link">
      Смотреть все
    </a>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'events',
    validator: (v) => ['events', 'blog'].includes(v)
  }
})
</script>

<style lang="less">
.app-listing {
  .container();
  display: flex;
  flex-direction: column;
  margin-top: 0;

  &__list {
    &--events {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -29px -120px;

      @media @bw1660 {
        margin: 0 -20px -100px;
      }

      @media @bw1340 {
        margin: 0 -15px -100px;
      }

      @media @bw1020 {
        justify-content: center;
        margin: 0 -15px -80px;
      }

      @media @bw768 {
        margin: 0 -10px -80px;
      }

      @media @bw650 {
        margin: 0 0 -60px;
      }
    }

    &--blog {
      display: flex;
      flex-direction: column;
    }
  }

  &__card {
    width: calc(33.3333% - 58px);
    margin: 0 29px 120px;

    @media @bw1660 {
      margin: 0 20px 100px;
    }

    @media @bw1340 {
      width: calc(33.3333% - 30px);
      margin: 0 15px 100px;
    }

    @media @bw1020 {
      width: calc(50% - 30px);
      max-width: 405px;
      margin: 0 15px 80px;
    }

    @media @bw768 {
      margin: 0 10px 80px;
    }

    @media @bw650 {
      width: 100%;
      margin: 0 0 60px;
    }
  }

  &__more-btn {
    width: fit-content;
    margin-top: 70px;
    align-self: center;

    @media @bw1660 {
      margin-top: 58px;
    }

    @media @bw1340 {
      margin-top: 40px;
    }
  }

  &__link {
    width: fit-content;
    padding: 15px 0 15px 40px;
    margin-top: 70px;
    text-align: end;
    align-self: end;
  }
}
</style>
