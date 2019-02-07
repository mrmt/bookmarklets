javascript:
var global = window;
global.COPY_TO_CLIPBOARD = global.COPY_TO_CLIPBOARD || {};
global.COPY_TO_CLIPBOARD.getContent = function(d){
    var param = [];
    var title = d.querySelector('h2[class="schedule inline_block_grn"]').innerText;
    param.push(title);
    var date = d.querySelector('span[class="schedule_text_noticeable_grn"]').innerText;
    param.push(date);
    var room;
    if((room = d.querySelector('span[class="facility-grn"]')) != null){
	room = room.innerText;
	param.push(room);
    }
    var url = 'https://' + d.location.hostname + d.location.pathname + '?event=' + d.querySelector('input[name="event"]').value;
    param.push(url);
    return param.join("\n").replace(/）/g, ')').replace(/（/g, '(').replace(/ /g, '');
};

global.COPY_TO_CLIPBOARD.copyToClipboard = function(d){
    var area = d.createElement("textarea");
    area.textContent = this.getContent(d);
    var body = d.getElementsByTagName("body")[0];
    body.appendChild(area);
    area.select();
    var res = d.execCommand("copy");
    body.removeChild(a);
    return res;
};
global.COPY_TO_CLIPBOARD.copyToClipboard(document);
