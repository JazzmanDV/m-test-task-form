<template>
    <label :class="{ 'label-row': row }">
        {{ value }}{{ vInput.$params.required || vInput.$params.notDefault ? "*" : "" }}
        <slot></slot>
    </label>
</template>

<script>
export default {
    name: "Label",
    props: {
        vInput: { type: Object, required: true },
        value: { type: String, required: true },
        row: { type: Boolean, required: false },
    },
};
</script>

<style scoped lang="sass">
label
    display: flex
    flex-direction: column
    gap: 0.5rem

    transition: 0.25s color

.label-row
    flex-direction: row

    input
        order: -1
</style>
