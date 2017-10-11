javascript:
(
    function(d)
    {
	prompt('', d.title.replace('[','').replace(']','').replace(' - Mixi Jira','').replace(' | 課題の表示 - Backlog', '') + '\n' + d.location.href.replace(/#.*/, ''));
    }
)(document);
