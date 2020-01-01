<template>
  <div class="tool row">
    <div class="col-md-3">
      {{tabindex}}
      <EBoard :tabindex="tabindex"/>
    </div>
    <div class="col-md-9">
      <WIP :tabindex="tabindex"/>
    </div>
  </div>
</template>

<script>
  import WIP from './wip'
  import EBoard from './eboard'
  export default {
    name: 'tool',
    props:{
      "tabindex": Number
    },
    components:{
      WIP,EBoard
    }
  }
</script>

<style scoped>

</style>