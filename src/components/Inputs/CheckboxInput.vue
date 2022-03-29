<template>
    <input class="input" :class="{ 'input--error': vInput.$error }" type="checkbox" v-model="vInput.$model" />
</template>

<script>
export default {
    name: "CheckboxInput",
    props: {
        vInput: { type: Object, required: true },
    },
};
</script>

<style lang="sass">
@import input
</style>
