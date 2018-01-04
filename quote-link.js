javascript:
(
    function(d){
	var u=d.location.href;
	var t=d.title.replace(' - Confluence', '');
	t=t.replace(/ - Google (スプレッドシート|スライド|ドキュメント)$/, '');
	var s;
	if(s=d.querySelector('link[rel="shortlink"]')){
	    u=s.href;
	};
	if(s=d.querySelector('link[rel="canonical"]')){
	    u=s.href;
	};
	u=u.replace(/#gid=\d+$/,'');
	u=u.replace(/#slide=id\.p\d+$/,'');
	prompt('link', t+"\n"+u);
    }
)(document);
