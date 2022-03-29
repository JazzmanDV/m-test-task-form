<template>
    <div class="app">
        <form class="form" action="./" method="post">
            <div class="fieldsets-wrapper">
                <CommonInfoFieldSet :$v="$v" />
                <AddressInfoFieldSet :$v="$v" />
                <PassportInfoFieldSet :$v="$v" />
            </div>
            <div class="flex-column-center">
                <input
                    class="button"
                    type="submit"
                    value="Создать нового клиента"
                    :disabled="$v.$anyError"
                    :class="{ 'button--disabled': $v.$anyError }"
                    @click="handleSubmitButtonClick"
                />
                <span v-if="$v.$anyError" class="error error--center">Некоторые поля заполнены неправильно</span>
            </div>
        </form>
    </div>
</template>

<script>
import { helpers, required, maxLength, numeric } from "vuelidate/lib/validators";

import CommonInfoFieldSet from "./components/FieldSets/CommonInfoFieldSet.vue";
import AddressInfoFieldSet from "./components/FieldSets/AddressInfoFieldSet.vue";
import PassportInfoFieldSet from "./components/FieldSets/PassportInfoFieldSet.vue";

const minDate = (minDate) => {
    return helpers.withParams({ type: "minDate", value: minDate }, (value) => {
        if (!value) {
            return true;
        }
        return new Date(value).setHours(0, 0, 0, 0) >= minDate.setHours(0, 0, 0, 0);
    });
};

const maxDate = (maxDate) => {
    return helpers.withParams({ type: "maxDate", value: maxDate }, (value) => {
        if (!value) {
            return true;
        }
        return new Date(value).setHours(0, 0, 0, 0) <= maxDate.setHours(0, 0, 0, 0);
    });
};

const length = (length) => {
    return helpers.withParams({ type: "length", value: length }, (value) => {
        if (!value) {
            return true;
        }
        return value.length === length;
    });
};

const lengthWithoutSpaces = (length) => {
    return helpers.withParams({ type: "length", value: length }, (value) => {
        if (!value) {
            return true;
        }
        return value.replaceAll(" ", "").length === length;
    });
};

const startsWith = (character) => {
    return helpers.withParams({ type: "startsWith", value: character }, (value) => {
        if (!value) {
            return true;
        }
        return value[0] === character;
    });
};

const notDefault = helpers.withParams({ type: "notDefault", value: "default" }, (value) => {
    if (!value) {
        return true;
    }
    return value !== "default";
});

const numericWithSpaces = helpers.regex("numeric", /^[0-9\s]*$/);

export default {
    name: "App",
    components: { CommonInfoFieldSet, AddressInfoFieldSet, PassportInfoFieldSet },
    data() {
        return {
            lastName: "",
            firstName: "",
            middleName: "",
            birthdate: "",
            phoneNumber: "",
            gender: "default",
            customerGroup: [],
            treatingDoctor: "default",
            dontSendSMS: false,

            index: "",
            country: "",
            region: "",
            city: "",
            street: "",
            house: "",

            documentType: "default",
            passportSeries: "",
            passportNumber: "",
            passportSource: "",
            passportDate: "",
        };
    },
    validations: {
        lastName: {
            required,
            maxLength: maxLength(50),
        },
        firstName: {
            required,
            maxLength: maxLength(50),
        },
        middleName: {
            maxLength: maxLength(50),
        },
        birthdate: {
            required,
            minDate: minDate(new Date("1900-01-01")),
            maxDate: maxDate(new Date()),
        },
        phoneNumber: {
            required,
            numeric: numericWithSpaces,
            length: lengthWithoutSpaces(11),
            startsWith: startsWith("7"),
        },
        gender: {},
        customerGroup: {
            required,
        },
        treatingDoctor: {},
        dontSendSMS: {},

        index: {
            numeric: numericWithSpaces,
            length: lengthWithoutSpaces(6),
        },
        country: {
            maxLength: maxLength(50),
        },
        region: {
            maxLength: maxLength(50),
        },
        city: {
            required,
            maxLength: maxLength(50),
        },
        street: {
            maxLength: maxLength(50),
        },
        house: {
            maxLength: maxLength(50),
        },

        documentType: {
            notDefault,
        },
        passportSeries: {
            numeric,
            length: length(4),
        },
        passportNumber: {
            numeric,
            length: length(6),
        },
        passportSource: {
            maxLength: maxLength(150),
        },
        passportDate: {
            required,
            minDate: minDate(new Date("1900-01-01")),
            maxDate: maxDate(new Date()),
        },
    },
    methods: {
        handleSubmitButtonClick(e) {
            e.preventDefault();

            this.$v.$touch();

            if (!this.$v.$invalid) {
                alert("Новый клиент успешно создан");
            }
        },
    },
};
</script>

<style lang="sass">
:root
    font-family: "Exo 2", sans-serif
    font-weight: 300

    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale

body
    margin: 0
    background-color: #fafafa

.flex-column-center
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

.error
    display: block

    color: red
    font-size: 0.85rem

    max-width: 15rem

    margin-left: 0.75rem

    &:not(:last-child)
        margin-bottom: 0.25rem

    &--center
        margin-left: 0
        text-align: center
</style>

<style scoped lang="sass">
@import variables

.app
    box-sizing: border-box

    width: fit-content
    max-width: 70rem

    margin-left: auto
    margin-right: auto

    padding: 1rem

.form
    display: flex
    flex-direction: column
    align-items: center
    gap: 1rem

    padding: 1rem

    border-radius: 0.5rem

    box-shadow: $primary-box-shadow

    background-color: white

.fieldsets-wrapper
    display: flex
    flex-wrap: wrap
    justify-content: center
    gap: 1rem

.button
    font: inherit

    width: fit-content
    height: fit-content

    background-color: white

    padding: 0.5rem

    border: none
    border-radius: 0.5rem

    outline: none

    box-shadow: $primary-box-shadow

    cursor: pointer

    transition: 0.25s box-shadow

    &:hover,
    &:focus-visible
        box-shadow: $primary-box-shadow--hovered

    &--disabled
        cursor: default

@media (max-width: 400px)
    .app,
    .form
        padding: 0.5rem
</style>
