<template>
  <form class="events-form form" @submit.prevent="onSubmit">
    <div class="form__list">
      <FieldRadio v-model="format" />

      <div class="form__group form__group--w50">
        <FieldSelect v-model="amount" />
        <FieldDate v-model="date" />
      </div>
    </div>

    <div class="form__section">
      <h6 class="form__section-title">Контактные данные:</h6>

      <div class="form__list">
        <FieldInput name="firstName" label="Имя*" placeholder="Имя" rules="required" />
        <FieldInput name="lastName" label="Фамилия*" placeholder="Фамилия" rules="required" />
        <FieldInput name="phone" label="Телефон*" placeholder="Телефон" type="tel" rules="required" />
        <FieldInput name="email" label="Email*" placeholder="Email" type="email" rules="required|email" />
      </div>
    </div>

    <FieldTextarea v-model="wishes" />

    <FieldCheck />

    <div class="form__btns">
      <button type="submit" class="btn form__submit form__submit--w50">Отправить</button>
      <button type="button" class="form__close-btn" @click="store.closeModal('getOffer')">Закрыть</button>
    </div>
  </form>
</template>

<script setup>
import { useForm } from "vee-validate";

const store = useStore();

const { handleSubmit } = useForm();

const format = ref("seminar");
const amount = ref("20");
const date = ref("");
const wishes = ref("");

const onSubmit = handleSubmit((values) => {
  console.log({ ...values, format: format.value, amount: amount.value, date: date.value, wishes: wishes.value });
  alert("Форма отправлена");
});
</script>
