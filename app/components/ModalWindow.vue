<template>
  <ClientOnly>
    <teleport to="body">
      <transition>
      <div v-if="alive || isActive" v-show="isActive" v-keyup="onKeyup" class="modal-window">
        <div class="modal-window__wrapper">
          <div class="modal-window__sticky-close">
            <button type="button" title="Закрыть" class="modal-window__x-btn x-btn" @click="close">
              <SvgIcon class="x-btn__icon" name="x" width="24" height="24" />
            </button>
          </div>

          <div class="modal-window__container">
            <h2 class="modal-window__title" v-html="title"></h2>

            <slot></slot>
          </div>
        </div>
      </div>
      </transition>
    </teleport>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ""
  },
  alive: {
    type: Boolean,
    default: false
  }
})

const store = useStore();
const isActive = computed(() => {
  return props.name ? store.modal[props.name] : null;
})

const close = () => {
  if (props.name) store.closeModal(props.name);
}

const onKeyup = (evt) => {
  if (evt.key === 'Escape') close();
}
</script>

<style lang="less">
.modal-window {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 90px 95px 50px;
  background-color: rgba(28, 27, 27, 0.8);
  @supports (backdrop-filter: blur(50px)) {
    background-color: rgba(28, 27, 27, 0.4);
    backdrop-filter: blur(50px);
  }
  overflow-y: auto;
  z-index: 110;
  display: flex;

  &__wrapper {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1210px;
    margin: auto;
    background-color: @gray;
    background-image: url(@/assets/images/noise.png);
    background-position: 0 0;
    background-size: auto;
    background-repeat: repeat;
  }

  &__container {
    box-sizing: border-box;
    width: 100%;
    max-width: 950px;
    margin: 0 auto;
    padding: 0 40px 40px;
  }

  &__sticky-close {
    position: sticky;
    top: 0;
    align-self: flex-end;
    width: 0;
    height: 0;
  }

  &__x-btn {
    position: absolute;
    top: -30px;
    right: -30px;
  }

  &__title {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: -40px 0 70px -85px;
    padding: 10px 85px;
    width: 595px;
    min-height: 80px;
    background-color: @black;
    text-transform: uppercase;
    font-weight: 400;
    font-family: @font2;
    font-size: 22px;
    line-height: 1.36;
    color: @white;
    letter-spacing: 0.02em;
    z-index: 1;
  }
}
</style>
