<template>
  <main class="home" aria-labelledby="main-title">
    <div class="home-wave" v-for="item in 3" :style="{'--wave-index': 4 - item}"/>
    <header class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" :alt="data.heroAlt || 'hero'">

      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

      <p
        v-if="data.tagline !== null"
        class="description"
      >{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>

      <p v-if="data.actionText && data.actionLink" class="action">
        <NavLink class="action-button" :item="actionLink"/>
      </p>
    </header>

    <div v-if="data.features && data.features.length" class="features">
      <div v-for="(feature, index) in data.features" :key="index" class="feature">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom"/>

    <div v-if="data.footer" class="footer">{{ data.footer }}</div>
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";

export default {
  name: "Home",

  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>

<style lang="stylus">
.home {
  display: block;
  height: 100vh;
  overflow: hidden;
  position: relative;

  &-wave {
    background: $accentColor;
    position: absolute;
    width: 400vh;
    height: 400vh;
    top: calc(var(--wave-index) * 3vh + 70vh);
    left: -200vh;
    border-radius: 170vh;
    animation: water-spin 10s linear infinite;
    --spin-angle: calc(var(--wave-index) * 70deg);
    transform: rotate(var(--spin-angle));
    opacity: calc(var(--wave-index) / 3);
  }

  @keyframes water-spin {
    100% {
      transform: rotate(calc(var(--spin-angle) + 360deg));
    }
  }

  .hero {
    text-align: center;
    position relative;
    z-index 2;
    margin 7rem 2rem 0;

    img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    img:hover {
      animation wave-spin 2s linear infinite;
    }

    @keyframes wave-spin {
      100% {
        transform rotate(360deg);
      }
    }

    h1 {
      font-size: 3rem;
    }

    h1, .description, .action {
      margin: 2rem auto;
    }

    .description {
      z-index 22;
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      background $accentColor
      color #fff
      padding: 0.8rem 1.6rem;
      border-radius: 1.6rem;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      box-shadow: 0px 0px 5px 1px #00000047;
      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .footer {
    padding: 2.5rem;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
