<template>
    <fieldset class="fieldset">
        <span class="fieldset__title">Общая информация</span>

        <ValidatedInput label="Фамилия" :vInput="$v['lastName']">
            <input
                class="input"
                :class="{ 'input--error': $v.lastName.$error }"
                type="text"
                placeholder="Введите фамилию"
                v-model.trim="$v.lastName.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Имя" :vInput="$v['firstName']">
            <input
                class="input"
                :class="{ 'input--error': $v.firstName.$error }"
                type="text"
                placeholder="Введите имя"
                v-model.trim="$v.firstName.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Отчество" :vInput="$v['middleName']">
            <input
                class="input"
                :class="{ 'input--error': $v.middleName.$error }"
                type="text"
                placeholder="Введите отчество"
                v-model.trim="$v.middleName.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Дата рождения" :vInput="$v['birthdate']">
            <input
                class="input"
                :class="{ 'input--error': $v.birthdate.$error }"
                type="date"
                v-model="$v.birthdate.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Номер телефона" :vInput="$v['phoneNumber']">
            <input
                class="input"
                :class="{ 'input--error': $v.phoneNumber.$error }"
                type="tel"
                placeholder="7 XXX XXX XX XX"
                v-model.trim="$v.phoneNumber.$model"
            />
        </ValidatedInput>

        <ValidatedInput label="Пол" :vInput="$v['gender']">
            <select class="input" :class="{ 'input--error': $v.gender.$error }" v-model="$v.gender.$model">
                <option value="default">Выберите пол</option>
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
            </select>
        </ValidatedInput>

        <ValidatedInput label="Группа клиентов" :vInput="$v['customerGroup']">
            <select
                class="input"
                :class="{ 'input--error': $v.customerGroup.$error }"
                multiple
                v-model="$v.customerGroup.$model"
            >
                <option value="vip">VIP</option>
                <option value="problematic">Проблемные</option>
                <option value="oms">ОМС</option>
            </select>
        </ValidatedInput>

        <ValidatedInput label="Лечащий врач" :vInput="$v['treatingDoctor']">
            <select
                class="input"
                :class="{ 'input--error': $v.treatingDoctor.$error }"
                v-model="$v.treatingDoctor.$model"
            >
                <option value="default">Выберите лечащего врача</option>
                <option value="ivanov">Иванов</option>
                <option value="zaharov">Захаров</option>
                <option value="chernisheva">Чернышева</option>
            </select>
        </ValidatedInput>

        <ValidatedInput label="Не отправлять SMS" labelRow :vInput="$v['dontSendSMS']">
            <input
                class="input"
                :class="{ 'input--error': $v.dontSendSMS.$error }"
                type="checkbox"
                v-model="$v.dontSendSMS.$model"
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
        $v: { type: Object, required: true },
    },
};
</script>

<style lang="sass">
@import fieldset
</style>
