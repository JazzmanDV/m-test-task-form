<template>
    <fieldset class="fieldset">
        <span class="fieldset__title">Адрес</span>

        <ValidatedInput label="Индекс" :vInput="vFieldSet.index">
            <TextInput type="text" inputmode="numeric" placeholder="XXXYYY" :vInput="vFieldSet.index" />
        </ValidatedInput>

        <ValidatedInput label="Страна" :vInput="vFieldSet.country">
            <TextInput type="text" placeholder="Введите страну" :vInput="vFieldSet.country" />
        </ValidatedInput>

        <ValidatedInput label="Область" :vInput="vFieldSet.region">
            <TextInput type="text" placeholder="Введите область" :vInput="vFieldSet.region" />
        </ValidatedInput>

        <ValidatedInput label="Город" :vInput="vFieldSet.city">
            <TextInput type="text" placeholder="Введите город" :vInput="vFieldSet.city" />
        </ValidatedInput>

        <ValidatedInput label="Улица" :vInput="vFieldSet.street">
            <TextInput type="text" placeholder="Введите улицу" :vInput="vFieldSet.street" />
        </ValidatedInput>

        <ValidatedInput label="Дом" :vInput="vFieldSet.house">
            <TextInput type="text" placeholder="Введите дом" :vInput="vFieldSet.house" />
        </ValidatedInput>
    </fieldset>
</template>

<script>
import ValidatedInput from "../ValidatedInput.vue";
import TextInput from "../Inputs/TextInput.vue";

export default {
    name: "AddressInfoFieldSet",
    components: { ValidatedInput, TextInput },
    props: {
        vFieldSet: { type: Object, required: true },
    },
};
</script>

<style lang="sass">
@import fieldset
</style>
