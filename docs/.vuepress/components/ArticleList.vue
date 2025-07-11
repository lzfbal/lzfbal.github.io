<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  isTimeline: Boolean,
})
</script>

<template>
  <div class="article-wrapper">
    <div
      v-for="(article, index) in items"
      :key="index"
      class="article"
      @click="$router.push(article.info.path)"
    >
      <h2 class="title">
        {{ article.info.title }}
      </h2>
      
      <div class="article-info">
        <span v-if="article.info.date">
          {{ article.info.date }}
        </span>
        <span v-if="article.info.category">
          {{ article.info.category }}
        </span>
        <span v-if="article.info.tags">
          {{ article.info.tags.join(', ') }}
        </span>
      </div>

      <div class="excerpt" v-if="!isTimeline && article.info.excerpt">
        {{ article.info.excerpt }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@vuepress/theme-default/styles/mixins';

.article-wrapper {
  @include mixins.content-wrapper;
  & {
    padding-top: calc(var(--navbar-height) + 1rem) !important;
    text-align: center;
  }
}

.article {
  & {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto 1.25rem;
    padding: 1rem 1.25rem;
    border: 1px solid var(--vp-c-border);
    border-radius: 0.4rem;
    color: var(--vp-c-text);
    text-align: start;
  }

  @media (max-width: 419px) {
    border-radius: 0;
  }

  &:hover {
    cursor: pointer;
  }

  .title {
    position: relative;
    display: inline-block;
    font-size: 1.28rem;
    line-height: 2rem;

    &::after {
      content: '';
      position: absolute;
      inset-inline-start: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: var(--vp-c-accent-bg);
      visibility: hidden;
      transition: transform var(--vp-t-transform);
      transform: scaleX(0);
    }

    &:hover::after {
      visibility: visible;
    }
  }

  .article-info {
    display: flex;
    flex-shrink: 0;

    > span {
      margin-inline-end: 0.5em;
      line-height: 1.8;
    }
  }

  .excerpt {
    h1 {
      display: none;
    }

    h2 {
      font-size: 1.2em;
    }

    h3 {
      font-size: 1.15em;
    }
  }
}
</style>