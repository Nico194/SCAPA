<template>
    <router-link class='a-link' :to= direction>{{ name }}</router-link>
</template>

<script>
export default {
    name: 'Link',
    props: {
        name: String,
        direction: String
    }
}
</script>
