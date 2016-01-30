javascript:
(
    function(loc,host,path){
	if(host == 'www.amazon.co.jp'){
	    if(path.match(/\/(gp\/product|dp)\/([0-9A-Z]+)/)){
		loc.href = '/dp/' + RegExp.$2 + '/';
	    }
	}else{
	    var k = [], c = [], kv;
	    var argv = loc.search.replace(/^\?/,'').split('&');
	    var argc = argv.length;
	    while(argc--){
		if(!argv[argc].match(/^(utm_|fb_ref|fb_action_|fb_source|action_object_map|action_type_map|action_ref_map|__from)/)){
		    c.push(argv[argc]);
		}
		kv = argv[argc].split('=');
		k[kv[0]]=kv[1];
	    }
	    if(host == 'mportal.cybozu.com'){
		if(path == '/g/schedule/view.csp'){
		    loc.href = path + '?' + 'event=' + k['event'];
		}
	    }else{
		loc.href = path + ((c.length>1) ? '?'+c.join('&') : '');
	    }
	}
    }
)(location, location.hostname, location.pathname);
