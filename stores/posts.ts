import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', () => {
    const { data, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
    const posts = ref(data);

    return { posts }
})