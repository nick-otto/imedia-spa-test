<script>
  import addUuidToArray from '@/common/helpers/addUuidToArray.js';

  import NavigationMenu from '@/components/NavigationMenu';

  export default {
    name: 'Header',

    components: {
      NavigationMenu
    },

    data() {
      return {
        navItems: addUuidToArray([
          {
            label: 'Авторы',
            link: '/users'
          },
          {
            label: 'Статьи',
            link: '/posts'
          }
        ])
      }
    }
  };
</script>

<template>
  <div class="header">
    <NavigationMenu :items="navItems" />
  </div>
</template>

<style scoped lang="scss">
  .header {
    margin-bottom: 31px;
  }
</style>
