<template>
    <div @click='onClick' :class='[className, displayIcon]'>
        <fa-icon v-if="displayIcon === 'left'" :icon='icon' />
        {{ label }}
        <fa-icon v-if="displayIcon === 'right'" :icon='icon' />
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        onClick: Function,
        label: String,
        className: String,
        displayIcon: String,
        icon: String
    }
}
</script>