import Recaptcha from '@/components/utils/Recaptcha.vue';

export default {
  /**
   * Usage:
   * Import the mixin, and use the component:
   *   <Recaptcha
   *      ref="recaptcha"
   *      @onRecaptchaVerified="onRecaptchaVerified"
   *   />
   */
  components: {
    Recaptcha,
  },
  data() {
    return {
      recaptcha: {
        token: null,
      },
    };
  },
  methods: {
  },
};
