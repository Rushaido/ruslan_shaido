<template>
  <div class="app-quote">
    <span class="app-quote__chunk">Просто делайте,</span>
    <span class="app-quote__chunk">что нравится,</span>
    <span class="app-quote__chunk">а мы вам поможем</span>
  </div>
</template>

<style lang="less">
.app-quote {
  font-family: @font3;
  font-size: 6.7vw;
  font-weight: 700;
  line-height: 120%;
  display: grid;
  grid-template-areas:
    "first second"
    "third third";
  grid-template-columns: auto auto;
  width: max-content;
  text-align: center;
  column-gap: 0.25em;
  margin-left: -2vw;

  @media @bw1340 {
    grid-template-areas:
      "first"
      "second"
      "third";
    grid-template-columns: auto;
    width: 113vw;
    font-size: 10.2vw;
  }

  @media @bw768 {
    width: 140vw;
    font-size: 12.5vw;
    margin-left: -20vw;
  }

  &__chunk {
    display: block;

    &:nth-child(1) {
      grid-area: first;
      justify-self: start;

      @media @bw768 {
        justify-self: center;
      }
    }

    &:nth-child(2) {
      grid-area: second;
      justify-self: end;
    }

    &:nth-child(3) {
      grid-area: third;
      justify-self: end;

      @media @bw768 {
        justify-self: center;
      }
    }
  }
}
</style>
