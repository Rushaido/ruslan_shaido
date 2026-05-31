<template>
  <section class="app-service">
    <h2 class="app-service__title section-title">Дополнительные услуги</h2>
    <p class="app-service__description">
      Перед запуском проекта, мы подготавливаем подробную смету и согласуем ее с клиентом.
      Убедившись, что все пожелания учтены и мы можем приступать к реализации проекта, начинается сложная,
      но интересная работа, результатом которой будет проведение вашего мероприятия на высшем уровне.
    </p>

    <AppTable :headers="tariffs.headers" :data="tariffs.data" />
  </section>
</template>

<script setup>
const tariffs = ref({
  headers: ['Тариф «Light»', 'Тариф «Promo»', 'Тариф «All stars»'],
  data: [
    { header: 'Стоимость за час',         values: ['1 000 ₽', '3 000 ₽', 'от 6 000 ₽'] },
    { header: 'Ведущий мероприятия',      values: ['',         true,       true         ] },
    { header: 'Фотосъемка',               values: [true,       true,       true         ] },
    { header: 'Видеосъемка',              values: ['',         '',         true         ] },
    { header: 'Организация питания',      values: ['',         true,       true         ] },
    { header: 'Декор',                    values: ['',         '',         true         ] },
    { header: 'Звуковое сопровождение',   values: ['',         true,       true         ] },
    { header: 'Дополнительное освещение', values: ['',         '',         true         ] },
    { header: 'Клининг',                  values: ['',         '',         true         ] },
  ]
})
</script>

<style lang="less">
.app-service {
  .container();
  margin-bottom: 50px;

  &__title {
    font-size: 22px;
  }

  &__description {
    margin-bottom: 30px;
  }
}
</style>
