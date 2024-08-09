javascript:
(
  function(d){
    let t = new String(d.title);
    t.allReplace = function(t){
      let b = this, c;
      for(c in t){
        b = b.replace(new RegExp(c, 'g'), t[c]);
      }
      return b;
    }.bind(t);

    let u = d.URL, s;
    if(s = d.querySelector('link[rel="shortlink"]')){ u = s.href }
    if(s = d.querySelector('link[rel="canonical"]')){ u = s.href }
    u = u.replace(/#gid=\d+$/, '');
    u = u.replace(/#slide=id\.[a-z0-9_]+$/, '');
    u = u.replace(/#heading=h\.[a-z0-9_]+$/, '');
    u = u.replace(/fbclid=[a-zA-Z0-9-]*/, '');

    s = t.allReplace({
      ' - Confluence' : '',
      ' - Google スプレッドシート' : '',
      ' - Google スライド' : '',
      ' - Google ドライブ' : '',
      ' - Google ドキュメント' : '',
      ' - \\S+ Jira' : '',
      '\\[(\\w+-\\d+)\\]' : '$1',
      ' . 課題の表示 . Backlog' : '',
      '^(.*) · Issue #(\\d+).*' : '#$2 $1'
    });
    navigator.clipboard.writeText(`[${s}](${u})\n`);
  }
)(document);
