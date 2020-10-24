<template>
  <div class="create-container">
    <input v-model="titleOfNewToDo" type="text">
    <button @click="create">
      Add
    </button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      titleOfNewToDo: 'hello'
    }
  },
  methods: {
    create () {
      this.$emit('create', { id: this.titleOfNewToDo, title: this.titleOfNewToDo, completed: false })
      this.titleOfNewToDo = ''
    }
  }
}
</script>
