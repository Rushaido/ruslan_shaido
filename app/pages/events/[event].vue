<template>
  <article class="event">
    <header class="event__header">
      <h1 class="event__title title">
        {{ data.title }}
      </h1>

      <div class="event__about">
        <div class="event__info">
          <time :datetime="data.date" class="event__time">{{ formattedDate }}</time>
          <div class="event__info-text">
            {{ data.location }}
          </div>
        </div>

        <picture class="event__picture">
          <source type="image/webp" :srcset="data.img_webp" />
          <img
            :src="data.img"
            :alt="data.alt"
            class="event__image"
          />
        </picture>

        <div class="event__info">
          <span class="event__time" data-caption="начало">{{ formattedTime }}</span>
          <div class="event__info-text">
            {{ data.address }}
          </div>
        </div>
      </div>
    </header>

    <div class="event__container">
      <div class="content event__content" v-html="data.content"></div>
    </div>

    <AppReserve />
  </article>
</template>

<script setup>
const route = useRoute()
const slug = route.params.event

const { data } = await useAsyncData(`event-${slug}`, () => {
  return $fetch(`http://localhost:3000/json/events/${slug}.json`)
})

const formattedDate = computed(() => {
  if (!data.value?.date) return ''
  const date = new Date(data.value.date)
  return date.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
})

const formattedTime = computed(() => {
  if (!data.value?.date) return ''
  const date = new Date(data.value.date)
  return date
    .toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    .replace(':', '.')
})
</script>

<style lang="less">
.event {
  padding: 40px 0 150px;

  @media @bw768 {
    padding: 80px 0 100px;
  }

  &__header {
    .container();
    margin-bottom: 80px;
  }

  &__container {
    .container();
  }

  &__about {
    display: flex;
    justify-content: center;
    align-items: center;

    @media @bw768 {
      flex-wrap: wrap;
    }

    &::before {
      @media @bw768 {
        content: "";
        display: block;
        flex-shrink: 0;
        width: 100%;
      }
    }
  }

  &__info {
    flex-shrink: 0;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 13px 0;
    font-weight: 300;
    font-family: @font3;
    text-align: right;
    text-transform: uppercase;

    @media @bw1340 {
      padding: 8px 0;
    }

    @media @bw768 {
      width: calc(50% - 10px);
    }

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 140px;
      max-width: 100%;
      height: 1px;
      background-image: linear-gradient(
        270deg,
        #1c1b1b 0%,
        rgba(255, 255, 255, 0) 82.86%
      );

      @media @bw1340 {
        width: 85px;
      }
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }

    &:first-child {
      @media @bw768 {
        margin-right: 10px;
      }

      &::before,
      &::after {
        right: 0;
      }
    }

    &:last-child {
      align-items: flex-start;
      text-align: left;

      @media @bw768 {
        margin-left: 10px;
      }

      &::before,
      &::after {
        left: 0;
        background-image: linear-gradient(
          90deg,
          #1c1b1b 0%,
          rgba(255, 255, 255, 0) 82.86%
        );
      }
    }
  }

  &__time {
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;

    @media @bw1340 {
      font-size: 18px;
      line-height: 22px;
    }

    &[data-caption] {
      &::after {
        content: attr(data-caption);
        margin-left: 10px;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        @media @bw1340 {
          font-size: 12px;
          line-height: 14px;
        }
      }
    }
  }

  &__info-text {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    @media @bw1340 {
      font-size: 12px;
      line-height: 14px;
    }
  }

  &__picture {
    display: block;
    width: 497px;
    margin: 0 50px;

    @media @bw1660 {
      width: 426px;
    }

    @media @bw1340 {
      width: 245px;
      margin: 0 40px;
    }

    @media @bw768 {
      order: -1;
      margin: 0 0 40px;
    }
  }

  &__image {
    display: block;
    width: 100%;
  }

  &__content {
    max-width: 830px;
    margin-bottom: 80px;
  }
}
</style>
