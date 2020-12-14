<template>
  <main class="home" aria-labelledby="main-title">
    <section class="hero">
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
      <div class="bottom-notice">V</div>
    </section>

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
          <span class="excerpt" v-html="item.excerpt">{{item.excerpt}}</span>
          <div class="text-footer">
            <span>{{item.lastUpdated}} 🕤</span>
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
        const obj = { text: v.title, link: v.path, lastUpdated: v.lastUpdated, excerpt: v.excerpt };
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

  .hero {
    text-align: center;
    position: relative;
    background: #FAFAFA;
    z-index: 20;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .bottom-notice {
      font-size 20px
      transform scaleY(0.5)
      animation trangle 0.8s infinite alternate-reverse
    }

    @keyframes trangle {
      0% {
        transform scaleY(0.5) translateY(-8px);
      }
      100% {
        transform scaleY(0.5) translateY(8px);
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

  .content-container {
    min-height: 100vh;
    display: flow-root;
  }

  .tag-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 5rem;
  }

  .tag {
    font-size: 1rem;
    width 100px
    text-align center
    background: $accentColor;
    color: #fff;
    padding: 0.5rem 0.6rem;
    margin 0
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
    max-width: 50rem;
    margin: 1rem auto;
  }

  .excerpt * {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    color: #9E9E9E;
    font-weight normal
  }

  .text {
    font-size: 1.2rem;
    transition: all 0.3s;
    flex-basis: 15rem;
    flex-grow: 1;
    margin: 1.5rem;
    position: relative;
    background: #fff;
    padding: 1.5rem;
    box-shadow: 2px 2px 12px 2px #EEEEEE;
    border-radius: 8px;

    a {
      display: block;
      &:hover {
        color lighten($accentColor, 20%)
      }
    }

    &-footer {
      font-size: 0.5rem;
      padding: 1rem 0;
      color: #9e9e9e;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .text:hover {
    transform rotate(1deg)
  }

  .text-selected {
    border 1px dashed
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
