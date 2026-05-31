<template>
  <form class="subscribe-form" @submit.prevent="onSubmit">
    <label class="field subscribe-form__field">
      <span class="subscribe-form__label">Подпишись и будь в курсе происходящего</span>
      <div class="subscribe-form__send">
        <input
          v-model="email"
          class="subscribe-form__input field__input"
          placeholder="Email"
          name="sub_email"
        />
        <button class="btn btn--sub subscribe-form__btn">Подписаться</button>
      </div>
      
    </label>
    <span v-if="submitCount && !email" class="subscribe-form__error field-error">Это поле обязательно</span>
    <span v-else-if="submitCount && !isEmailValid" class="subscribe-form__error field-error">Введите корректный email</span>
    <label class="check subscribe-form__agree">
      <input
        v-model="agreement"
        class="check__input"
        type="checkbox"
        name="sub_agree"
      />
      <span class="check__mark"></span>
      <span class="subscribe-form__agree-label check__label--s">Согласен на обработку персональных данных</span>
    </label>
    <span v-if="submitCount && !agreement" class="subscribe-form__error field-error">Необходимо ваше согласие</span>
  </form>
</template>

<script setup>
const email = ref("");
const agreement = ref(0);

const submitCount = ref(0);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailValid = computed(() => emailRegex.test(email.value));

const onSubmit = () => {
  submitCount.value += 1;
  if (!isEmailValid.value || !agreement.value) return;

  console.log({
    email: email.value,
    agreement: agreement.value,
  });
  alert("Подписка оформлена");
};
</script>

<style lang="less">
.subscribe-form {
  display: flex;
  flex-direction: column;

  &__label {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin-top: 0;
    margin-bottom: 14px;

    @media @bw768 {
      font-size: 13px;
      line-height: 18px;
    }
  }

  &__error {
    margin-top: -9px;
    margin-bottom: 6px;
  }

  &__agree {
    margin-bottom: 15px;
  }

  &__send {
    display: flex;
    margin-bottom: 15px;
    max-width: 405px;
    min-width: 388px;
    width: 30%;

    @media @bw768 {
      width: 100vw;
      min-width: 0;
      max-width: none;
      margin-left: -20px;
    }
  }

  &__input {
    border-radius: 0;
    padding: 15px 28px;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    height: 49px;
    width: auto;
    flex: 1 1 auto;
    min-width: 0;

    @media @bw768 {
      height: 47px;
      padding: 14.5px 20px;
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__btn {
    flex: 0 0 auto;
    white-space: nowrap;
  }

  &__agree {
    display: flex;
    justify-content: center;
  }

  &__agree-label {
    margin: auto 0;

    @media @bw768 {
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
