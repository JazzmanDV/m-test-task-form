<template>
    <textarea
        class="input"
        :class="{ 'input--error': vInput.$error }"
        :placeholder="placeholder"
        v-model.trim="vInput.$model"
    >
    </textarea>
</template>

<script>
export default {
    name: "TextareaInput",
    props: {
        vInput: { type: Object, required: true },
        placeholder: { type: String, required: true },
    },
};
</script>

<style lang="sass">
@import input
</style>
