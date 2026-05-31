<template>
  <section class="app-about">
    <div class="app-about__section-title section-title">О НАС</div>

    <div class="app-about__intro">
      <h2 class="app-about__title app-about__title--intro">Проект «Millennials»</h2>
      <p class="app-about__text app-about__text--intro">
        Вдохновлен молодыми идейными людьми, увлеченными творчеством, эмоциями и
        желанием сделать мир лучше, проявить себя. У них есть талант и стремление,
        у нас возможность помочь им воплотить их мечту в реальность.
      </p>
    </div>

    <div class="app-about__block">
      <picture class="app-about__picture">
        <img src="@/assets/images/about/about-main.jpg" class="app-about__img" alt="pic" />
      </picture>
      <h3 class="app-about__title">
        Мы предоставляем площади для вашего мероприятия
      </h3>
      <picture class="app-about__picture2">
        <img src="@/assets/images/about/about-side.jpg" class="app-about__img" alt="pic" />
      </picture>
      <p class="app-about__text">
        И оказываем помощь с организацией, если вам это нужно. <br />
        Наша цель: вовлечь в культурную жизнь города как можно больше людей,
        помочь молодым ребятам сделать первые шаги к своей мечте и рассказать всем
        о том, что их волнует.
      </p>
    </div>

    <div class="app-about__cta">
      <picture class="app-about__picture3">
        <img
          src="@/assets/images/about/about-cta.jpg"
          class="app-about__img app-about__img--cta"
          alt="Городское пространство с людьми"
        />
      </picture>
      <p class="app-about__text app-about__text--cta">
        Мы уже успешно организовали и провели более 100 проектов. Посмотрите,
        как это было классно.
      </p>
      <a class="app-about__cta-link link" href="#">
        <span class="app-about__cta-link-text">Смотреть</span>
        <div class="app-about__cta-arrow arrow">
          <SvgIcon class="arrow__icon" name="arrow" width="91" height="60" />
        </div>
      </a>
    </div>
  </section>
</template>

<script setup></script>

<style lang="less">
.app-about {
  .container();
  margin-bottom: 73px;

  @media @bw1340 {
    margin-bottom: 150px;
  }

  @media @bw768 {
    margin-bottom: 100px;
  }

  &__block {
    display: grid;
    grid-template-columns: 1fr 406px;
    gap: 90px 65px;
    grid-template-areas:
      "pic pic2"
      "title pic2"
      "text text";
    margin-bottom: 75px;

    @media @bw1660 {
      grid-template-columns: 1fr 393px;
      gap: 90px 40px;
    }

    @media @bw1340 {
      grid-template-areas:
        "pic pic"
        "title pic2"
        "text pic2";
      grid-template-columns: 1fr 262px;
      gap: 40px 30px;
    }

    @media @bw768 {
      grid-template-columns: 1fr;
      grid-template-areas:
        "pic"
        "title"
        "text";
      gap: 30px;
      margin-bottom: 50px;
    }
  }

  &__picture {
    grid-area: pic;

    @media @bw1340 {
      margin-bottom: 10px;
    }

    @media @bw768 {
      margin-bottom: 0;
    }
  }

  &__picture2 {
    grid-area: pic2;
    align-self: flex-end;

    @media @bw768 {
      display: none;
    }
  }

  &__picture3 {
    grid-area: pic3;
    position: relative;
    z-index: 1;
    display: inline-block;
    margin: 20px 10px 0 50px;

    @media @bw1660 {
      margin-left: 40px;
    }

    @media @bw1340 {
      margin: 15px 7px 0 30px;
      width: fit-content;
    }

    @media @bw768 {
      margin: 15px 0 0 15px;
      width: calc(100% - 15px);
    }

    &::before {
      content: "";
      position: absolute;
      top: -20px;
      left: -50px;
      width: calc(100% + 50px + 10px);
      height: 246px;
      background-color: @red;
      z-index: -1;

      @media @bw1660 {
        left: -40px;
        width: calc(100% + 40px + 10px);
      }

      @media @bw1340 {
        left: -30px;
        top: -15px;
        width: calc(100% + 30px + 7px);
      }

      @media @bw768 {
        top: -15px;
        left: -15px;
        width: 15px;
        height: 130px;
      }
    }
  }

  &__img {
    &--cta {
      @media @bw1660 {
        max-width: 821px;
        max-height: 342px;
      }

      @media @bw1340 {
        max-width: 672px;
      }

      @media @bw768 {
        max-width: 100%;
        max-height: none;
      }
    }
  }

  &__title {
    grid-area: title;
    margin: 10px 0 0;
    font-size: 44px;
    font-weight: 700;

    @media @bw1340 {
      font-size: 26px;
      line-height: 35px;
      margin: 28px 0 0;
    }

    @media @bw768 {
      font-size: 18px;
      line-height: 25px;
      margin: 0;
    }

    &--intro {
      margin: 0 0 50px;

      @media @bw1340 {
        margin: 0 0 50px;
      }

      @media @bw768 {
        margin-bottom: 30px;
      }
    }
  }

  &__text {
    grid-area: text;
    font-size: 18px;
    line-height: 25px;
    margin: 0 80px 0 auto;
    max-width: 870px;
    width: 100%;

    @media @bw1660 {
      margin-right: 0;
      max-width: 830px;
    }

    @media @bw1340 {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 28px;
      max-width: 348px;
    }

    @media @bw768 {
      max-width: none;
      margin: 0;
    }

    &--intro {
      margin: 0 0 0 auto;

      @media @bw1660 {
        max-width: 830px;
      }

      @media @bw1340 {
        max-width: 640px;
      }

      @media @bw768 {
        max-width: none;
        margin: 0;
      }
    }

    &--cta {
      margin: 0;
      align-self: center;

      @media @bw1340 {
        max-width: 280px;
      }

      @media @bw768 {
        max-width: none;
      }
    }
  }

  &__intro {
    margin-bottom: 100px;

    @media @bw1340 {
      margin-bottom: 80px;
    }

    @media @bw768 {
      margin-bottom: 50px;
    }
  }

  &__cta {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 60px 1fr 60px;
    grid-template-areas:
      "pic3 ."
      "pic3 text"
      "pic3 link";
    column-gap: 60px;
    margin-bottom: 0;

    @media @bw1340 {
      grid-template-areas:
        "pic3 pic3"
        "text link";
      grid-template-rows: auto;
      row-gap: 80px;
    }

    @media @bw768 {
      grid-template-columns: 1fr;
      grid-template-areas:
        "pic3"
        "text"
        "link";
      row-gap: 30px;
    }
  }

  &__cta-link {
    grid-area: link;
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
      color: @red;
      text-decoration-color: @red;
    }
  }

  &__cta-arrow {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
