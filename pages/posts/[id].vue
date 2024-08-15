<template>
    <div class="center-wrap col --12">
        <ClientOnly>
            <PostsDetail  :user="getUserInfo()" :post="getPostInfo()" :comments="commentsArray"/>
        </ClientOnly>
    </div>
</template>
<script setup>
    import { useCommentsStore } from '@/stores/comments'
    import { usePostsStore } from '@/stores/posts'
    import { useUsersStore } from '@/stores/users'
    const route = useRoute().params.id;

    const storeComment = useCommentsStore()
    const { comments } = storeToRefs(storeComment);
    const commentsArray = ref([]);

    const storeUsers = useUsersStore()
    const { users } = storeToRefs(storeUsers);
    const storePost = usePostsStore()
    const { posts } = storeToRefs(storePost);

    function getPostInfo(){
        for(let i = 0; i < posts.value.length; i++ ){
            if(route == posts.value[i].id){
                return posts.value[i]
            }
        }
    }
    setTimeout(() => {
        for(let i = 0; i < comments.value.length; i++ ){
            if(route == comments.value[i].postId){
                commentsArray.value.push(comments.value[i])
            }
        }
        return commentsArray
    }, 500);
    
    function getUserInfo(){
        for(let i = 0; i < users.value.length; i++ ){
            console.log()
            if(posts.value[route - 1].userId == users.value[i].id){
                return users.value[i]
            }
        }
    }
</script>