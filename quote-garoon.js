javascript:
(
    function(d)
    {
	var param = [];
	title = d.querySelector('h2[class="schedule inline_block_grn"]').innerText;
	param.push(title);
	date = d.querySelector('span[class="schedule_text_noticeable_grn"]').innerText;
	param.push(date);
	if((room = d.querySelector('span[class="facility-grn"]')) != null){
	    room = room.innerText;
	    param.push(room);
	}
	url = 'https://' + d.location.hostname + d.location.pathname + '?event=' + d.querySelector('input[name="event"]').value;
	param.push(url);
	prompt('ガルーン予定の要約', param.join("\n").replace(/）/g, ')').replace(/（/g, '(').replace(/ /g, ''));
    }
)(document);
