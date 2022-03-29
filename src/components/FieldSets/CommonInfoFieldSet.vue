<template>
    <fieldset class="fieldset">
        <span class="fieldset__title">Общая информация</span>

        <ValidatedInput label="Фамилия" :vInput="vFieldSet.lastName">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.lastName.$error }"
                type="text"
                placeholder="Введите фамилию"
                v-model.trim="vFieldSet.lastName.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Имя" :vInput="vFieldSet.firstName">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.firstName.$error }"
                type="text"
                placeholder="Введите имя"
                v-model.trim="vFieldSet.firstName.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Отчество" :vInput="vFieldSet.middleName">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.middleName.$error }"
                type="text"
                placeholder="Введите отчество"
                v-model.trim="vFieldSet.middleName.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Дата рождения" :vInput="vFieldSet.birthdate">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.birthdate.$error }"
                type="date"
                v-model="vFieldSet.birthdate.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Номер телефона" :vInput="vFieldSet.phoneNumber">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.phoneNumber.$error }"
                type="tel"
                placeholder="7 XXX XXX XX XX"
                v-model.trim="vFieldSet.phoneNumber.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Пол" :vInput="vFieldSet.gender">
            <select
                class="input"
                :class="{ 'input--error': vFieldSet.gender.$error }"
                v-model="vFieldSet.gender.$model"
            >
                <option value="default">Выберите пол</option>
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
            </select>
        </ValidatedInput>

        <ValidatedInput label="Группа клиентов" :vInput="vFieldSet.customerGroup">
            <select
                class="input"
                :class="{ 'input--error': vFieldSet.customerGroup.$error }"
                multiple
                v-model="vFieldSet.customerGroup.$model"
            >
                <option value="vip">VIP</option>
                <option value="problematic">Проблемные</option>
                <option value="oms">ОМС</option>
            </select>
        </ValidatedInput>

        <ValidatedInput label="Лечащий врач" :vInput="vFieldSet.treatingDoctor">
            <select
                class="input"
                :class="{ 'input--error': vFieldSet.treatingDoctor.$error }"
                v-model="vFieldSet.treatingDoctor.$model"
            >
                <option value="default">Выберите лечащего врача</option>
                <option value="ivanov">Иванов</option>
                <option value="zaharov">Захаров</option>
                <option value="chernisheva">Чернышева</option>
            </select>
        </ValidatedInput>

        <ValidatedInput label="Не отправлять SMS" labelRow :vInput="vFieldSet.dontSendSMS">
            <input
                class="input"
                :class="{ 'input--error': vFieldSet.dontSendSMS.$error }"
                type="checkbox"
                v-model="vFieldSet.dontSendSMS.$model"
            />
        </ValidatedInput>
    </fieldset>
</template>

<script>
import ValidatedInput from "../ValidatedInput.vue";

export default {
    name: "CommonInfoFieldSet",
    components: { ValidatedInput },
    props: {
        vFieldSet: { type: Object, required: true },
    },
};
</script>

<style lang="sass">
@import fieldset
</style>
