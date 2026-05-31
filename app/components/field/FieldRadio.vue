<template>
  <div class="field form__field form__field--w50">
    <h6 class="field__title">Формат мероприятия:</h6>

    <div class="field__radio radio">
      <label class="radio__item">
        <input v-model="model" class="radio__input" type="radio" name="format" value="seminar" />
        <span class="radio__mark"></span>
        <span class="radio__label">Мастер-класс/семинар</span>
      </label>

      <label class="radio__item">
        <input v-model="model" class="radio__input" type="radio" name="format" value="concert" />
        <span class="radio__mark"></span>
        <span class="radio__label">Концерт/выступление</span>
      </label>

      <label class="radio__item">
        <input v-model="model" class="radio__input" type="radio" name="format" value="show" />
        <span class="radio__mark"></span>
        <span class="radio__label">Выставка/показ</span>
      </label>

      <label class="radio__item">
        <input v-model="model" class="radio__input" type="radio" name="format" value="other" />
        <span class="radio__mark"></span>
        <span class="radio__label">Другое</span>
      </label>
    </div>
  </div>
</template>

<script setup>
const model = defineModel();
</script>
