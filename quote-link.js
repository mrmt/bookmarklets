javascript:
(
    function(d)
    {
	u=d.location.href;
	t=d.title.replace(' - Confluence', '');
	if(s=d.querySelector('link[rel="shortlink"]')){
	    u=s.href;
	};
	if(s=d.querySelector('link[rel="canonical"]')){
	    u=s.href;
	};
	prompt('link', t+"\n"+u);
    }
)(document);
