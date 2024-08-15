<template>
    <div class="post__detail flex --direction-column">
        <div class="post__detail-user flex --direction-column">
            <div class="post__detail-user-name">{{ user.username }}</div>
            <div class="post__detail-user-email">email: <span>{{ user.email }}</span></div>
            <div class="post__detail-user-city">city: <span>{{ user.address.city }}</span></div>
            <div class="post__detail-user-phone">phone: <span>{{ user.phone }}</span></div>
        </div>
        <div class="post__detail-body flex --direction-column">
            <div class="post__detail-body-title">{{ post.title }}</div>
            <div class="post__detail-body-text">{{ post.body }}</div>
        </div>
        <div class="post__detail-comments flex --direction-column">
            <div class="post__detail-comments-title">Comments</div>
            <div v-for="(comment, index) in comments" class="post__detail-comment flex --direction-column">
                <div class="post__detail-comment-email" v-html="comment.email"></div>
                <div class="post__detail-comment-name" v-html="comment.name"></div>
                <div class="post__detail-comment-body" v-html="comment.body"></div>
            </div>
        </div>
    </div>
</template>
<style>
        @import '~/components/posts/__posts.css';
</style>
<script setup>
    const { user, comments, post } = defineProps([ 'user', 'comments', 'post']);

</script>