
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
}