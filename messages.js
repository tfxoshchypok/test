import {ref} from 'vue'

const messages = ref([])

const add = (message) => messages.value.push({txt: message, time: new Date()})

const clear = () => messages.value = []

export const useMessages = () => {
  return {
    messages, add, clear
  }
}
