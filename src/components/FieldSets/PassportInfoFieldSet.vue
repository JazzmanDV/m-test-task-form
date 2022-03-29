<template>
    <fieldset class="fieldset">
        <span class="fieldset__title">Паспорт</span>

        <ValidatedInput label="Тип документа" :vInput="vFieldSet.documentType">
            <select
                class="input"
                :class="{ 'input--error': vFieldSet.documentType.$error }"
                v-model="vFieldSet.documentType.$model"
            >
                <option value="default">Выберите тип документа</option>
                <option value="passport">Паспорт</option>
                <option value="birth-certificate">Свидетельство о рождении</option>
                <option value="drivers-license">Вод. удостоверение</option>
            </select>
        </ValidatedInput>

        <ValidatedInput label="Серия" :vInput="vFieldSet.passportSeries">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.passportSeries.$error }"
                type="text"
                inputmode="numeric"
                placeholder="XXXX"
                v-model.trim="vFieldSet.passportSeries.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Номер" :vInput="vFieldSet.passportNumber">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.passportNumber.$error }"
                type="text"
                inputmode="numeric"
                placeholder="YYYYYY"
                v-model.trim="vFieldSet.passportNumber.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Кем выдан" :vInput="vFieldSet.passportSource">
            <textarea
                class="input"
                :class="{ 'input--error': vFieldSet.passportSource.$error }"
                placeholder="Введите кем выдан паспорт"
                v-model.trim="vFieldSet.passportSource.$model"
            >
            </textarea>
        </ValidatedInput>

        <ValidatedInput label="Дата выдачи" :vInput="vFieldSet.passportDate">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.passportDate.$error }"
                type="date"
                v-model="vFieldSet.passportDate.$model"
            />
        </ValidatedInput>
    </fieldset>
</template>

<script>
import ValidatedInput from "../ValidatedInput.vue";

export default {
    name: "PassportInfoFieldSet",
    components: { ValidatedInput },
    props: {
        vFieldSet: { type: Object, required: true },
    },
};
</script>

<style lang="sass">
@import fieldset
</style>
