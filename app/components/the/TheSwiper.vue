<template>
  <div class="the-swiper">
    <Swiper
      :slides-per-view="slidesPerView"
      :space-between="20"
      :breakpoints="breakpoints"
      :free-mode="freeMode"
      :speed="speed"
      :grab-cursor="true"
      :modules="[Navigation, Pagination]"
      :navigation="{
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
      }"
      :pagination="{ clickable: true, el: '.swiper-pagination-bullets' }"
      class="the-swiper__slider"
    >
      <SwiperSlide
        v-for="(card, cardIndex) in list"
        :key="cardIndex"
        class="the-swiper__slide"
      >
        <component :is="component" :event="card" class="the-swiper__card" />
      </SwiperSlide>

      <template #container-end>
        <div class="swiper-footer">
          <button type="button" class="swiper-arrow-prev arrow arrow--left">
            <SvgIcon class="arrow__icon" name="arrow" width="92" height="62" />
          </button>

          <div class="swiper-pagination-bullets"></div>

          <button type="button" class="swiper-arrow-next arrow">
            <SvgIcon class="arrow__icon" name="arrow" width="92" height="62" />
          </button>
        </div>
      </template>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

defineProps({
  list: {
    type: Array,
    required: true
  },
  component: {
    type: [Object, String],
    required: true
  },
  slidesPerView: {
    type: [String, Number],
    default: 'auto'
  },
  spaceBetween: {
    type: Number,
    default: 20
  },
  freeMode: {
    type: Boolean,
    default: true
  },
  speed: {
    type: Number,
    default: 500
  },
  breakpoints: {
    type: Object,
    default: () => ({
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30
      },
      1020: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1340: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1660: {
        slidesPerView: 3,
        spaceBetween: 60
      }
    })
  }
})
</script>

<style lang="less">
.the-swiper {
  &__slider {
    width: 100%;
  }

  &__slide {
    box-sizing: border-box;
    height: auto;
    display: flex;
  }

  &__card {
    width: 100%;
  }
}

.swiper-footer {
  margin: 70px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 522px;
  width: 100%;
  gap: 20px;
}

.swiper-pagination-bullet {
  width: 15px;
  height: 2px;
  border-radius: 2px;
  background-color: @gray_dark;
  opacity: 1;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  background-clip: padding-box;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: @black;
}

.swiper-pagination-bullets.swiper-pagination-horizontal {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  bottom: auto;
  left: auto;
  width: auto;
  margin: 0 auto;

  .swiper-pagination-bullet {
    margin: 2px 3px;
  }
}
</style>
