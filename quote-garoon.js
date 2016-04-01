javascript:
(
    function(d)
    {
	var param = [];
	param.push(title = d.querySelector('h2[class="schedule"]').innerText);
	spec = d.querySelector('div[class="groupDayCalendarDate-grn"]').innerText.replace('）', ')').replace('（', '(');
	spec = " " + d.querySelector('span[class="mLeft15"]').innerText.replace(/ /g, '');
	if((room = d.querySelector('span[class="facility-grn"]')) != null){
		spec = spec + " " + room.innerText;
	}
	param.push(spec);
	param.push('https://' + d.location.hostname + d.location.pathname + '?event=' + d.querySelector('input[name="event"]').value);
	prompt('link', param.join("\n"));
    }
)(document);
