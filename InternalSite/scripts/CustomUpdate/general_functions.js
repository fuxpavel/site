/* v1.0.3*/
document.createElement("header");
document.createElement("aside");
document.createElement("section");
document.createElement("footer");


function openHelp_5(HelpURL,helpPage) {
    str_glisha = HelpURL + '?ref=' + helpPage;
    window.open(str_glisha, 'HelpPage', 'resizable=no,width=350,height=350,scrollbars=no,top=250,left=350 ');
}
function openWindow3(url, name, w, h) {
    popupWin = window.open(url, name, 'width=' + w + ',height=' + h + ',scrollbars=1,status=1,menubar=0,resizable=1,top=0,left=0,');
}
function opWnVht(url, name, w, h) {
    popupWin = window.open(url, name, 'width=' + w + ',height=' + h + ',menubar=no,toolbar=no,location=no,status=no,scrollbars=no,resizable=no');
}
function launchApplet(url,windowW,windowH) {
	var screenW = screen.width ;
	var screenH = screen.height ;
	var leftPosition = ( screenW / 2 ) - ( windowW / 2 );
	var topPosition = ( screenH / 2 ) - ( windowH / 2 );
    var win = window.open(url, "w2l", "width="+ windowW +',height=' + windowH +',top=' + topPosition +',left='+ leftPosition + ',menubar=no,toolbar=no,location=no,status=no,scrollbars=no,resizable=no');
    win.focus();
}
function ReferToUnSecured(target) 
{
	var url ;
	var ref ;
	url = window.top.location.href ;
	split = url.split("?");
			
	for (var i = 0; i < split.length; i++) 
	{
		if (split[i].substr(0,4)=="ref=") 
		{
			ref = split[i]
		}
	}
			
	window.top.location = target + "?" + ref
}
function goToApp( LinkHref) {
    window.close();
}
function initPage (vgnUrl)
{
    firstField = "";
    setVignetteUrl(vgnUrl);
    if (document.getElementById("ver_password"))
    {
        ClearFields('password','new_password','ver_password');
        if(document.getElementById("password"))
            firstField = document.getElementById("password");
    }
    if (document.getElementById("uid"))
    {
        ClearFields('uid','password');
        firstField = document.getElementById("uid");
    }    
    if (document.getElementById("RSAToken"))
    {
        ClearFields('RSAToken');
        firstField = document.getElementById("RSAToken");
    }    
    errorBloonsPlaceFix();
    placeholderFix();
    if(firstField)
        setTimeout(function()
         { firstField.focus();
         }, 10);
}
function errorBloonsPlaceFix()
{
     var inputs = document.getElementsByTagName('input');
     for(var i=0;i< inputs.length;i++)
     {
        input= inputs[i];
        err_bal = document.getElementById(input.id+"_err");
        if (document.getElementById(inputs[i].id+"_placeholder"))
            input= document.getElementById(inputs[i].id+"_placeholder");
        if(err_bal){
            err_bal.style.display="inline";
            if(getTop(input)!=getTop(err_bal))
            {
                if(document.body.dir == "rtl")
                    leftPoint = parseInt(getLeft(input))-parseInt(err_bal.clientWidth)-10;
                else
                    leftPoint = parseInt(getLeft(input))+parseInt(input.clientWidth)+5;
                err_bal.style.left=leftPoint+"px";   
            }
            err_bal.style.display="none";
        }
     }
}
function setVignetteUrl(vgnUrl)
{
    var myUrl = top.window.location.href.toLowerCase();
    if(vgnUrl)
        fn_iframe(vgnUrl);

}
function fn_iframe(src)
{
    var frm = document.createElement("iframe");
    frm.src = src;
    frm.width = 196;
    frm.height = 0;
    frm.scrolling = "no";
    frm.allowTransparency = "true";
    frm.frameBorder = "0";
    frm.id = "promotion";
    frm.name = "promotion";
    frm.className = "MarketingCubeIFrame";
    elm = document.getElementById("v_iframe");
    if(elm)
        elm.appendChild(frm);
}
function ClearFields() {
    for (var i = 0; i < arguments.length; i++) {
        if(document.getElementById(arguments[i]))
            document.getElementById(arguments[i]).value = "";
    }
}

