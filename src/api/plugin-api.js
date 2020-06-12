import * as api from "./index";
// import * as categoria_documento from "./categoria-documento.api";

export default {
  install: function(Vue, name = "$api") {
    Object.defineProperty(Vue.prototype, name, { value: api });
    // Object.defineProperty(Vue.prototype, name, { value: categoria_documento });
  }
};
