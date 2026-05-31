<template>
  <div class="app-hero__wrapper">
    <SvgIcon class="app-hero__lenni" name="lenni" width="1920" />
  </div>
</template>

<script setup></script>

<style lang="less">
.app-hero {
  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__lenni {
    margin: 70px 0;
    width: 1920px;
    aspect-ratio: 1920 / 325;

    @media @bw1660 {
      width: 113%;
      margin: 70px -6.5%;
    }

    @media @bw1340 {
      width: 126%;
      margin: 50px -13%;
    }

    @media @bw768 {
      width: 136%;
      margin: 28px -18%;
    }
  }
}
</style>
