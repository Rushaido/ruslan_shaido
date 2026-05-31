<template>
  <label class="field form__field">
    <span class="field__title">Есть пожелания? Напишите&nbsp;нам:</span>
    <textarea v-model="model" class="field__textarea" name="wishes"></textarea>
  </label>
</template>

<script setup>
const model = defineModel();
</script>
