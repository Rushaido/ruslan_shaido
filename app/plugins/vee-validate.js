import { defineRule, configure } from "vee-validate";
import { email, required } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";

import ru from "@/json/vee-validate/ru.json";

const rules = {
  email: email,
  required: required,
};

export default defineNuxtPlugin(() => {
  Object.keys(rules).forEach((rule) => {
    defineRule(rule, rules[rule]);
  });

  configure({
    generateMessage: localize({
      ru
    })
  })

  setLocale("ru")
});
