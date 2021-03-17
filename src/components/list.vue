<template>
  <div class="List card">
    {{ list.name }}
    <br />
    <Task v-for="task in tasks" :key="task" :task="task" />
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed, onMounted } from 'vue'
import Task from '../components/task'
import { boardsService } from '../services/BoardsService'
import { useRoute } from 'vue-router'

export default {
  name: 'List',
  props: {
    list: Object
  },
  setup() {
    const route = useRoute()
    const state = reactive({
      user: computed(() => AppState.user)
      // list: computed(() => AppState.lists)
    })
    onMounted(() => {
      boardsService.getTaskByListId(route.params.id)
    })
    return {
      state
    }
  },
  components: {
    Task
  }
}
</script>

<style lang="scss" scoped>

</style>
