<template>
    <div class="users">
        <select v-model="filterValue" name="" id="" class="users__select">
            <option value="all" class="users__select-item">All posts</option>
            <option v-for="(user, index) in users" :value="user.id" :key="index" class="users__select-item">{{ user.username }}</option>
        </select>
    </div>
</template>
<style>
        @import '~/components/users/__users.css';
</style>
<script setup>
    import { useUsersStore } from '@/stores/users'
    const store = useUsersStore()
    const { users, filterValue } = storeToRefs(store);

</script>