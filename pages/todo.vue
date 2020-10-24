<template>
  <div class="container">
    <h1 class="title">
      My To Do List
    </h1>
    <to-do-list :todos="todos" />
  </div>
</template>

<script>

import ToDoList from '~/components/ToDoList.vue'

export default {
  components: {
    ToDoList
  },
  asyncData (ctx) {
    return {
      todos: [
        {
          id: '1',
          title: 'A',
          completed: false
        },
        {
          id: '2',
          title: 'B',
          completed: true
        }
      ]
    }
  },
  // async asyncData (ctx) {
  //   return {
  //     todos: await ctx.app.$services.todo.findAll()
  //   }
  // },
  data () {
    return {
      todos: {
        type: Array
      }
    }
  }
}
</script>
