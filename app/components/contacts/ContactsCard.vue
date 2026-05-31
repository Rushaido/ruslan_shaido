<template>
  <div class="contacts-card">
    <div class="contacts-card__icon-wrap">
      <SvgIcon class="contacts-card__icon" :name="card.icon" width="24" height="24" />
    </div>
    <div class="contacts-card__info">
      <h3 class="contacts-card__title">{{ card.title }}</h3>
      <p v-for="line in card.lines" :key="line.text" class="contacts-card__text">
        <a v-if="line.href" :href="line.href" class="contacts-card__link">{{ line.text }}</a>
        <template v-else>{{ line.text }}</template>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  card: {
    type: Object,
    required: true
  }
})
</script>

<style lang="less">
.contacts-card {
  display: flex;
  gap: 54px;
  align-items: center;
  justify-items: start;

  @media @bw1340 {
    flex-direction: column;
    gap: 30px;
  }

  @media @bw768 {
    flex-direction: row;
    gap: 10px;
  }

  &__icon-wrap {
    width: 110px;
    aspect-ratio: 1 / 1;
    background: @black;
    display: grid;
    place-items: center;
    flex-shrink: 0;

    @media @bw768 {
      width: 65px;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
  }

  &__title {
    margin: 0 auto 10px;
    white-space: nowrap;

    @media @bw1340 {
      font-size: 18px;
      line-height: 25px;
    }

    @media @bw768 {
      font-weight: 600;
    }
  }

  &__text {
    margin: 0;
  }

  &__link {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__text + &__text {
    margin-top: 5px;

    @media @bw768 {
      margin-top: 0;
    }
  }

  &__title,
  &__text {
    @media @bw1340 {
      text-align: center;
    }

    @media @bw768 {
      text-align: start;
      font-size: 14px;
      line-height: 19px;
    }
  }
}
</style>
