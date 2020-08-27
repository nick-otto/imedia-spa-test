<script>
  import {mapGetters} from 'vuex';
  import VueTypes from 'vue-types';

  import Header from '@/components/Header';

  export default {
    name: 'Main',

    components: {
      Header
    },

    props: {
      showNav: VueTypes.boolean
    },

    computed: {
      ...mapGetters([
        'posts',
        'users'
      ]),
    }
  }
</script>

<template>
  <div v-if="posts.length > 0 && users.length > 0" class="main">
    <Header v-if="showNav !== false" />

    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 50px;

    > * {
      max-width: 600px;
    }
  }
</style>
