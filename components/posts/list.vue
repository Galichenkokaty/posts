<template>
    <div class="posts flex --direction-column">
        <PostsListItem v-for="(post, index) in postsArray()" :post="post" />
    </div>
</template>
<style>
        @import '~/components/posts/__posts.css';
</style>
<script setup>
    import { usePostsStore } from '@/stores/posts'
    import { useUsersStore } from '@/stores/users'
    const storeUsers = useUsersStore()
    const { filterValue } = storeToRefs(storeUsers);
    const store = usePostsStore()
    const { posts } = storeToRefs(store);

    function postsArray(){
        if(filterValue.value === 'all'){
            return posts.value
        }else{
            const filterPosts = posts.value.filter((post) => post.userId === filterValue.value);
            return filterPosts
        }
    }
</script>