<template>
    <fieldset class="fieldset">
        <span class="fieldset__title">Общая информация</span>

        <ValidatedInput :vInput="vFieldSet.lastName">
            <Label value="Фамилия" :vInput="vFieldSet.lastName">
                <TextInput type="text" placeholder="Введите фамилию" :vInput="vFieldSet.lastName" />
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.firstName">
            <Label value="Имя" :vInput="vFieldSet.firstName">
                <TextInput type="text" placeholder="Введите имя" :vInput="vFieldSet.firstName" />
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.middleName">
            <Label value="Отчество" :vInput="vFieldSet.middleName">
                <TextInput type="text" placeholder="Введите отчество" :vInput="vFieldSet.middleName" />
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.birthdate">
            <Label value="Дата рождения" :vInput="vFieldSet.birthdate">
                <DateInput :vInput="vFieldSet.birthdate" />
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.phoneNumber">
            <Label value="Номер телефона" :vInput="vFieldSet.phoneNumber">
                <TextInput type="tel" placeholder="7 XXX XXX XX XX" :vInput="vFieldSet.phoneNumber" />
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.gender">
            <Label value="Пол" :vInput="vFieldSet.gender">
                <SelectInput :vInput="vFieldSet.gender">
                    <option value="default">Выберите пол</option>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </SelectInput>
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.customerGroup">
            <Label value="Группа клиентов" :vInput="vFieldSet.customerGroup">
                <SelectInput multiple :vInput="vFieldSet.customerGroup">
                    <option value="vip">VIP</option>
                    <option value="problematic">Проблемные</option>
                    <option value="oms">ОМС</option>
                </SelectInput>
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.treatingDoctor">
            <Label value="Лечащий врач" :vInput="vFieldSet.treatingDoctor">
                <SelectInput :vInput="vFieldSet.treatingDoctor">
                    <option value="default">Выберите лечащего врача</option>
                    <option value="ivanov">Иванов</option>
                    <option value="zaharov">Захаров</option>
                    <option value="chernisheva">Чернышева</option>
                </SelectInput>
            </Label>
        </ValidatedInput>

        <ValidatedInput :vInput="vFieldSet.dontSendSMS">
            <Label value="Не отправлять SMS" row :vInput="vFieldSet.dontSendSMS">
                <CheckboxInput :vInput="vFieldSet.dontSendSMS" />
            </Label>
        </ValidatedInput>
    </fieldset>
</template>

<script>
import ValidatedInput from "../ValidatedInput.vue";
import Label from "../Label.vue";

import TextInput from "../Inputs/TextInput.vue";
import DateInput from "../Inputs/DateInput.vue";
import SelectInput from "../Inputs/SelectInput.vue";
import CheckboxInput from "../Inputs/CheckboxInput.vue";

export default {
    name: "CommonInfoFieldSet",
    components: { ValidatedInput, Label, TextInput, DateInput, SelectInput, CheckboxInput },
    props: {
        vFieldSet: { type: Object, required: true },
    },
};
</script>

<style lang="sass">
@import fieldset
</style>
