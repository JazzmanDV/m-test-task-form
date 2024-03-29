<template>
    <div class="app">
        <form class="form" action="./" method="post">
            <div class="fieldsets-wrapper">
                <CommonInfoFieldSet :vFieldSet="$v.commonInfo" />
                <AddressInfoFieldSet :vFieldSet="$v.addressInfo" />
                <PassportInfoFieldSet :vFieldSet="$v.passportInfo" />
            </div>
            <div class="flex-column-center">
                <SubmitInput
                    value="Создать нового клиента"
                    :disabled="$v.$anyError"
                    @on-submit-button-click="handleSubmitButtonClick"
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

import SubmitInput from "./components/Inputs/SubmitInput.vue";

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

const alphaWithSpecialSymbols = helpers.withParams(
    { type: "alphaWithSpecialSymbols", value: "букв, пробелов, тире" },
    (value) => {
        if (!value) {
            return true;
        }
        return /^[а-яА-Яa-zA-Z\s-]*$/.test(value);
    }
);

const numericWithSpaces = helpers.withParams({ type: "numericWithSpaces", value: "цифр, пробелов" }, (value) => {
    if (!value) {
        return true;
    }
    return /^[0-9\s]*$/.test(value);
});

export default {
    name: "App",
    components: { CommonInfoFieldSet, AddressInfoFieldSet, PassportInfoFieldSet, SubmitInput },
    data() {
        return {
            commonInfo: {
                lastName: "",
                firstName: "",
                middleName: "",
                birthdate: "",
                phoneNumber: "",
                gender: "default",
                customerGroup: [],
                treatingDoctor: "default",
                dontSendSMS: false,
            },

            addressInfo: {
                index: "",
                country: "",
                region: "",
                city: "",
                street: "",
                house: "",
            },

            passportInfo: {
                documentType: "default",
                passportSeries: "",
                passportNumber: "",
                passportSource: "",
                passportDate: "",
            },
        };
    },
    validations: {
        commonInfo: {
            lastName: {
                required,
                alphaWithSpecialSymbols,
                maxLength: maxLength(100),
            },
            firstName: {
                required,
                alphaWithSpecialSymbols,
                maxLength: maxLength(100),
            },
            middleName: {
                alphaWithSpecialSymbols,
                maxLength: maxLength(100),
            },
            birthdate: {
                required,
                minDate: minDate(new Date("1900-01-01")),
                maxDate: maxDate(new Date()),
            },
            phoneNumber: {
                required,
                numericWithSpaces,
                length: lengthWithoutSpaces(11),
                startsWith: startsWith("7"),
            },
            gender: {},
            customerGroup: {
                required,
            },
            treatingDoctor: {},
            dontSendSMS: {},
        },

        addressInfo: {
            index: {
                numericWithSpaces,
                length: lengthWithoutSpaces(6),
            },
            country: {
                maxLength: maxLength(100),
            },
            region: {
                maxLength: maxLength(100),
            },
            city: {
                required,
                maxLength: maxLength(100),
            },
            street: {
                maxLength: maxLength(100),
            },
            house: {
                maxLength: maxLength(100),
            },
        },

        passportInfo: {
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
                maxLength: maxLength(250),
            },
            passportDate: {
                required,
                minDate: minDate(new Date("1900-01-01")),
                maxDate: maxDate(new Date()),
            },
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
@import error

:root
    font-family: "Exo 2", sans-serif
    font-weight: 300

    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale

body
    margin: 0
    background-color: #fafafa
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

.flex-column-center
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

@media (max-width: 400px)
    .app,
    .form
        padding: 0.5rem
</style>
