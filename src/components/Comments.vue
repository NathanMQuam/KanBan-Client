<template>
  <div class="Comment card">
    {{ comment.body }}
    <br />
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed } from 'vue'
export default {
  props: {
    comment: Object
  },
  setup() {
    const state = reactive({
      user: computed(() => AppState.user)

    })
    return {
      state
    }
  }
}
</script>

<style>

</style>
