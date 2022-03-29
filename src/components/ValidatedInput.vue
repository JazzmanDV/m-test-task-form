<template>
    <div>
        <slot></slot>
        <span v-for="param in getParamsWithError()" :key="param.type" class="error">
            {{ getErrorHint(param) }}
        </span>
    </div>
</template>

<script>
export default {
    name: "ValidatedInput",
    props: {
        vInput: { type: Object, required: true },
    },
    methods: {
        getParamsWithError() {
            if (!this.vInput.$error) {
                return [];
            }
            return Object.values(this.vInput.$params).filter((param) => !this.vInput[param.type]);
        },
        getLocalDate(date) {
            return date.toLocaleDateString("en-GB").split("/").join("-");
        },
        getErrorHint(param) {
            switch (param.type) {
                case "required":
                case "notDefault":
                    return `Поле обязательно для заполнения`;
                case "numeric":
                    return "Значение должно состоять только из цифр";
                case "alpha":
                    return "Значение должно состоять только из букв";
                case "numericWithSpaces":
                case "alphaWithSpecialSymbols":
                    return `Значение может состоять только из ${param.value}`;
                case "length":
                    return `Длина должна быть равна ${param.value} символам`;
                case "minLength":
                    return `Длина не должна быть меньше ${param.min} символов`;
                case "maxLength":
                    return `Длина не должна быть больше ${param.max} символов`;
                case "minDate":
                    return `Значение должно быть не меньше ${this.getLocalDate(param.value)}`;
                case "maxDate":
                    return `Значение должно быть не больше ${this.getLocalDate(param.value)}`;
                case "startsWith":
                    return `Значение должно начинаться с ${param.value}`;
                default:
                    return `Ошибка!`;
            }
        },
    },
};
</script>

<style lang="sass">
@import ../error
</style>
