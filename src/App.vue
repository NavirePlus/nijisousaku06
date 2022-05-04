<template>
  <page-header />
  <page-content />
  <page-footer />
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageContent from './components/PageContent.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageContent,
    PageFooter
  }
}
</script>
