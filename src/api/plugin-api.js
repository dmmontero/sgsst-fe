import * as api from "./index";
export default {
	install: function(Vue, name = "$api") {
		Object.defineProperty(Vue.prototype, name, { value: api });
	}
};
