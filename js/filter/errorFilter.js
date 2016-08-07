/**
 * Created by liuxin on 2016/8/7 0007.
 */
define(["module/module","service/errorMessageService"],function (app) {
    app.filter("error",["errorMessage",function (errorMessage) {
        return function (name) {
            return errorMessage[name] || name;
        }
    }]);
});