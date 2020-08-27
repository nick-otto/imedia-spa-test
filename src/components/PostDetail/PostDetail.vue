<script>
  import VueTypes from 'vue-types';

  import {localStorageGet, localStorageSet} from '@/common/helpers/localStorage.js';
  import Main from '@/components/Main';

  export default {
    name: 'PostDetail',

    components: {
      Main
    },

    props: {
      title: VueTypes.string.isRequired,
      desc: VueTypes.string.isRequired,
      name: VueTypes.string.isRequired,
      userId: VueTypes.number,
      postId: VueTypes.number,
      read: VueTypes.boolean,
      showNav: VueTypes.boolean
    },

    methods: {
      saveProgress(postId) {
        localStorageSet('postsRead', {
          ...localStorageGet('postsRead'),
            [postId]: true
        })
      },

      handleClick(postId) {
        this.saveProgress(postId);
      }
    }
  };
</script>

<template>
  <Main :show-nav="showNav">
    <div class="post-detail-wrapper" :class="read ? 'read' : ''">
      <div class="title">
        <router-link v-if="postId" :to="`/post/${postId}`">
          <span @click="handleClick(postId)">
            {{ title }}
          </span>
        </router-link>

        <span v-else>
          {{ title }}
        </span>
      </div>

      <div class="desc">
        {{ desc }}
      </div>

      <div v-if="userId !== undefined" class="name">
        <span>
          Автор:
        </span>

        <router-link :to="`/user/${userId}`">
          {{ name }}
        </router-link>
      </div>
    </div>
  </Main>
</template>

<style scoped lang="scss">
  .post-detail-wrapper {
    margin-top: 20px;

    &:nth-child(1) {
      margin-top: 0;
    }

    &.read {
      opacity: 0.7;
    }
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .desc {
    font-style: italic;
  }

  .name {
    font-size: 12px;
    margin-top: 7px;
  }
</style>
