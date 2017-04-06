javascript:
(
    function(d){
	var u=d.location.href;
	var t=d.title.replace(' - Confluence', '');
	var s;
	if(s=d.querySelector('link[rel="shortlink"]')){
	    u=s.href;
	};
	if(s=d.querySelector('link[rel="canonical"]')){
	    u=s.href;
	};
	prompt('link', t+"\n"+u);
    }
)(document);
