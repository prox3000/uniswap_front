<template>
  <div class="d-flex flex-column h-100">
    <HeaderNavOrganism></HeaderNavOrganism>
    <router-view/>
  </div>
</template>

<script>
import HeaderNavOrganism from "@/components/organisms/header-nav/header-nav.organism.vue";

export default {
  name: 'App',
  components: {HeaderNavOrganism},
  data: function () {
    return {}
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>