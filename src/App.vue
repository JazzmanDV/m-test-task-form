<template>
    <div class="app">
        <form class="form" action="./" method="post">
            <div class="fieldsets-wrapper">
                <CommonInfoFieldSet :$v="$v" />
                <AddressInfoFieldSet :$v="$v" />
                <PassportInfoFieldSet :$v="$v" />
            </div>
            <input class="input button" type="submit" value="Создать нового клиента" v-on:click="onSubmit" />
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

export default {
    name: "App",
    components: { CommonInfoFieldSet, AddressInfoFieldSet, PassportInfoFieldSet },
    data() {
        return {
            lastName: "",
            firstName: "",
            middleName: "",
            birthday: null,
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
            passportDate: null,
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
        birthday: {
            required,
            minDate: minDate(new Date("1900-01-01")),
            maxDate: maxDate(new Date()),
        },
        phoneNumber: {
            required,
            numeric,
            length: length(11),
            startsWith: startsWith("7"),
        },
        gender: {},
        customerGroup: {
            required,
        },
        treatingDoctor: {},
        dontSendSMS: {},

        index: {
            numeric,
            length: length(6),
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
            required,
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
            maxLength: maxLength(50),
        },
        passportDate: {
            required,
            minDate: minDate(new Date("1900-01-01")),
            maxDate: maxDate(new Date()),
        },
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();

            this.$v.$touch();

            if (!this.$v.$invalid) {
                alert("Новый клиент успешно создан");
            }
        },
    },
};
</script>

<style scoped lang="sass">
@import variables

body
    margin: 0

.app
    font-family: "Exo 2", sans-serif
    font-weight: 300

    box-sizing: border-box

    max-width: 60rem

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

.fieldsets-wrapper
    display: flex
    flex-wrap: wrap
    justify-content: center
    gap: 1rem

.button
    width: fit-content
    height: fit-content

    cursor: pointer

    &:hover
        box-shadow: $primary-box-shadow--hovered
</style>
