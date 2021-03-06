javascript:
var global = window;
global.COPY_TO_CLIPBOARD = global.COPY_TO_CLIPBOARD || {};
global.COPY_TO_CLIPBOARD.getContent = function(d){
    var u = d.URL;
    var s;
    if(s = d.querySelector('link[rel="shortlink"]')){
	u = s.href;
    };
    if(s = d.querySelector('link[rel="canonical"]')){
	u = s.href;
    };
    u = u.replace(/#gid=\d+$/, '');
    u = u.replace(/#slide=id\.[a-z0-9_]+$/, '');
    u = u.replace(/#heading=h\.[a-z0-9_]+$/, '');
    u = u.replace(/fbclid=[a-zA-Z0-9-]*/, '');

    var t = new String(d.title);
    t.allReplace = function(t){
	var b = this,c;
	for(c in t){
	    b = b.replace(new RegExp(c, "g"),t[c]);
	}
	return b;
    }.bind(t);
    return t.allReplace({
	" - Confluence" : "",
	" - Google スプレッドシート" : "",
	" - Google スライド" : "",
	" - Google ドキュメント" : "",
    }) + "\n" + u + "\n";
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
