<template>
    <select class="input" :class="{ 'input--error': vInput.$error }" :multiple="multiple" v-model="vInput.$model">
        <slot></slot>
    </select>
</template>

<script>
export default {
    name: "SelectInput",
    props: {
        vInput: { type: Object, required: true },
        multiple: { type: Boolean, required: false },
    },
};
</script>

<style lang="sass">
@import input
</style>
