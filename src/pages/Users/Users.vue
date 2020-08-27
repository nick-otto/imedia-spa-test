<script>
  import {mapGetters} from 'vuex';

  import UserInfo from '@/components/UserInfo';
  import Main from '@/components/Main';

  export default {
    name: 'Users',

    components: {
      Main,
      UserInfo
    },

    computed: {
      ...mapGetters([
        'posts',
        'users'
      ])
    },
  };
</script>

<template>
  <Main>
    <div class="users-wrapper">
      <UserInfo
        v-for="userCur in users"
        :key="userCur.uuid"
        :name="userCur.name"
        :username="userCur.username"
        :user-id="userCur.id"
      />
    </div>
  </Main>
</template>

<style scoped lang="scss">

</style>
