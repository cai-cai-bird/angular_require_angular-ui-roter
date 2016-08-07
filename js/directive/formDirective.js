/**
 * Created by liuxin on 2016/8/7 0007.
 */
define(["module/module"],function (app) {
     app.directive('formError',["$compile",function ($compile) {
        return {
            restrict:"A",
            require:"ngModel",
            link:function (scope,element,attrs,ngModel) {
                //创建一个子scope，true表示这个子scope是个独立的作用域，它不会从父级作用域自动继承属性
                var subScope=scope.$new(true);
                //是否有需要的显示错误信息
                subScope.hasError=function () {
                    return ngModel.$invalid&&ngModel.$dirty;
                }
                //错误信息的内容
                subScope.errors=function () {
                    return ngModel.$error;
                }
                //把一段活html编译成“活dom”，然后把subscope传给它，这个“活dom”将会跟随subscope的变化自动更新自己
                var hint=$compile("<ul class='bf-filed-error' ng-if='hasError()'>" +
                    "<li ng-repeat='(name,wrong) in errors()' ng-if='wrong'>{{name | error}}</li>" +
                    "</ul>")(subScope);
                //把这段“活dom”追加到当前元素后面，从而显示出来
                element.after(hint);
            }
        }

    }]);
});