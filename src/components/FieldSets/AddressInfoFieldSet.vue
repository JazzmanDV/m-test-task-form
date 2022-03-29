<template>
    <fieldset class="fieldset">
        <span class="fieldset__title">Адрес</span>

        <ValidatedInput label="Индекс" :vInput="vFieldSet.index">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.index.$error }"
                type="text"
                inputmode="numeric"
                placeholder="XXXYYY"
                v-model.trim="vFieldSet.index.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Страна" :vInput="vFieldSet.country">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.country.$error }"
                type="text"
                placeholder="Введите страну"
                v-model.trim="vFieldSet.country.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Область" :vInput="vFieldSet.region">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.region.$error }"
                type="text"
                placeholder="Введите область"
                v-model.trim="vFieldSet.region.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Город" :vInput="vFieldSet.city">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.city.$error }"
                type="text"
                placeholder="Введите город"
                v-model.trim="vFieldSet.city.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Улица" :vInput="vFieldSet.street">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.street.$error }"
                type="text"
                placeholder="Введите улицу"
                v-model.trim="vFieldSet.street.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Дом" :vInput="vFieldSet.house">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.house.$error }"
                type="text"
                placeholder="Введите дом"
                v-model.trim="vFieldSet.house.$model"
            />
        </ValidatedInput>
    </fieldset>
</template>

<script>
import ValidatedInput from "../ValidatedInput.vue";

export default {
    name: "AddressInfoFieldSet",
    components: { ValidatedInput },
    props: {
        vFieldSet: { type: Object, required: true },
    },
};
</script>

<style lang="sass">
@import fieldset
</style>
