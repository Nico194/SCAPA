import Vue from 'vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignInAlt,
         faEnvelope,
         faLock,
         faAddressCard,
         faCalendarAlt
        } from '@fortawesome/free-solid-svg-icons'

library.add(faSignInAlt,
                faEnvelope,
                faLock,
                faAddressCard,
                faCalendarAlt
        )

Vue.component('fa-icon', FontAwesomeIcon);
