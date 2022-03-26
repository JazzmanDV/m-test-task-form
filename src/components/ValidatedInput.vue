<template>
    <div>
        <label :class="{ 'label-row': labelRow }">
            {{ label }}{{ $v[inputName].$params.required ? "*" : "" }}
            <slot></slot>
        </label>
        <div
            v-for="param in $v[inputName].$params"
            v-if="$v[inputName].$error && !$v[inputName][param.type]"
            class="error"
        >
            {{ getErrorHint(param) }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        $v: Object,
        inputName: String,
        label: String,
        labelRow: Boolean,
    },
    methods: {
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

.error
    color: red
    font-size: 0.75rem
    margin-left: 1rem
</style>
