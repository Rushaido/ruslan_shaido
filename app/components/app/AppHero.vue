<template>
  <div class="app-hero">
    <h1 class="app-hero__text">АРТ — ПРОСТРАНСТВО</h1>
    <TheLenni />
    <p class="app-hero__text">ДЛЯ ЛЮДЕЙ, ГОРЯЩИХ СЕРДЦЕМ И ДЕЛОМ</p>
    <p class="app-hero__text">МЕСТО ДЛЯ НАСТОЯЩЕГО</p>
  </div>
</template>

<script setup></script>

<style lang="less">
.app-hero {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__text {
    margin: 0;
    font-family: @font2;
    font-weight: 400;
    font-size: 45px;
    line-height: 58px;

    @media @bw1340 {
      font-size: 30px;
      line-height: 35px;
    }

    @media @bw768 {
      font-size: 13px;
      line-height: 17px;
    }
  }

}
</style>
