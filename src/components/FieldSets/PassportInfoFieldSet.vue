<template>
    <fieldset class="fieldset">
        <span class="fieldset__title">Паспорт</span>

        <ValidatedInput inputName="documentType" label="Тип документа" :$v="$v">
            <select class="input" :class="{ 'input--error': $v.documentType.$error }" v-model="$v.documentType.$model">
                <option value="default">Выберите тип документа</option>
                <option value="passport">Паспорт</option>
                <option value="birth-certificate">Свидетельство о рождении</option>
                <option value="drivers-license">Вод. удостоверение</option>
            </select>
        </ValidatedInput>

        <ValidatedInput inputName="passportSeries" label="Серия" :$v="$v">
            <input
                class="input"
                :class="{ 'input--error': $v.passportSeries.$error }"
                type="text"
                placeholder="XXXX"
                v-model="$v.passportSeries.$model"
            />
        </ValidatedInput>

        <ValidatedInput inputName="passportNumber" label="Номер" :$v="$v">
            <input
                class="input"
                :class="{ 'input--error': $v.passportNumber.$error }"
                type="text"
                placeholder="YYYYYY"
                v-model="$v.passportNumber.$model"
            />
        </ValidatedInput>

        <ValidatedInput inputName="passportSource" label="Кем выдан" :$v="$v">
            <textarea
                class="input"
                :class="{ 'input--error': $v.passportSource.$error }"
                type="text"
                placeholder="Введите кем выдан паспорт"
                v-model="$v.passportSource.$model"
            >
            </textarea>
        </ValidatedInput>

        <ValidatedInput inputName="passportDate" label="Дата выдачи" :$v="$v">
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
        $v: Object,
    },
};
</script>

<style lang="sass">
@import fieldset
</style>
