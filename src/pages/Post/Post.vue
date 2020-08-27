<script>
  import {mapGetters} from 'vuex';

  import PostDetail from '@/components/PostDetail';
  import Main from '@/components/Main';

  export default {
    name: 'Post',

    components: {
      Main,
      PostDetail
    },

    computed: {
      ...mapGetters([
        'posts',
        'users'
      ]),

      postCur() {
        return this.posts[this.$route.params.id - 1];
      },
      userId() {
        return this.postCur.userId;
      },
      name() {
        return this.users[this.userId - 1].name;
      }
    },
  };
</script>

<template>
  <Main>
    <div class="post-wrapper">
      <PostDetail
        :title="postCur.title"
        :desc="postCur.body"
        :name="name"
        :user-id="userId"
        :show-nav="false"
      />
    </div>
  </Main>
</template>

<style scoped lang="scss">

</style>
