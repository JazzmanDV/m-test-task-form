<template>
    <input
        class="input"
        :class="{ 'input--error': vInput.$error }"
        :type="type"
        :inputmode="inputmode"
        :placeholder="placeholder"
        v-model.trim="vInput.$model"
    />
</template>

<script>
export default {
    name: "TextInput",
    props: {
        vInput: { type: Object, required: true },
        type: { type: String, required: true },
        inputmode: { type: String, required: false },
        placeholder: { type: String, required: true },
    },
};
</script>

<style lang="sass">
@import input
</style>
