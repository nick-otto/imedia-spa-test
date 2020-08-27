<script>
  import {mapGetters} from 'vuex';
  import {getUserIdByPost, getNameByPost, getShrinkDesc, wasPostRead} from '@/common/helpers/postInfo.js';

  import PostDetail from '@/components/PostDetail';
  import Main from '@/components/Main';

  export default {
    name: 'Posts',

    components: {
      Main,
      PostDetail
    },

    computed: {
      ...mapGetters([
        'posts',
        'users'
      ])
    },

    methods: {
      getUserId(postCur) {
        return getUserIdByPost(postCur);
      },
      getName(postCur) {
        return getNameByPost(postCur, this.users);
      },
      getShrinkDesc(desc) {
        return getShrinkDesc(desc);
      },
      wasPostRead(postId) {
        return wasPostRead(postId);
      }
    }
  };
</script>

<template>
  <Main>
    <div class="posts-wrapper">
      <PostDetail
        v-for="postCur in posts"
        :key="postCur.uuid"
        :title="postCur.title"
        :desc="getShrinkDesc(postCur.body)"
        :name="getName(postCur)"
        :user-id="getUserId(postCur)"
        :post-id="postCur.id"
        :read="wasPostRead(postCur.id)"
        :show-nav="false"
      />
    </div>
  </Main>
</template>

<style scoped lang="scss">
 .posts-wrapper {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
 }
</style>
