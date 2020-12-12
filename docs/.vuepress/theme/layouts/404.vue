<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <man/>
      
      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">Take me home.</RouterLink>
    </div>
  </div>
</template>

<script>
import man from "../../components/loading/matchman";

const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
];

export default {
  components: {
    man
  },
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    }
  }
};
</script>
