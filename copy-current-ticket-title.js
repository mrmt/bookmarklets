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

    let s = t.allReplace({
      ' - Confluence' : '',
      ' - Google スプレッドシート' : '',
      ' - Google スライド' : '',
      ' - Google ドライブ' : '',
      ' - Google ドキュメント' : '',
      ' - Jira' : '',
      '\\[(\\w+-\\d+)\\]' : '$1',
      ' . 課題の表示 . Backlog' : '',
      '^(.*) · Issue #(\\d+).*' : '#$2 $1'
    });
    navigator.clipboard.writeText(s);
  }
)(document);
