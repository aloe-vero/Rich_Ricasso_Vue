/**
 * plugins/vuetify.js
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";



// Aucune configuration de thème ici

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
