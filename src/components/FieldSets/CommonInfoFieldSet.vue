<template>
    <fieldset class="fieldset">
        <span class="fieldset__title">Общая информация</span>

        <ValidatedInput label="Фамилия" :vInput="vFieldSet.lastName">
            <TextInput type="text" placeholder="Введите фамилию" :vInput="vFieldSet.lastName" />
        </ValidatedInput>

        <ValidatedInput label="Имя" :vInput="vFieldSet.firstName">
            <TextInput type="text" placeholder="Введите имя" :vInput="vFieldSet.firstName" />
        </ValidatedInput>

        <ValidatedInput label="Отчество" :vInput="vFieldSet.middleName">
            <TextInput type="text" placeholder="Введите отчество" :vInput="vFieldSet.middleName" />
        </ValidatedInput>

        <ValidatedInput label="Дата рождения" :vInput="vFieldSet.birthdate">
            <DateInput :vInput="vFieldSet.birthdate" />
        </ValidatedInput>

        <ValidatedInput label="Номер телефона" :vInput="vFieldSet.phoneNumber">
            <TextInput type="tel" placeholder="7 XXX XXX XX XX" :vInput="vFieldSet.phoneNumber" />
        </ValidatedInput>

        <ValidatedInput label="Пол" :vInput="vFieldSet.gender">
            <SelectInput :vInput="vFieldSet.gender">
                <option value="default">Выберите пол</option>
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
            </SelectInput>
        </ValidatedInput>

        <ValidatedInput label="Группа клиентов" :vInput="vFieldSet.customerGroup">
            <SelectInput multiple :vInput="vFieldSet.customerGroup">
                <option value="vip">VIP</option>
                <option value="problematic">Проблемные</option>
                <option value="oms">ОМС</option>
            </SelectInput>
        </ValidatedInput>

        <ValidatedInput label="Лечащий врач" :vInput="vFieldSet.treatingDoctor">
            <SelectInput :vInput="vFieldSet.treatingDoctor">
                <option value="default">Выберите лечащего врача</option>
                <option value="ivanov">Иванов</option>
                <option value="zaharov">Захаров</option>
                <option value="chernisheva">Чернышева</option>
            </SelectInput>
        </ValidatedInput>

        <ValidatedInput label="Не отправлять SMS" labelRow :vInput="vFieldSet.dontSendSMS">
            <CheckboxInput :vInput="vFieldSet.dontSendSMS" />
        </ValidatedInput>
    </fieldset>
</template>

<script>
import ValidatedInput from "../ValidatedInput.vue";
import TextInput from "../Inputs/TextInput.vue";
import DateInput from "../Inputs/DateInput.vue";
import SelectInput from "../Inputs/SelectInput.vue";
import CheckboxInput from "../Inputs/CheckboxInput.vue";

export default {
    name: "CommonInfoFieldSet",
    components: { ValidatedInput, TextInput, DateInput, SelectInput, CheckboxInput },
    props: {
        vFieldSet: { type: Object, required: true },
    },
};
</script>

<style lang="sass">
@import fieldset
</style>
