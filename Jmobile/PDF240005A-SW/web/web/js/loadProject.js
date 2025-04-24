$hmi.addPageInitFunction( "_ProjectPage", function(stage){
var p0_page0=new $hmi.defs.hmiProject({"wgtId":"p0_page0"},"PDF240005A-SW",{"aRT":250,"hT":2000,"datalinks":[],"prefix":"p0","projectName":"PDF240005A-SW/PDF240005A-SW.jpr","maxBandwidth":0,"modernBrowser":true,"connectionMode":null,"webSysIconDelay":0,"timeout":600000,"pollRate":100,"webMemoryAvailable":0,"webMemoryThreshold":0,"optimizations":{"nativeRenderCycle":true,"forceLayers":true},"onAccessDenied":0,"longDateFormat":"MM/DD/YY - hh:mm:ss","shortDateFormat":"DD/MM/YYYY","fieldsStyle":{"decimalSymbol":".","thousandSymbol":","},"webShowRuntimeErrors":false,"bgColorOption":0,"passthru":1,"passthruDelay":200,"changePageAnimation":false,"changePageAnimationOnCache":false},stage);
$hmi.hmiSubscribeGroup("PDF240005A-SW@$GroupSubscrWgt@$0",p0_page0,stage);
var p0_wgt0=new $hmi.defs.hmiMultiLangMgr({"wgtId":"p0_wgt0"},"_MultiLangMgr",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0],"datalinks":[],"langs":{"L1":{"name":"Lang1","langId":"L1","writtingSystem":"Any","defaultFont":"Roboto","langCode":"en-US"}},"defLang":"L1","curLangId":"L1"},p0_page0,p0_page0),
p0_wgt1=new $hmi.defs.hmiPageMgr({"wgtId":"p0_wgt1"},"_PageMgr",{"map":{"load":"m1_page1","position":"m2_page2","alarms":"m3_page3","maintenance_luffing":"m4_page4","maintenance_slewing":"m5_page5","maintenance_extension":"m6_page6","maintenance_loadpin":"m7_page7","set_systemtime":"d1_page8","maintenance_overrides":"m8_page9","template":"t1_page10"},"precached":[],"categories":{"Unified":{"name":"Unified","technology":7,"useragent":"*","minSize":[0,0],"maxSize":[-1,-1],"home":"Load","pages":["m1_page1","m2_page2","m3_page3","m4_page4","m5_page5","m6_page6","m7_page7","m8_page9"],"dialogs":["d1_page8"],"templates":["t1_page10"],"umpages":["adduser","changepassword","deleteuser","loginpage","loginpage_combo","signaturedialog","switchuserloginpage","switchuserloginpage_combo","usereditor"],"alias":{}}}},p0_page0,p0_page0),
p0_wgt2=new $hmi.defs.hmiPageMLTextMgr({"wgtId":"p0_wgt2"},"_ProjectMLTextMgr",{"texts":{},"curLangId":"L1"},p0_page0,p0_page0),
p0_wgt4=new $hmi.defs.hmiTagMgr({"wgtId":"p0_wgt4"},"_TagMgr",{},p0_page0,p0_page0),
p0_wgt7=new $hmi.defs.hmiTrendMgr({"wgtId":"p0_wgt7"},"_TrendMgr",{},p0_page0,p0_page0),
p0_wgt11=new $hmi.defs.hmiPageMLTextMgr({"wgtId":"p0_wgt11"},"_AlarmMLTextMgr",{},p0_page0,p0_page0),
p0_wgt12=new $hmi.defs.hmiAlarmsMgr({"wgtId":"p0_wgt12"},"_AlarmsMgr",{},p0_page0,p0_page0),
p0_wgt14=new $hmi.defs.hmiPageMLTextMgr({"wgtId":"p0_wgt14"},"_ScheduleMLTextMgr",{"texts":{"0":{"L1":"Every"},"1":{"L1":"Hourly"},"2":{"L1":"Daily"},"3":{"L1":"Weekly"},"4":{"L1":"Monthly"},"5":{"L1":"Yearly"},"6":{"L1":"By Date"},"7":{"L1":"Hi-Res"},"8":{"L1":"Time"},"9":{"L1":"Sunrise+"},"10":{"L1":"Sunrise-"},"11":{"L1":"Sunset+"},"12":{"L1":"Sunset-"},"13":{"L1":"Random10"},"14":{"L1":"Random20"}},"curLangId":"L1"},p0_page0,p0_page0),
p0_wgt15=new $hmi.defs.hmiScheduleMgrWgt({"wgtId":"p0_wgt15"},"_ScheduleMgr",{},p0_page0,p0_page0),
p0_wgt19=new $hmi.defs.hmiRecipeMgr({"wgtId":"p0_wgt19"},"_RecipeMgr",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0],"datalinks":[":_IdalRecipe>:recipeIOSrc|R/W"]},p0_page0,p0_page0),
p0_wgt20=new $hmi.defs.hmiAuditTrailMgrWgt({"wgtId":"p0_wgt20"},"_AuditTrailMgr",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0],"datalinks":[],"configFileName":"audittrail.json"},p0_page0,p0_page0),
p0_wgt22=new $hmi.defs.hmiIndexedTagSetMgr({"wgtId":"p0_wgt22"},"_IndexedTagSetMgr",{},p0_page0,p0_page0),
p0_wgt23=new $hmi.defs.hmiDBConnectorMgrWgt({"wgtId":"p0_wgt23"},"_DBConnectorMgr",{"enable":false},p0_page0,p0_page0),
p0_wgt25=new $hmi.defs.hmiUserGroupMgr({"wgtId":"p0_wgt25"},"_UserGroupMgr",{},p0_page0,p0_page0),
p0_wgt30=new $hmi.defs.hmiVariablesWgt({"wgtId":"p0_wgt30"},"_VariablesWgt",{"left":0,"top":0,"width":0,"height":0,"bR":[0,0,0,0],"datalinks":[]},p0_page0,p0_page0),
p0_wgt32=new $hmi.defs.hmiSystemVars({"wgtId":"p0_wgt32"},"_SysPropMgr",{},p0_page0,p0_page0);var p0_wgt19_l0=$hmi.hmiAttach(p0_wgt19,"undefined",{"rw":"rw","attr":"recipeIOSrc","tag":"","srcType":"Recipe","dataSource":"_IdalRecipe","tagIndex":0,"wT":-1},stage);
p0_page0.addModule({"name":"com.hmi.calendarkeypadmodule-:1.2.0","webid":"cw_cwgt0","conf":null,"template": null, "js":function(webWgt){var defs=webWgt.getProject().getWidgetDefinitions();var hmiModuleLoader = webWgt.getProject().getHmiModuleLoader();var State = hmiModuleLoader.import( "State" );var wgt=new defs.hmiIWidget(webWgt);var page=new defs.hmiIPage(webWgt.getProject().getFocusPage());var project=new defs.hmiIProject(webWgt.getProject());page.__eval__=function(a){return eval(a);};
// START USERCODE

var calWgt = wgt.getWidget(wgt.id+".keypad_Value");
var dateTime = wgt.getWidget(wgt.id+".dateShownField");

this.cancelBtn = function()
{
    page.reject();
}

this.okBtn = function()
{
    page.accept();
}

this.leftMonthBtn = function()
{
	/*
    var sec = calWgt.getProperty("dateShown");
    var dateShownDate = new Date(sec*1000);
    dateShownDate.setMonth(dateShownDate.getMonth()-1);
    sec = dateShownDate.getTime()/1000;
    calWgt.setProperty("dateShown",sec);
	*/
	
    calWgt.prevMonth(); //instead of js dang code, use an internal safe Qt method
						//with additional check to date previous 01/01/1970
}

this.rightMonthBtn = function()
{
	/*
    var sec = calWgt.getProperty("dateShown");
    var dateShownDate = new Date(sec*1000);
    dateShownDate.setMonth(dateShownDate.getMonth()+1);
    sec = dateShownDate.getTime()/1000;
    calWgt.setProperty("dateShown",sec);
	*/
	
    calWgt.nextMonth(); //instead of js dang code, use an internal safe Qt method
}// END USERCODE

},"props":null,"tr":null});p0_page0.hideLoading();
p0_page0.execJS();
$hmi.enableRendering();
return p0_page0;})