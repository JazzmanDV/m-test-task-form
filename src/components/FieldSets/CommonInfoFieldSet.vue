<template>
    <fieldset class="fieldset">
        <span class="fieldset__title">Общая информация</span>

        <ValidatedInput inputName="lastName" label="Фамилия" :$v="$v">
            <input
                class="input"
                :class="{ 'input--error': $v.lastName.$error }"
                type="text"
                placeholder="Введите фамилию"
                v-model.trim="$v.lastName.$model"
            />
        </ValidatedInput>

        <ValidatedInput inputName="firstName" label="Имя" :$v="$v">
            <input
                class="input"
                :class="{ 'input--error': $v.firstName.$error }"
                type="text"
                placeholder="Введите имя"
                v-model.trim="$v.firstName.$model"
            />
        </ValidatedInput>

        <ValidatedInput inputName="middleName" label="Отчество" :$v="$v">
            <input
                class="input"
                :class="{ 'input--error': $v.middleName.$error }"
                type="text"
                placeholder="Введите отчество"
                v-model.trim="$v.middleName.$model"
            />
        </ValidatedInput>

        <ValidatedInput inputName="birthday" label="Дата рождения" :$v="$v">
            <input
                class="input"
                :class="{ 'input--error': $v.birthday.$error }"
                type="date"
                v-model="$v.birthday.$model"
            />
        </ValidatedInput>

        <ValidatedInput inputName="phoneNumber" label="Номер телефона" :$v="$v">
            <input
                class="input"
                :class="{ 'input--error': $v.phoneNumber.$error }"
                type="text"
                placeholder="7 XXX XXX XX XX"
                v-model="$v.phoneNumber.$model"
            />
        </ValidatedInput>

        <ValidatedInput inputName="gender" label="Пол" :$v="$v">
            <select class="input" :class="{ 'input--error': $v.gender.$error }" v-model="$v.gender.$model">
                <option value="default">Выберите пол</option>
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
            </select>
        </ValidatedInput>

        <ValidatedInput inputName="customerGroup" label="Группа клиентов" :$v="$v">
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

        <ValidatedInput inputName="treatingDoctor" label="Лечащий врач" :$v="$v">
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

        <ValidatedInput inputName="dontSendSMS" label="Не отправлять SMS" labelRow :$v="$v">
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
    components: { ValidatedInput },
    props: {
        $v: Object,
    },
};
</script>

<style lang="sass">
@import fieldset
</style>
