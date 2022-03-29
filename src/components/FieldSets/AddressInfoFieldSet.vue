<template>
    <fieldset class="fieldset">
        <span class="fieldset__title">Адрес</span>

        <ValidatedInput label="Индекс" :vInput="$v['index']">
            <input
                class="input"
                :class="{ 'input--error': $v.index.$error }"
                type="text"
                inputmode="numeric"
                placeholder="XXXYYY"
                v-model.trim="$v.index.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Страна" :vInput="$v['country']">
            <input
                class="input"
                :class="{ 'input--error': $v.country.$error }"
                type="text"
                placeholder="Введите страну"
                v-model.trim="$v.country.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Область" :vInput="$v['region']">
            <input
                class="input"
                :class="{ 'input--error': $v.region.$error }"
                type="text"
                placeholder="Введите область"
                v-model.trim="$v.region.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Город" :vInput="$v['city']">
            <input
                class="input"
                :class="{ 'input--error': $v.city.$error }"
                type="text"
                placeholder="Введите город"
                v-model.trim="$v.city.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Улица" :vInput="$v['street']">
            <input
                class="input"
                :class="{ 'input--error': $v.street.$error }"
                type="text"
                placeholder="Введите улицу"
                v-model.trim="$v.street.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Дом" :vInput="$v['house']">
            <input
                class="input"
                :class="{ 'input--error': $v.house.$error }"
                type="text"
                placeholder="Введите дом"
                v-model.trim="$v.house.$model"
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
        $v: { type: Object, required: true },
    },
};
</script>

<style lang="sass">
@import fieldset
</style>
