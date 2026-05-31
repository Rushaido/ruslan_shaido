<template>
  <div class="form__check-list">
    <label class="form__check check">
      <input v-model="value" class="check__input" type="checkbox" name="agree" />
      <span class="check__mark"></span>
      <span class="check__label check__label--s">
        Я соглашаюсь с пользовательским соглашением и с политикой
        использования персональных данных
      </span>
    </label>
    <span v-if="errorMessage" class="field-error">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";

const { value, errorMessage } = useField("agree", "required");
</script>
