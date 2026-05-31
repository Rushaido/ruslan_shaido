<template>
  <div class="app-want">
    <p class="app-want__title">Я ХОЧУ:</p>
    <div class="app-want__select">
      <button type="button" class="btn btn--red app-want__btn" @click="openOffer">
        Провести мероприятие
      </button>
      <button type="button" class="btn app-want__btn">Стать арендатором</button>
    </div>
    <ModalWindow alive :name="'getOffer'" :title="'Заполните форму<br />и мы подберем площадку'">
      <EventsForm />
    </ModalWindow>
  </div>
</template>

<script setup>
const store = useStore();

const openOffer = () => {
  store.openModal('getOffer');
}
</script>

<style lang="less">
.app-want {
  .container();
  margin-top: 100px;
  margin-bottom: 200px;

  @media @bw1340 {
    margin-top: 73px;
    margin-bottom: 130px;
  }

  @media @bw768 {
    margin-top: 40px;
    margin-bottom: 100px;
  }

  &__title {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 46px;
    font-family: @font2;
    font-size: 22px;
    line-height: 30px;

    @media @bw1340 {
      margin-bottom: 43px;
      font-size: 16px;
      line-height: 20px;
    }

    @media @bw768 {
      margin-bottom: 25px;
      font-size: 13px;
      line-height: 17px;
    }
  }

  &__select {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 624px;
    margin: 0 auto;

    @media @bw1660 {
      width: 604px;
    }

    @media @bw1340 {
      width: 566px;
    }

    @media @bw768 {
      flex-direction: column-reverse;
      gap: 25px;
      width: auto;
    }
  }
}
</style>
