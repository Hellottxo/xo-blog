<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <h1 v-if="data.heroText !== null" id="main-title">
        X
        <clock/>'S BLOG
      </h1>

      <p
        v-if="data.tagline !== null"
        class="description"
      >{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>
    </header>

    <div class="tag-group">
      <p
        v-for="item in sidebarItems"
        class="tag"
        :class="{'tag-selected': item.key === selectTag }"
        :key="item.key"
        @click="chgHomeDisplay(item)"
      >{{item.title}}</p>
    </div>

    <div class="text-group">
      <div v-for="item in selectItems" class="text">
        <NavLink :item="item"/>
        <p class="text-footer">lastUpdated: {{ item.lastUpdated }}</p>
      </div>
    </div>

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
import clock from "../../components/loading/clock";

export default {
  name: "Home",

  data() {
    return {
      selectTag: "all"
    };
  },

  components: {
    NavLink,
    clock
  },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    },

    sidebarItems() {
      console.log(this);
      return [{ title: "全部", key: "all" }, ...this.$themeConfig.sidebar];
    },

    selectItems() {
      const res = [];
      const reg = /\/.*?\//g;
      this.$site.pages.forEach(v => {
        if (!v.title || v.title === "Home") return;
        const obj = { text: v.title, link: v.path, lastUpdated: v.lastUpdated };
        if (this.selectTag === "all") {
          res.push(obj);
          return;
        }
        const match = v.path.match(reg)[0];
        if (match && match.includes(this.selectTag)) {
          res.push(obj);
        }
      });
      return res;
    }
  },

  methods: {
    chgHomeDisplay(item) {
      this.selectTag = item.key;
    }
  }
};
</script>

<style lang="stylus">
.home {
  display: block;
  height: 100vh;
  overflow-y: auto;
  overflow-x hidden
  position: relative;

  @keyframes water-spin {
    100% {
      transform: rotate(calc(var(--spin-angle) + 360deg));
    }
  }

  .hero {
    text-align: center;
    position: relative;
    z-index: 2;
    margin: 0 0 1rem;
    padding: 7rem 2rem 1rem;

    img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    img:hover {
      animation: wave-spin 2s linear infinite;
    }

    @keyframes wave-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    h1 {
      font-size: 3rem;
      display: flex;
      justify-content: center;
      transform: scale(2);
    }

    h1, .description, .action {
      margin: 2rem auto;
    }

    .description {
      z-index: 22;
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }
  }

  .tag-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .tag {
    font-size: 1rem;
    background: $accentColor;
    color: #fff;
    padding: 0.5rem 0.6rem;
    margin: 0.2rem;
    border-radius: 0.3rem;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px 1px #00000047;
    cursor: pointer;
    transition: all 0.3s;

    &-selected {
      background: #fff;
      color: $accentColor;
    }

    &:hover {
      background: lighten($accentColor, 10%);
      color: #fff;
    }
  }

  .text-group {
    display: flex;
    max-width: 48rem;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: flex-end;
  }

  .text {
    background: #fff;
    width: 15rem;
    border: 1px solid #eaecef;
    border-radius: 0.3rem;
    margin: 0.8rem auto;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.122);
    transition: all 0.3s;
    flex-basis: 15rem;
    flex-grow: 1;
    margin: .3rem;

    a {
      display: block;
      margin: 1rem;
    }

    &-footer {
      margin: 0;
      font-size: 0.5rem;
      padding: 0.5rem;
      background: #f6f6f7;
      color: #9e9e9e;
    }

    &:hover {
      transform: rotate(3deg);
      max-width: 42rem;
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
