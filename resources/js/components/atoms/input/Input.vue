<template>
    <div class='form__group' :class="[type === 'date' ? 'form__group--datepicker' : '', className]">
		<label class='form__label' :class="focus ? 'form__label--focus' : ''">{{ label }}</label>
        <div class='form__field' :class="[focus ? 'form__field--focus' : '', type === 'date' ? 'form__field--datepicker' : '']">
            <fa-icon v-if="icon !== ''" :icon='icon' size="lg"/>
            <input v-if="type !== 'date'" @keyup='sendValue()' v-model="value" @focus='focus = true' @blur='focus = false' :type='type' :class='className' :placeholder='placeholder'/>
            <vueDatepicker
                v-else
                v-model="date"
                :popover="{ placement: 'bottom', visibility: 'click' }"
                :masks="{ input: ['DD-MM-YYYY'], date: ['DD-MM-YYYY']}">
                <input
                id="date"
                slot-scope="{ inputProps, inputEvents }"
                v-bind="inputProps"
                v-on="inputEvents"
                @focus='focus = true' @blur='focus = false'>
            </vueDatepicker>
        </div>
	</div>
</template>

<script>
import vueDatepicker from 'v-calendar/lib/components/date-picker.umd'

export default {
    components: {
        vueDatepicker
    },
    props: {
        className: String,
        label: String,
        type: String,
        placeholder: String
    },
    beforeMount() {
        this.icon = this.getIcon(this.$props.type);
    },
    data() {
        return {
            icon: '',
            focus: false,
            value: '',
            date: new Date()
        }
    },
    methods: {
        getIcon(type) {
            switch (type) {
                case 'email':
                    return 'envelope';
                case 'password':
                    return 'lock';
                case 'date':
                    return 'calendar-alt';
                default:
                    return '';
            }
        },
        sendValue() {
            const valueEmitted = this.$props.type !== 'date' ? this.value : this.date;
            this.$emit('getValue', valueEmitted)
        }
    },
    computed: {
        formatDate() {
            let parsed = new Date(Date.parse(this.date));
            let year = parsed.getFullYear();
            let month = ('0' + (parsed.getMonth()+1)).slice(-2);
            let day = ('0' + parsed.getDate()).slice(-2);
            return `${year}-${month}-${day}`;
        }
    }
}
</script>
