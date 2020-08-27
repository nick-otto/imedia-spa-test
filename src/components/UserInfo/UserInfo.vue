<script>
  import VueTypes from 'vue-types';

  export default {
    name: 'UserInfo',

    props: {
      name: VueTypes.string.isRequired,
      username: VueTypes.string.isRequired,
      userId: VueTypes.number
    }
  };
</script>

<template>
  <div class="user-info-wrapper">
    <div class="name">
      <router-link v-if="userId" :to="`/user/${userId}`">
        Имя: {{ name }}
      </router-link>

      <span v-else>
        Имя: {{ name }}
      </span>
    </div>

    <div class="username">
      Псевдоним: {{ username }}
    </div>
  </div>
</template>

<style scoped lang="scss">
  .user-info-wrapper {
    margin-top: 15px;

    &:nth-child(1) {
      margin-top: 0;
    }
  }

  .name {
    font-size: 21px;
    font-weight: bold;
  }

  .username {
    margin-top: 7px;
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
  }
</style>
