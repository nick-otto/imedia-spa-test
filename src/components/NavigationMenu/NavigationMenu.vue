<script>
  import VueTypes from 'vue-types';

  export default {
    name: 'NavigationMenu',

    props: {
      items: VueTypes.arrayOf(
        VueTypes.shape({
          label: VueTypes.string,
          link: VueTypes.string,
          uuid: VueTypes.string
        })
      ).isRequired
    }
  };
</script>

<template>
  <nav class="navigation-menu-wrapper">
    <router-link
      v-for="itemCur in items"
      :key="itemCur.uuid"
      :to="itemCur.link"
      class="item"
    >
      {{ itemCur.label }}
    </router-link>
  </nav>
</template>

<style scoped lang="scss">
  .navigation-menu-wrapper {
    margin-top: 15px;
  }

  .item {
    text-transform: uppercase;
    margin-left: 25px;

    &:nth-child(1) {
      margin-left: 0;
    }
  }
</style>
