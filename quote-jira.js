javascript:
(
    function(d)
    {
	prompt('', d.title.replace('[','').replace(']','').replace(' - Mixi Jira','\n'+d.location.href));
    }
)(document);
