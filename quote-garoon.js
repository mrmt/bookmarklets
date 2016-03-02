javascript:
(
    function(d)
    {
	var param = [];
	param.push(title = d.querySelector('h2[class="schedule"]').innerText);
	date = d.querySelector('div[class="groupDayCalendarDate-grn"]').innerText.replace('）', ')').replace('（', '(');
	time = d.querySelector('span[class="mLeft15"]').innerText.replace(/ /g, '');
	param.push(date + " " + time);
	param.push('https://' + d.location.hostname + d.location.pathname + '?event=' + d.querySelector('input[name="event"]').value);
	if((room = d.querySelector('span[class="facility-grn"]')) != null){
	    param.push(room.innerText);
	}
	prompt('link', param.join("\n"));
    }
)(document);