function checkEnter(e)
{
        if(window.event) /* IE*/
            charCode = e.keyCode;
        else if(e.which) /* Netscape/Firefox/Opera*/
            charCode = e.which;
  
    if(charCode==13) 
    {
        if( PageMode == 3)
            doPost();
        else
            submit_form();
        return true;
    }
    return false;
}

function validate_field_heb(inputs)
{	
    if(inputs){
	    for(var i=0;i<inputs.length;i++)
	    {
	        if(inputs[i] )
	        {
		        if(inputs[i].value=="")
		        {
		            displayMessage(inputs[i].id, inputs[i].id + '_err', true, 'all');
			        inputs[i].focus();
			        return false;
		        }
		        else
		        {
		            displayMessage(inputs[i].id, inputs[i].id + '_err', false, 'all');
		        }
		    }
	    }}
	return true;
}
function valideNumericInput (inputs)
{
    var state =true;
    if(inputs)
    {
        for(var i=0;i<inputs.length;i++)
        {
            var numOfChars = "+";
            var inputMinLength =inputs[i].getAttribute("minlength");
            if (inputMinLength)
                numOfChars = "{"+inputMinLength+"}";
            var NumericStringLenPatt = new RegExp ("^\\d"+numOfChars+"$")
            if(NumericStringLenPatt.test(inputs[i].value))
                displayMessage(inputs[i].id, inputs[i].id + '_err', false, 'num');
            else                    
            {
	            displayMessage(inputs[i].id, inputs[i].id + '_err', true, 'num');
	            state = false;
	        }
		    
        }
    }
    return state;
}

function isHebrew(chr)
{
    return (chr >= 1448 && chr <= 1514); 
}

function hasHebrew(obj) {
    if(obj)
    {
        hasHeb = false;
        var i;
        for (i = 0; i < obj.value.length && !hasHeb; i++) {
            if (isHebrew(obj.value.charCodeAt(i)))
                hasHeb = true;
        }
        if(obj.value =="")
            hasHeb = false;
        if (hasHeb) {
            setTimeout(function() { obj.focus(); obj.select(); }, 10);
        }
        return hasHeb;
    }
}
function hebDisplayMessage(errorInput, errorLabel, dis, errorType)
{
    inp=document.getElementById(errorInput); 
    if(inp)   
    {
        if( errorType == "heb" && inp.value == "")
            dis = false;
        displayMessage(errorInput, errorLabel, dis, errorType);
    }
}
function displayMessage(errorInput, errorLabel, dis, errorType) /*errorType = heb,same,num*/
{
    err_div = document.getElementById(errorLabel);
    err_label = document.getElementById(errorLabel+"_"+errorType);
    err_input = document.getElementById(errorInput);
    cont = true;
    if(err_div && err_label)
    {
        for(i=0;i<err_div.children.length;i++)
        {
            if(err_div.children[i].style.display == "inline")
                if( err_div.children[i] != err_label)
                    cont=false;      
        }
        if (cont||dis)
         for(i=0;i<err_div.children.length;i++)
        {
        err_div.children[i].style.display = "none"
        }
        if (dis) {
            err_div.style.display = "inline";
            err_label.style.display = "inline";        
        }
        else
            if(cont)
                err_div.style.display = "none";
    }
    return ;
}

function notAllowHebrewChars(textObj, e) {
    if(!checkEnter(e) && textObj)
    {
        e = e || window.event;
        var chr = e.which || e.keyCode;
        if (chr != null) {
            var isValidChar = !isHebrew(chr)
            displayMessage(textObj.id, textObj.id + "_err", !isValidChar, "heb");
            if (!isValidChar)
                return false;
        }
    }
}

