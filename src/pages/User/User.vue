<script>
  import UserDetail from '@/components/UserDetail';
  import Main from '@/components/Main';

  export default {
    name: 'User',
    components: {
      Main,
      UserDetail
    },

    computed: {
      userId() {
        return parseInt(this.$route.params.id);
      },
    }
  };
</script>

<template>
  <Main>
    <div class="user-detail-wrapper">
      <UserDetail :user-id="userId" :show-nav="false" />
    </div>
  </Main>
</template>

<style scoped lang="scss">

</style>
