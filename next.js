javascript:
(
  function(d, l){
    let n;
    if(n = d.evaluate("string(//link[@rel='next']/@href)", d, null, XPathResult.STRING_TYPE, null)){
      l.href=n.stringValue;
    }
    let m;
    if(m = l.pathname.match(/^(.*)\/([0-9]+)\/*$/)){
      l.href=`${m[1]}/${Number(m[2])+1}`;
    }
  }
)(document, location);
