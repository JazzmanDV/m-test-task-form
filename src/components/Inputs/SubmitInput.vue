<template>
    <input
        class="input button"
        type="submit"
        :value="value"
        :disabled="disabled"
        :class="{ 'button--disabled': disabled }"
        @click="handleSubmitButtonClick"
    />
</template>

<script>
export default {
    name: "SubmitInput",
    props: {
        value: { type: String, required: true },
        disabled: { type: Boolean, required: true },
    },
    methods: {
        handleSubmitButtonClick(e) {
            this.$emit("on-submit-button-click", e);
        },
    },
};
</script>

<style lang="sass">
@import input
</style>

<style scoped lang="sass">
@import ../../variables

.button
    cursor: pointer

    &:hover
        box-shadow: $primary-box-shadow--hovered

    &--disabled
        cursor: default
</style>
