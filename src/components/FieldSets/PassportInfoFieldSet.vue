<template>
    <fieldset class="fieldset">
        <span class="fieldset__title">Паспорт</span>

        <ValidatedInput :vInput="vFieldSet.documentType">
            <Label value="Тип документа" :vInput="vFieldSet.documentType">
                <SelectInput :vInput="vFieldSet.documentType">
                    <option value="default">Выберите тип документа</option>
                    <option value="passport">Паспорт</option>
                    <option value="birth-certificate">Свидетельство о рождении</option>
                    <option value="drivers-license">Вод. удостоверение</option>
                </SelectInput>
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.passportSeries">
            <Label value="Серия" :vInput="vFieldSet.passportSeries">
                <TextInput type="text" inputmode="numeric" placeholder="XXXX" :vInput="vFieldSet.passportSeries" />
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.passportNumber">
            <Label value="Номер" :vInput="vFieldSet.passportNumber">
                <TextInput type="text" inputmode="numeric" placeholder="YYYYYY" :vInput="vFieldSet.passportNumber" />
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.passportSource">
            <Label value="Кем выдан" :vInput="vFieldSet.passportSource">
                <TextareaInput placeholder="Введите кем выдан паспорт" :vInput="vFieldSet.passportSource" />
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.passportDate">
            <Label value="Дата выдачи" :vInput="vFieldSet.passportDate">
                <DateInput :vInput="vFieldSet.passportDate" />
            </Label>
        </ValidatedInput>
    </fieldset>
</template>

<script>
import ValidatedInput from "../ValidatedInput.vue";
import Label from "../Label.vue";

import SelectInput from "../Inputs/SelectInput.vue";
import TextInput from "../Inputs/TextInput.vue";
import TextareaInput from "../Inputs/TextareaInput.vue";
import DateInput from "../Inputs/DateInput.vue";

export default {
    name: "PassportInfoFieldSet",
    components: { ValidatedInput, Label, SelectInput, TextInput, TextareaInput, DateInput },
    props: {
        vFieldSet: { type: Object, required: true },
    },
};
</script>

<style lang="sass">
@import fieldset
</style>