function checkFormFromHebrewChars() {
    if(PageMode==2)
    {
        if (hasHebrew(document.getElementById('password')))
            return false;
        if (hasHebrew(document.getElementById('new_password')))
            return false;
    }
    else
    {
        if (hasHebrew(document.getElementById('uid')))
            return false;
        if (hasHebrew(document.getElementById('password')))
            return false;
    }
    return true;
}

var boolBeenHere = false;

function newPassSuitability( state,elm)
{
    hasHeb = false;
    if (elm) {
        hasHeb = hasHebrew(elm);
        displayMessage(elm.id, elm.id + '_err', hasHeb, 'heb');
    }
    if(!hasHeb)
    {
        new_pass = document.getElementById("new_password")
        ver_pass = document.getElementById("ver_password")
        if(new_pass && ver_pass)
        {
            if (state == 'blurState')
                if (new_pass.value == "" || ver_pass.value == "")
                    return;
            if (new_pass.value != ver_pass.value) {
                displayMessage('ver_password', 'ver_password_err', true, "same");
                return false;
            }
            else
            {
                displayMessage('ver_password', 'ver_password_err', false, "same");
                return true;
            }
        }
    }
}
function isNumeric(charCode)
{  
    return (charCode>=48 &&  charCode<=57)     
}
function  checkRsaField(e)
{
    if(checkEnter(e))
        return false;
    if(window.event) /* IE*/
        charCode = e.keyCode;
    else if(e.which) /* Netscape/Firefox/Opera*/
        charCode = e.which;
    return isNumeric(charCode);
}
function submit_form()
{

    if (!boolBeenHere)
    {
        if(!checkFormFromHebrewChars())
            return false;
        var inp = document.getElementsByTagName('input');
        var inputs = [];
        var j=0;
        for(var i in inp){
            if(inp[i] && (inp[i].id == "uid" || inp[i].id == "password" || inp[i].id == "new_password" || inp[i].id == "ver_password")){
                inputs[j]=inp[i];
                j++;
            }
        }
        if(validate_field_heb(inputs)==false)	
			return false;
	    if (PageMode==2 && !newPassSuitability('submitState'))
	        return false;
	    removeElementFromDom(document.getElementById("password_fake"));
	    removeElementFromDom(document.getElementById("__password_fake"));
	    removeElementFromDom(document.getElementsByName("password_fake"));
        boolBeenHere = true;
        if(document.getElementById('enter'))
            document.getElementById('enter').disabled = true;
        if (document.getElementById('leumiOnKey'))   document.getElementById('leumiOnKey').disabled = true;
        if(document.getElementById("system"))
            document.getElementById("system").value = "Test";

        if(document.getElementById("login"))
            document.getElementById("login").submit();
    }
    return false;
}
function removeElementFromDom(element)
{
    //var element = document.getElementById(id);
    if (element) {
        if (element.length > 0)
            element = element[0];
        if (element == null)
            return;
        var elem_parent = element.parentNode;
        if (elem_parent != null)
            elem_parent.removeChild(element);
    }
}
function doPost(value)
{
    if(!value && document.getElementById("challenge"))
        value = document.getElementById("challenge").value
    if(value == 3 || value == 4)
    {
        var rsaInput=document.getElementById('RSAToken');
        var inputs = [];
        if(rsaInput)
        {
           inputs [0]= document.getElementById('RSAToken');
           if(validate_field_heb(inputs)==false)	
		       return false;
		   if(!valideNumericInput(inputs))
		       return false; 
		}
    }
    if(document.getElementById("challenge") && value)
        document.getElementById("challenge").value = value;
    if(document.getElementById('login'))
        document.getElementById('login').submit();
}

