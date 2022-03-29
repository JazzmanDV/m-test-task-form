<template>
    <fieldset class="fieldset">
        <span class="fieldset__title">Адрес</span>

        <ValidatedInput inputName="index" label="Индекс" :$v="$v">
            <input
                class="input"
                :class="{ 'input--error': $v.index.$error }"
                type="text"
                inputmode="numeric"
                placeholder="XXXYYY"
                v-model.trim="$v.index.$model"
            />
        </ValidatedInput>

        <ValidatedInput inputName="country" label="Страна" :$v="$v">
            <input
                class="input"
                :class="{ 'input--error': $v.country.$error }"
                type="text"
                placeholder="Введите страну"
                v-model.trim="$v.country.$model"
            />
        </ValidatedInput>

        <ValidatedInput inputName="region" label="Область" :$v="$v">
            <input
                class="input"
                :class="{ 'input--error': $v.region.$error }"
                type="text"
                placeholder="Введите область"
                v-model.trim="$v.region.$model"
            />
        </ValidatedInput>

        <ValidatedInput inputName="city" label="Город" :$v="$v">
            <input
                class="input"
                :class="{ 'input--error': $v.city.$error }"
                type="text"
                placeholder="Введите город"
                v-model.trim="$v.city.$model"
            />
        </ValidatedInput>

        <ValidatedInput inputName="street" label="Улица" :$v="$v">
            <input
                class="input"
                :class="{ 'input--error': $v.street.$error }"
                type="text"
                placeholder="Введите улицу"
                v-model.trim="$v.street.$model"
            />
        </ValidatedInput>

        <ValidatedInput inputName="house" label="Дом" :$v="$v">
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
        $v: Object,
    },
};
</script>

<style lang="sass">
@import fieldset
</style>
