(function () {

    var form = {
        validator: {
            rules: [],
            add: function (item, validators, contextElm) {
                this.rules.push({ item: item, validators: validators });
            },
            validate: function (item, validators, e, validateName) {
                for (var i = 0; i < validators.length; i++) {
                    var validation = validators[i];
                    if (!validateName || validateName == validation.name) {
                        var isValid = validation.func(item.get(0), e);
                        if (!isValid) {
                            this.showErrMsg(item, validation);
                            return false;
                        }
                    }
                }
                this.hideErrMsg(item);
                return true;
            },
            getItemValidations: function (item) {
                for (var i = 0; i < this.rules.length; i++) {
                    if (this.rules[i].item.is(item))
                        return this.rules[i].validators;
                }
            },
            showErrMsg: function (item, validation) {
                item.parent().addClass("error");
                var errLbl = document.getElementById(item.attr("id") + "Err");
                errLbl.innerHTML = validation.msg;
                errLbl.style.display = "";
                document.getElementById(item.attr("id") + "Lbl").style.display = "none";
            },
            hideErrMsg: function (item) {
                if (item.parent().hasClass("error")) {
                    item.parent().removeClass("error");
                    var errLbl = document.getElementById(item.attr("id") + "Err");
                    errLbl.innerHTML = "";
                    errLbl.style.display = "none";
                    if (item.prop("value") != "")
                        document.getElementById(item.attr("id") + "Lbl").style.display = "";
                }
            },
            addInputValueFilter: function (items, func, msg, name) {
                items.each(function () {
                    var item = $Jq(this);
                    item.on("keypress", function (e) {
                        var validKey = func(this, e);
                        if (msg) {
                            if (!validKey) {
                                form.validator.showErrMsg($Jq(this), { msg: msg });
                                function blurCheck() {
                                    form.validator.validate($Jq(this), form.validator.getItemValidations($Jq(this)), e, name);
                                    $Jq(this).off("blur", blurCheck)
                                }
                                $Jq(this).off("blur", blurCheck).on("blur", blurCheck)
                            }
                            else {
                                if (document.getElementById(item.attr("id") + "Err").innerText == msg) {
                                    form.validator.hideErrMsg($Jq(this));
                                }
                            }
                        }
                        return validKey;
                    });
                });
            },
            isValid: function () {
                var valid, validForm = true;
                for (var i = 0; i < this.rules.length; i++) {
                    valid = this.validate(this.rules[i].item, this.rules[i].validators);
                    if (!valid) {
                        if (validForm)
                            this.rules[i].item.focus();
                        validForm = false;
                    }
                }
                return validForm;
            }
        },
        submit: function () {
            if (!window.boolBeenHere) {
                if (!this.validator.isValid())
                    return false;
                if (document.getElementById("password_fake")) {
                    removeElementFromDom(document.getElementById("password_fake"));
                    removeElementFromDom(document.getElementById("__password_fake"));
                    removeElementFromDom(document.getElementsByName("password_fake"));
                }
                boolBeenHere = true;
                if (document.getElementById("system"))
                    document.getElementById("system").value = "Test";
                if (document.getElementById('enter'))
                    document.getElementById('enter').disabled = true;
                if (document.getElementById("login"))
                    document.getElementById("login").submit();
            }
        },
        SetInputWaterMark: function () {
            var $inputs = $Jq("[watermark]");
            var $watermarks;
            var water_prefix = "wtr_";
            var displayWatermark = function (a) {
                var $input = $Jq((a.target || a.srcElement) || a);
                var $watermark = $input.parent().find(".watermark");
                if ($watermark.css("display") == "none")
                    changeInputState($input, $watermark, !($input.prop("value") == undefined || $input.prop("value") == ""))
            };
            var displayinput = function (event) {
                var $element = $Jq(event.target || event.srcElement);
                var $input, $watermark;
                if ($element.prop("tagName") == "INPUT") {
                    $input = $element;
                    $watermark = $input.parent().find(".watermark");
                }
                else {
                    if ($element.prop("tagName") == "STRONG")
                        $element = $element.parent();
                    if ($element.hasClass("watermark"))
                        $watermark = $element;
                    else
                        return;
                    $input = $watermark.parent().find("input");
                }
                changeInputState($input, $watermark, true);
                $watermarks.each(function () {
                    if (this.style.display == "none" && this != $watermark[0])
                        changeInputState($input, $watermark, !($input.prop("value") == undefined || $input.prop("value") == ""))
                });

            };
            var changeInputState = function (input, watermark, inputDispalyState) {
                if (input.parent().prev().find(".inputErr").css("display") == "none")
                    input.parent().prev().find(".inputLabel").toggle(inputDispalyState);
                watermark.toggle(!inputDispalyState);
            };
            $watermarks = $inputs.parent().append(function () {
                return "<div class='watermark' id='" + water_prefix + $Jq(this).find("input").attr("id") + "'  tabindex='-1'>" + $Jq(this).find("input").attr("watermark") + "</div>";
            }).find(".watermark");
            $Jq(".watermark").css({ position: "absolute", right: 0 });
            $Jq(".watermark").on("click focus", function (e) {
                $Jq(e.target || e.srcElement).parent().find("input").focus();
            });
            $Jq(".watermark").on("click touchstart", displayinput);
            $inputs.on("change paste input blur", function (e) { this.value == "" ? displayWatermark(e) : displayinput(e); });
            if ($Jq('html').hasClass('ie8')) {
                $inputs.on("propertychange", function (ev) {
                    var e = ev.originalEvent;
                    if (e.type != "propertychange" || e.propertyName == "value")
                        this.value == "" ? displayWatermark(e) : displayinput(e);
                });
            }
            if (document.all && document.compatMode)
                $Jq(".watermark").css({ backgroundColor: "#fff" });
            $inputs.each(function () { displayWatermark(this) });

        },
        init: function () {
            $Jq("input.input").each(function () { this.value = ""; });
            if ($Jq("input.input")[0])
                focusElm = $Jq("input.input").eq(0).focus();
        },
        setHelp: function () {
            $Jq("body").on("click touchstart", function (e) {
                var obj = $Jq(e.target).parents(".help");
                if ($Jq(e.target).is(".help") || obj.length) {

                    $Jq(".helpMsg").toggleClass("open", false);
                    $Jq("#" + obj.prop("id").replace("help", "helpMsg")).toggleClass("open", true);
                    if ($Jq("#" + obj.prop("id").replace("help", "helpMsg"))[0])
                        $Jq("#" + obj.prop("id").replace("help", "helpMsg"))[0].scrollTop = 0;
                }
                else
                    if (!($Jq(e.target).is(".helpMsg") || $Jq(e.target).parents(".helpMsg").length)) {
                        $Jq(".helpMsg").toggleClass("open", false);
                    }
            });
            $Jq("a.help").on("mouseover", function (e) {
                parentId = this.id;
                $Jq(".helpMsg").removeClass(function () {
                    if (this.id.replace("helpMsg", "help") == parentId)
                        return "";
                    return "open";
                });
            });
        }
    };
    $Jq("#marketBox").css('display', 'none');
    window.formUtl = form;
    if (window.initFormValidation)
        window.initFormValidation();
    form.SetInputWaterMark();
    form.validator.addInputValueFilter($Jq("input.input"), window.isHebrewPressed, window.hebErr, 'hebrew');
    form.setHelp();
    if (capitalMarketUrl != "")
        window.fn_iframe(capitalMarketUrl);
    form.init();
})();


function requiredValidation(elm) {
    return elm.value != "";
}
function hebrewValidation(obj) {
    if (obj) {
        hasHeb = false;
        var i;
        for (i = 0; i < obj.value.length && !hasHeb; i++) {
            if (isHebrew(obj.value.charCodeAt(i)))
                hasHeb = true;
        }
        return !hasHeb;
    }
}
function samePasswordValidation() {
    var new_pass = document.getElementById("new_password").value;
    var ver_pass = document.getElementById("ver_password").value;
    if (new_pass == "" || ver_pass == "")
        return true;
    return new_pass == ver_pass;
}

function isHebrewPressed(textObj, e) {
    if (!checkEnter(e) && textObj) {
        e = e || window.event;
        var chr = e.which || e.keyCode;
        if (chr != null) {
            var isValidChar = !isHebrew(chr)
            if (!isValidChar)
                return false;
        }
    }
    return true;
}