function tabClicked(str, num) {
    if ((PageMode == 1 ||num==2) &&  appWT != "")
    {
        switch (PageMode)
        {
            case 1:
                titleWT = "Login";
                break;
            case 2: 
                titleWT = "Change Password";
                break;
            case 3: 
                titleWT = "RSA";
                break;
            case 4: 
                titleWT = "Message";
                break;
        }
        var v_dcsuri = escape(appWT);
        var v_ti = escape(titleWT)
        var v_ob_n = escape('Footer')
        var v_loct = escape(str);
        dcsMultiTrack('WT.prj', 'LPA', 'WT.ti', v_ti, 'DCS.dcsuri', v_dcsuri, 'WT.ob_t', 'Menu', 'WT.ob_n', v_ob_n, 'WT.action', 'Click', 'WT.loct', v_loct, 'WT.mi', num);
    }
}
 function SendHref(LinkHref) {
    top.location.href = LinkHref;
}

function submit_onkey(cmd) {
    if (!boolBeenHere) {
        boolBeenHere = true;
        if(document.getElementById('enter'))
            document.getElementById('enter').disabled = true;
        if(document.getElementById('onkey'))
            document.getElementById('onkey').disabled = true;
        if (cmd != undefined)
            document.getElementById(cmd).disabled = true;
        if(document.getElementById("system"))
            document.getElementById("system").value = "PKI";
        if(document.getElementById('login'))
            document.getElementById('login').submit();
    }
}
function showStrength() {
    var strImage = "";
    var strText = "";
    if(document.getElementById("new_password"))
    {
        var inputText = document.getElementById("new_password").value;

        strImage = '<img width="115" height="9" src="https://cache.bankleumi.co.il/nLogin/images/StrengthBg4.png" title="" alt="" border="0"  align="middle" hspace="20">';
        strText = 'בינוני';

        return strImage + strText;
    }
}
function BackPage(id, num) {
    if(document.getElementById(id))
        document.getElementById(id).disabled = true;
    if (num != undefined)
        history.go(-2);
    else
        history.back();
}


function SendHref2(LinkHref) {
    window.open(LinkHref, "_top");
}

function openWindow4(url, name, w, h) {
    popupWin = window.open(url, name, 'width=' + w + ',height=' + h + ',toolbar=1,location=1,directories=1,scrollbars=1,status=1,menubar=1,resizable=1,top=0,left=0,');
    if ((navigator.appName != "Microsoft Internet Explorer") && (navigator.appVersion.substring(0, 1) == "3"))
        popupWin.focus();
}
function popUpV7_External(url) {
    sealWin = window.open(url, "win", 'toolbar=0,location=0,directories=0,status=no,menubar=no,scrollbars=no,resizable=yes,width=800,height=450');
    self.name = "mainWin";
}
function openHelp_h(helpPage)
        {  
  	        str_glisha='http://help.bankleumi.co.il/kochav_glisha?ref='+helpPage;
	        window.open(str_glisha,'HelpPage','resizable=no,width=762,height=602,scrollbars=no,top=250,left=350 ');
        }
        	

