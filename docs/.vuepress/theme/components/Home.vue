<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <h1 v-if="data.heroText !== null" id="main-title">
        <p class="title">
          X
          <clock/>'S BLOG
        </p>
        <p v-if="data.tagline !== null" class="description">
          /*
          <span>{{slogan}}</span>
          <span class="slogan">|</span>
          */
        </p>
      </h1>
    </header>

    <div class="content-container">
      <div class="tag-group">
        <p
          v-for="item in sidebarItems"
          class="tag"
          :class="{'tag-selected': item.key === selectTag }"
          :key="item.key"
          @click="chgHomeDisplay(item)"
        >{{item.title}}</p>
      </div>

      <transition-group name="list-complete" tag="div" class="text-group">
        <div
          v-for="(item, index) in selectItems.list"
          class="text"
          :key="item.link"
          :class="{'text-selected': index < selectItems.selectCount}"
        >
          <NavLink :item="item"/>
          <div class="text-footer">
            <span>{{item.lastUpdated}}</span>
            <NavLink :item="{text: '阅 读', link: item.link}"/>
          </div>
        </div>
      </transition-group>
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
import { setTimeout } from "timers";

export default {
  name: "Home",

  data() {
    return {
      selectTag: "all",
      slogan: ""
    };
  },

  components: {
    NavLink,
    clock
  },

  mounted() {
    this.setSloganAnimation();
  },

  unmouted() {
    this.sloganInterval = null;
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
      return [{ title: "全部", key: "all" }, ...this.$themeConfig.sidebar];
    },

    selectItems() {
      const selectItems = [];
      const reg = /\/.*?\//g;
      const otherItems = [];
      this.$site.pages.forEach(v => {
        if (!v.title || v.title === "Home") return;
        const obj = { text: v.title, link: v.path, lastUpdated: v.lastUpdated };
        if (this.selectTag === "all") {
          otherItems.push(obj);
          return;
        }
        const match = v.path.match(reg)[0];
        if (match && match.includes(this.selectTag)) {
          selectItems.push(obj);
        } else {
          otherItems.push(obj);
        }
      });
      return {
        selectCount: selectItems.length,
        list: [...selectItems, ...otherItems]
      };
    }
  },

  methods: {
    chgHomeDisplay(item) {
      this.selectTag = item.key;
    },
    setSloganAnimation(reverse) {
      if (this.slogan === undefined || !this.data.tagline) return;
      const sloganLen = this.slogan.length;
      const taglineLen = this.data.tagline.length;
      let flag = (reverse && sloganLen !== 0) || sloganLen === taglineLen;
      let time = flag ? 100 : 200
      if ((!reverse && sloganLen === taglineLen - 1) || (reverse && sloganLen === 1)) {
        time = 600;
      }
      const len = flag ? sloganLen - 1 : sloganLen + 1;
      this.slogan = this.data.tagline.slice(0, len);
      this.sloganInterval = setTimeout(() => this.setSloganAnimation(flag), time);
    }
  }
};
</script>

<style lang="stylus">
.home {
  display: block;
  position: relative;
  height: 100vh;

  @keyframes water-spin {
    100% {
      transform: rotate(calc(var(--spin-angle) + 360deg));
    }
  }

  .hero {
    text-align: center;
    position: relative;
    z-index: 2;
    height: 100vh;
    display: flex;
    flex-direction: column;

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
      height: 100vh;
      align-items: center;
      margin: 0;
      flex-direction: column;
    }

    .title {
      display: flex;
      align-items: center;
    }

    .action {
      margin: 2rem auto;
    }

    .description {
      z-index: 22;
      max-width: 35rem;
      font-size: 16px;
      line-height: 1.3;
      font-weight: normal;
      color: $accentColor;
      letter-spacing: 6px;
    }
    .slogan {
      animation cursor 0.7s infinite alternate-reverse
    }
    @keyframes cursor {
      100% {
        opacity 0
      }
    }
  }

  $content-bgColor = #f8fafc;

  .content-container {
    min-height: 100vh;
    background: $content-bgColor;
  }

  .tag-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 0 1rem;
    padding-top: 5rem;
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
    max-width: 50rem;
    flex-wrap: wrap;
    margin: 1rem auto 0;
    justify-content: flex-end;
  }

  base-border = 1px solid $accentColor;

  .text {
    border: base-border;
    width: 15rem;
    border-radius: 0.5rem;
    transition: all 0.3s;
    flex-basis: 15rem;
    flex-grow: 1;
    margin: 0.5rem;
    position: relative;

    a {
      display: block;
      margin: 1rem;
    }

    &-footer {
      font-size: 0.5rem;
      margin: 0 0.8rem;
      padding: 0.5rem 0;
      color: #9e9e9e;
      display: flex;
      border-top: 1px dashed;
      justify-content: space-between;
      align-items: center;

      a {
        margin: 0;
        padding: 0.1rem 0.8rem;
        background: $accentColor;
        color: #fff;
        border-radius: 0.8rem;
      }
    }

    size = 0.8rem;
    radius = (size / 2);

    &::before {
      content: '';
      height: size;
      width: radius;
      background: $content-bgColor;
      position: absolute;
      bottom: 1.8rem;
      border-bottom-right-radius: radius;
      border-top-right-radius: radius;
      left: -1px;
      border-right: base-border;
      border-top: base-border;
      border-bottom: base-border;
      border-left: 1px solid $content-bgColor;
    }

    &::after {
      content: '';
      height: size;
      width: radius;
      background: $content-bgColor;
      position: absolute;
      bottom: 1.8rem;
      border-bottom-left-radius: radius;
      border-top-left-radius: radius;
      right: -1px;
      border-left: base-border;
      border-top: base-border;
      border-bottom: base-border;
      border-right: 1px solid $content-bgColor;
    }
  }

  .text-selected {
    background: $accentColor;

    a {
      color: #fff;
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

.list-complete-item {
  transition: all 0.2s;
}

.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: rotate(15deg);
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
