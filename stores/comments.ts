import { defineStore } from 'pinia'

export const useCommentsStore = defineStore('comments', () => {
    const { data, error } = useFetch('https://jsonplaceholder.typicode.com/comments');
    const comments = ref(data);

    return { comments }
})