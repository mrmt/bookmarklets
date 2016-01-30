javascript:
(
    function(d)
    {
	title = d.querySelector('h2[class="schedule"]').innerText;
	date = d.querySelector('div[class="groupDayCalendarDate-grn"]').innerText.replace('）', ')').replace('（', '(');
	time = d.querySelector('span[class="mLeft15"]').innerText.replace(/ /g, '');
	url = 'https://' + d.location.hostname + d.location.pathname + '?event=' + d.querySelector('input[name="event"]').value;
	room = d.querySelector('span[class="facility-grn"]').innerText;
	prompt('link', [title, date+' '+time, room, url].join("\n"));
    }
)(document);
