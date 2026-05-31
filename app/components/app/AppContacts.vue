<template>
  <section class="app-contacts">
    <div class="app-contacts__title section-title">КОНТАКТЫ</div>

    <div class="app-contacts__content">
      <div class="app-contacts__list">
        <ContactsCard v-for="card in contacts" :key="card.title" :card="card" />
      </div>

      <div class="app-contacts__map-container">
        <TheMap class="app-contacts__map" />
      </div>
    </div>
  </section>
</template>

<script setup>
const contacts = [
  {
    icon: 'location',
    title: 'Томск, Красноармейская 146',
    lines: [
      { text: '2 этаж' },
      { text: 'оф. 206' }
    ]
  },
  {
    icon: 'home',
    title: 'Отдел аренды',
    lines: [
      { text: '8 (3822) 90-72-56', href: 'tel:+73822907256' },
      { text: 'idat@tusur.ru', href: 'mailto:idat@tusur.ru' }
    ]
  },
  {
    icon: 'star',
    title: 'Отдел мероприятий',
    lines: [
      { text: '8 (3822) 90-72-56', href: 'tel:+73822907256' },
      { text: 'idat@tusur.ru', href: 'mailto:idat@tusur.ru' }
    ]
  }
]
</script>

<style lang="less">
.app-contacts {
  .container();
  margin-bottom: 150px;

  @media @bw1660 {
    margin-bottom: 130px;
  }

  @media @bw1340 {
    margin-bottom: 100px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media @bw1340 {
      flex-direction: column-reverse;
      gap: 100px;
    }

    @media @bw768 {
      gap: 60px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 67px;

    @media @bw1340 {
      display: grid;
      grid-template-columns: max-content 1fr max-content;
      column-gap: 0;
      row-gap: 0;
      width: 100%;
    }

    @media @bw768 {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  }

  &__map-container {
    width: 750px;
    height: 490px;
    margin-left: auto;

    @media @bw1020 {
      width: 100%;
      height: 465px;
      margin-bottom: 125px;
    }

    @media @bw768 {
      margin-bottom: 65px;
    }
  }

  &__map {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
