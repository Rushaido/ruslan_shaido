<template>
  <label class="field form__field form__field--w50">
    <span class="field__label">{{ label }}</span>
    <input v-model="value" class="field__input" :type="type" :placeholder="placeholder" :name="name" />
    <span v-if="errorMessage" class="field-error">{{ errorMessage }}</span>
  </label>
</template>

<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  rules: { type: String, default: "" },
});

const { value, errorMessage } = useField(props.name, props.rules);
</script>
