<template>
    <fieldset class="fieldset">
        <span class="fieldset__title">Адрес</span>

        <ValidatedInput :vInput="vFieldSet.index">
            <Label value="Индекс" :vInput="vFieldSet.index">
                <TextInput type="text" inputmode="numeric" placeholder="XXXYYY" :vInput="vFieldSet.index" />
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.country">
            <Label value="Страна" :vInput="vFieldSet.country">
                <TextInput type="text" placeholder="Введите страну" :vInput="vFieldSet.country" />
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.region">
            <Label value="Область" :vInput="vFieldSet.region">
                <TextInput type="text" placeholder="Введите область" :vInput="vFieldSet.region" />
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.city">
            <Label value="Город" :vInput="vFieldSet.city">
                <TextInput type="text" placeholder="Введите город" :vInput="vFieldSet.city" />
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.street">
            <Label value="Улица" :vInput="vFieldSet.street">
                <TextInput type="text" placeholder="Введите улицу" :vInput="vFieldSet.street" />
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.house">
            <Label value="Дом" :vInput="vFieldSet.house">
                <TextInput type="text" placeholder="Введите дом" :vInput="vFieldSet.house" />
            </Label>
        </ValidatedInput>
    </fieldset>
</template>

<script>
import ValidatedInput from "../ValidatedInput.vue";
import Label from "../Label.vue";

import TextInput from "../Inputs/TextInput.vue";

export default {
    name: "AddressInfoFieldSet",
    components: { ValidatedInput, Label, TextInput },
    props: {
        vFieldSet: { type: Object, required: true },
    },
};
</script>

<style lang="sass">
@import fieldset
</style>
