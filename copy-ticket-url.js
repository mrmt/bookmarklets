javascript:
var global = window;
global.COPY_TO_CLIPBOARD = global.COPY_TO_CLIPBOARD || {};
global.COPY_TO_CLIPBOARD.getContent = function(d){
    var t = new String(d.title);
    t.allReplace = function(t){
	var b = this,c;
	for(c in t){
	    b = b.replace(new RegExp(c, "g"), t[c]);
	}
	return b;
    }.bind(t);
    return t.allReplace({
	"\\[" : "",
	"\\]" : "",
	" - Jira" : "",
	" - Mixi Jira" : "",
	" \\| 課題の表示 \\| Backlog" : "",
	'^(.*) · Issue #(\\d\\d).*' : '#$2 $1'
    }) + "\n" + d.URL.replace(/#.*/, '') + "\n";
};

global.COPY_TO_CLIPBOARD.copyToClipboard = function(d){
    var area = d.createElement("textarea");
    area.textContent = this.getContent(d);
    var body = d.getElementsByTagName("body")[0];
    body.appendChild(area);
    area.select();
    var res = d.execCommand("copy");
    body.removeChild(area);
    return res;
};
global.COPY_TO_CLIPBOARD.copyToClipboard(document);
