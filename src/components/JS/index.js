import Vue from 'vue'
import MessageBox from './MessageBox'

export var MessageBoxs = (function() {
    var defaults = {
        //默认值
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCencel: null,
        handleOk: null
    };

    var Mycomponent = Vue.extend(MessageBox);

    return function(opts) {
        //配置参数

        for (var attr in defaults) {
            defaults[attr] = opts[attr];
        }

        var vm = new Mycomponent({
            el: document.createElement('div'),
            data: {
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                handleCencel() {
                    defaults.handleCencel && defaults.handleCencel.bind(this)();
                    document.body.removeChild(vm.$el);

                },
                handleOk() {
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        });
        document.body.appendChild(vm.$el);
    };
})();