function popUp5(url) {
    sealWin = window.open(url, "win", 'toolbar=0,location=0,directories=0,status=no,menubar=no,scrollbars=no,resizable=no,width=600,height=450');
    self.name = "mainWin";
}
function popUpScroll(url) {
    sealWin = window.open(url, "win", 'toolbar=0,location=0,directories=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=450');
    self.name = "mainWin";
}
function placeholderFix()
{
    if(!hasPlaceholderSupport()||isOpera())
    {
     var inputs = document.getElementsByTagName('input');
        inputToAdd=[];
        j=0;
         for(var i=0,  count = inputs.length;i<count;i++)
         {
              if(inputs[i]&&inputs[i].getAttribute('placeholder') && (inputs[i].id == "uid" || inputs[i].id == "password" || inputs[i].id == "new_password" || inputs[i].id == "ver_password" || inputs[i].id == "RSAToken"))
              {
                 placeholderInput = document.createElement("span");
                 placeholderInput.id = inputs[i].id + "_placeholder";
                 placeholderInput.className = inputs[i].className + " placeholder plcHldrDiv";
                 placeholderInput.innerHTML = inputs[i].getAttribute("placeholder");
                 inputs[i].className = inputs[i].className + " inputOpacity inputWithPlaceholder";
                 inputToAdd[j] = {orig:inputs[i],newI:placeholderInput};
                 j++;                 
                 if (inputs[i].attachEvent)  
                    addEvent(inputs[i],"propertychange",reloadInput);
                 else                  
                    {
                   addEvent(inputs[i],"keypress",reloadInput);
                    addEvent(inputs[i],"paste",reloadInput);
                    }
                 addEvent(inputs[i],"blur",restorePlaceholder);
             }
         }
         if(inputToAdd)
         {
             for(var i=0; i<inputToAdd.length;i++)
             {
                inputToAdd[i].orig.parentNode.replaceChild(inputToAdd[i].newI,inputToAdd[i].orig);
                inputToAdd[i].newI.parentNode.insertBefore(inputToAdd[i].orig,inputToAdd[i].newI);
             }
             if(isOpera())
                 for(var i=0; i<inputToAdd.length;i++)
                 {            
                    inputToAdd[i].orig.style.top =getTop(inputToAdd[i].newI)+"px";
                    inputToAdd[i].orig.style.left = parseInt(getLeft(inputToAdd[i].newI)-5)+"px";           
                 }
         }
     }
}
function preventFocus(e)
{
    e.preventDefault();
}
function reloadInput(e)
{
    if(e.type!="propertychange" || e.propertyName == "value")
    {
        obj= getTargetObjEvent(e);
        if(obj)
            placeholderObj =document.getElementById(obj.id+"_placeholder");
        if(obj && placeholderObj)
        {
            if(obj.className.indexOf("inputOpacity")!= -1)
            {
                obj.className = obj.className.replace(" inputOpacity","");
                placeholderObj.className = placeholderObj.className + " inputOpacity";
            }
        }
    }
}
function restorePlaceholder(e)
{    
    obj= getTargetObjEvent(e);
    placeholderObj =document.getElementById(obj.id+"_placeholder");
    if(obj && placeholderObj)
    {
        if(obj.value == "" && placeholderObj.className.indexOf("inputOpacity")!= -1)
        {  
          obj.className = obj.className + " inputOpacity";      
          placeholderObj.className = placeholderObj.className.replace(" inputOpacity","");
        }
    }
}
function hasPlaceholderSupport() {
  var input = document.createElement('input');
  return ('placeholder' in input);
}
function addEvent(el , evn,func)
{
 if(el){
        if(el.attachEvent) 
              el.attachEvent("on"+evn,func);
         else if (el.addEventListener) 
               el.addEventListener(evn,func,false);
    }
}
function getTargetObjEvent(e) {
    var targ;
    if (!e) var e = window.event;
    if (e.target) targ = e.target;
    else if (e.srcElement) 
        targ = e.srcElement;
    if (targ.nodeType == 3) /* defeat Safari bug*/
        targ = targ.parentNode;
    return targ;
}
function getLeft(oObject) {
    if(oObject)
	    return (oObject.x) ? oObject.x : getPosition(oObject,"Left");
}

function getTop(oObject) {
    if(oObject)
	    return (oObject.y) ? oObject.y : getPosition(oObject,"Top");
}
function getPosition(oObject,xyString) {
	inc = 0;
	var embeddedFlag = oObject.embedded;
	while (oObject != null) {
		if (isIE()) {
			if ((oObject.currentStyle.position == "absolute") &&  embeddedFlag) {
			   return inc;
			}
		}
		if (isNetscape()) {
			if (document.defaultView.getComputedStyle(oObject, null).getPropertyValue("position") == "absolute") {
			   return inc;
			}
		}
		inc = inc + oObject["offset" + xyString];
		oObject = oObject.offsetParent;
	}
	return inc;
}
function isNetscape() {
	if(document.getElementById && !document.all)
		return true;
	return false;
}

function isIE() {
	 if (document.all)
	    return true;
	 return false;
}
function isOpera()
{
    return navigator.userAgent.indexOf('Opera') != -1;
}