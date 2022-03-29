<template>
    <input class="input" :class="{ 'input--error': vInput.$error }" type="date" v-model="vInput.$model" />
</template>

<script>
export default {
    name: "DateInput",
    props: {
        vInput: { type: Object, required: true },
    },
};
</script>

<style lang="sass">
@import input
</style>
