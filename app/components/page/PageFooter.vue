<template>
  <footer class="page-footer">
    <div class="page-footer__top"></div>
    <div class="page-footer__main">
      <div class="page-footer__select">
        <nav class="page-footer__menu">
          <a href="#" class="page-footer__menu-link link">Календарь мероприятий</a>
          <a href="#" class="page-footer__menu-link link">Провести мероприятие</a>
          <a href="#" class="page-footer__menu-link link">Стать арендатором</a>
          <a href="#" class="page-footer__menu-link link">Наши проекты</a>
          <a href="#" class="page-footer__menu-link link">Контакты</a>
        </nav>
      </div>
      <SubscribeForm />
    </div>
    <div class="page-footer__bottom">
      <nav class="page-footer__meta">
        <span class="page-footer__copyright">© Millennials 2025</span>
        <a href="#" class="page-footer__policy link">Политика конфиденциальности</a>
        <a href="#" class="page-footer__cookies link">Cookies</a>
      </nav>
      <div class="page-footer__socials">
        <a href="#" class="x-btn page-footer__x-btn">
          <SvgIcon class="x-btn__icon" name="vk" width="24" height="24" />
        </a>
        <a href="#" class="x-btn page-footer__x-btn">
          <SvgIcon class="x-btn__icon" name="x" width="24" height="24" />
        </a>
      </div>
      <div class="page-footer__creators">
        <span class="page-footer__label page-footer__label--c">Создание и продвижение</span>
        <SvgIcon class="page-footer__logo" name="dc_logo" width="80" height="36" />
      </div>
    </div>
  </footer>
</template>

<style lang="less">
.page-footer {
  flex: 0 0 auto;
  padding-top: 50px;
  padding-bottom: 75px;
  .container();

  &__top {
    position: relative;
    height: 2px;
    margin-bottom: 60px;
  }

  &__top::before,
  &__top::after {
    content: "";
    position: absolute;
    top: 0;
    width: 46%;
    height: 2px;
  }

  &__top::before {
    left: 0;
    background: linear-gradient(270deg, rgba(28, 27, 27, 1), rgba(255, 255, 255, 0) 75%);
  }

  &__top::after {
    right: 0;
    background: linear-gradient(to right, rgba(28, 27, 27, 1), rgba(255, 255, 255, 0) 75%);
  }

  &__select {
    grid-area: select;
    display: flex;
    position: relative;
    padding-left: 26px;
  }

  &__select::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: @red;
  }

  &__menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;

    @media @bw768 {
      gap: 27px;
    }
  }

  &__menu-link {
    @media @bw1340 {
      font-size: 16px;
      line-height: 22px;
    }

    @media @bw768 {
      font-size: 14px;
      line-height: 19px;
    }
  }

  &__main {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 60px;

    @media @bw768 {
      flex-direction: column;
      gap: 60px;
    }
  }

  &__label--c {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin: 0;

    @media @bw1340 {
      font-size: 14px;
      line-height: 19px;
    }

    @media @bw768 {
      font-size: 14px;
      line-height: 19px;
    }
  }

  &__bottom {
    display: grid;
    grid-template-areas: "meta socials creators";
    grid-template-columns: 1fr auto 1fr;

    @media @bw1340 {
      grid-template-areas:
        "socials socials socials"
        "meta meta creators";
      row-gap: 60px;
    }

    @media @bw768 {
      grid-template-areas:
        "socials"
        "meta"
        "creators";
      grid-template-columns: auto;
      row-gap: 20px;
    }
  }

  &__meta {
    grid-area: meta;
    display: grid;
    grid-template-areas:
      "copyright copyright"
      "policy cookies";
    row-gap: 20px;
    column-gap: 60px;
    justify-content: start;
    justify-items: start;

    @media @bw1340 {
      gap: 14px 15px;
    }

    @media @bw768 {
      grid-template-areas:
        "policy"
        "cookies"
        "copyright";
      justify-content: stretch;
      gap: 15px;
    }
  }

  &__copyright {
    grid-area: copyright;

    @media @bw768 {
      justify-self: end;
      margin-top: 5px;
    }
  }

  &__policy {
    grid-area: policy;
  }

  &__cookies {
    grid-area: cookies;
  }

  &__socials {
    grid-area: socials;
    display: flex;
    justify-self: center;

    @media @bw768 {
      margin-bottom: 40px;
    }
  }

  &__x-btn {
    width: 58px;
    height: 58px;
    margin: 0 22px;

    @media @bw768 {
      margin: 0 15px;
      width: 48px;
      height: 48px;
    }
  }

  &__creators {
    grid-area: creators;
    display: inline-flex;
    justify-content: end;
    align-items: end;
    gap: 9px;
  }

  &__logo {
    margin-bottom: -7px;
  }
}
</style>
