<script>
  import {mapGetters} from 'vuex';
  import VueTypes from 'vue-types';
  import {getShrinkDesc, wasPostRead} from '@/common/helpers/postInfo.js';

  import PostDetail from '@/components/PostDetail';
  import UserInfo from '@/components/UserInfo';
  import Main from '@/components/Main';

  export default {
    name: 'UserDetail',

    components: {
      Main,
      UserInfo,
      PostDetail
    },

    props: {
      userId: VueTypes.number.isRequired,
      showNav: VueTypes.boolean
    },

    computed: {
      ...mapGetters([
        'posts',
        'users'
      ]),

      postsByUserId() {
        return this.posts.filter(cur => cur.userId === this.userId);
      },
      userInfo() {
        return this.users[this.userId - 1];
      }
    },
    methods: {
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
  <Main :show-nav="showNav">
    <div class="user-detail-wrapper">
      <UserInfo
        :name="userInfo.name"
        :username="userInfo.username"
      />

      <div v-if="postsByUserId.length === 0" class="posts-empty">
        У выбранного автора пока нет статей
      </div>

      <div v-else class="posts-wrapper">
        <PostDetail
          v-for="postCur in postsByUserId"
          :key="postCur.uuid"
          :title="postCur.title"
          :desc="getShrinkDesc(postCur.body)"
          :name="userInfo.name"
          :user-id="userInfo.id"
          :post-id="postCur.id"
          :read="wasPostRead(postCur.id)"
          :show-nav="false"
        />
      </div>
    </div>
  </Main>
</template>

<style scoped lang="scss">
  .posts-wrapper {
    margin-top: 17px;
  }
</style>
