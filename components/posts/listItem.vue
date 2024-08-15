<template>
    <NuxtLink :to="`/posts/${post.id}`" class="post flex --direction-column">
        <div class="post__title" v-html="post.title"></div>
        <div class="post__text" v-html="post.body"></div>
    </NuxtLink>
</template>
<script setup>
    const { post } = defineProps(['post']);

</script>