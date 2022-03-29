<template>
    <fieldset class="fieldset">
        <span class="fieldset__title">Паспорт</span>

        <ValidatedInput label="Тип документа" :vInput="$v['documentType']">
            <select class="input" :class="{ 'input--error': $v.documentType.$error }" v-model="$v.documentType.$model">
                <option value="default">Выберите тип документа</option>
                <option value="passport">Паспорт</option>
                <option value="birth-certificate">Свидетельство о рождении</option>
                <option value="drivers-license">Вод. удостоверение</option>
            </select>
        </ValidatedInput>

        <ValidatedInput label="Серия" :vInput="$v['passportSeries']">
            <input
                class="input"
                :class="{ 'input--error': $v.passportSeries.$error }"
                type="text"
                inputmode="numeric"
                placeholder="XXXX"
                v-model.trim="$v.passportSeries.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Номер" :vInput="$v['passportNumber']">
            <input
                class="input"
                :class="{ 'input--error': $v.passportNumber.$error }"
                type="text"
                inputmode="numeric"
                placeholder="YYYYYY"
                v-model.trim="$v.passportNumber.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Кем выдан" :vInput="$v['passportSource']">
            <textarea
                class="input"
                :class="{ 'input--error': $v.passportSource.$error }"
                placeholder="Введите кем выдан паспорт"
                v-model.trim="$v.passportSource.$model"
            >
            </textarea>
        </ValidatedInput>

        <ValidatedInput label="Дата выдачи" :vInput="$v['passportDate']">
            <input
                class="input"
                :class="{ 'input--error': $v.passportDate.$error }"
                type="date"
                v-model="$v.passportDate.$model"
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
        $v: { type: Object, required: true },
    },
};
</script>

<style lang="sass">
@import fieldset
</style>
