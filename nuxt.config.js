{
buildModules: [

    // With options
    ['@nuxtjs/vuetify', { 
        customVariables: ['~/assets/variables.scss'],
      treeShake: true
    }]
]
}

export default {
    vuetify: {
      customVariables: ['~/assets/variables.scss'],
      treeShake: true
    },
  }