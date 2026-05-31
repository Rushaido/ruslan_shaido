<template>
  <article class="article-card">
    <a href="#" class="article-card__link">
      <picture class="article-card__picture">
        <source media="(max-width: 450px)" type="image/webp" :srcset="article.img_webp" />
        <source media="(max-width: 450px)" :srcset="article.img" />
        <source media="(max-width: 1169px)" type="image/webp" :srcset="article.img_tablet_webp" />
        <source media="(max-width: 1169px)" :srcset="article.img_tablet" />
        <source type="image/webp" :srcset="article.img_webp" />
        <img :src="article.img" :alt="article.alt" class="article-card__img" />
      </picture>
    </a>

    <div class="article-card__info">
      <time :datetime="article.date" class="article-card__time">{{ formattedDate }}</time>
      <a href="#" class="article-card__title-link">
        <h4 class="article-card__title">{{ article.title }}</h4>
        <div class="article-card__arrow arrow">
          <SvgIcon class="arrow__icon" name="arrow" width="92" height="62" />
        </div>
      </a>
      <p class="article-card__description">{{ article.description }}</p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const formattedDate = computed(() => {
  const date = new Date(props.article.date)
  return date.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
})
</script>

<style lang="less">
.article-card {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  position: relative;

  @media @bw1340 {
    flex-direction: column;
  }

  & + .article-card {
    margin-top: 120px;

    @media @bw1340 {
      margin-top: 100px;
    }

    @media @bw768 {
      margin-top: 80px;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      margin: 0 auto 60px;
      bottom: 100%;
      left: 0;
      right: 0;
      width: 100%;
      max-width: 1254px;
      height: 1px;
      background-color: @black;
      pointer-events: none;

      @media @bw1340 {
        margin-bottom: 50px;
      }

      @media @bw768 {
        margin-bottom: 40px;
      }
    }
  }

  &:hover {
    .article-card__picture {
      box-shadow: 0 0 30px fade(@black, 55%);
    }
  }

  &__link {
    flex-shrink: 0;
    align-self: flex-start;
    display: block;
    width: 467px;
    margin-right: 60px;
    font-size: 0;
    text-decoration: none;

    @media @bw1340 {
      width: 100%;
      margin-right: 0;
    }

    &:hover {
      & ~ .article-card__info {
        .article-card__title-link {
          color: @red;
          text-decoration-color: @red;
        }
      }
    }
  }

  &__picture {
    display: block;
    position: relative;
    width: 100%;
    transition: box-shadow 0.2s;
    overflow: hidden;

    &::after {
      content: "";
      display: block;
      width: 100%;
      padding-top: 62.3126%;
    }
  }

  &__img {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px 0;
    padding-right: 150px;

    @media @bw1340 {
      padding-bottom: 0;
      padding-top: 20px;
    }

    @media @bw768 {
      padding-bottom: 60px;
      padding-top: 10px;
      padding-right: 0;
    }
  }

  &__time {
    margin: 0 0 40px;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;

    @media @bw768 {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 20px;
    }
  }

  &__title-link,
  &__description {
    max-width: 470px;

    @media @bw1340 {
      max-width: 536px;
    }

    @media @bw768 {
      max-width: none;
    }
  }

  &__title-link {
    margin: auto 0 40px;
    color: @black;
    text-decoration-color: transparent;
    transition: color 0.2s, text-decoration-color 0.2s;

    @media @bw1340 {
      margin-bottom: 20px;
    }

    @media @bw768 {
      margin-bottom: 10px;
    }

    &:hover {
      color: @red;
      text-decoration-color: @red;
    }
  }

  &__title {
    margin: 0;
    color: inherit;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;

    @media @bw768 {
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
    }
  }

  &__description {
    margin: 0;
    font-size: 16px;
    line-height: 22px;

    @media @bw768 {
      font-size: 14px;
      line-height: 19px;
    }
  }

  &__arrow {
    position: absolute;
    right: 0;
    bottom: 30px;
    color: inherit;
    transition: none;

    @media @bw1340 {
      bottom: 0;
    }
  }
}
</style>
