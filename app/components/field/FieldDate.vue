<template>
  <div class="form__field field">
    <h6 class="field__title">Дата проведения:</h6>
    <div class="field__date-inputs">
      <input v-model="day" class="field__date-input" type="text" placeholder="ДД" maxlength="2" />
      <input v-model="month" class="field__date-input" type="text" placeholder="ММ" maxlength="2" />
      <input v-model="year" class="field__date-input field__date-input--year" type="text" placeholder="ГГГГ" maxlength="4" />
    </div>
  </div>
</template>

<script setup>
const model = defineModel();

const day = ref("");
const month = ref("");
const year = ref("");

watch([day, month, year], ([d, m, y]) => {
  model.value = [d, m, y].filter(Boolean).join(".");
});
</script>
