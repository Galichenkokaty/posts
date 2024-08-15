import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
    const { data, error } = useFetch('https://jsonplaceholder.typicode.com/users');
    const users = ref(data);
    const filterValue = ref('all')

    return { users, filterValue }
})