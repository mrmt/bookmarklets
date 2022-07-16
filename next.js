javascript:
(
    function(loc, path){
	if(matched = path.match(/^(.*)\/([0-9]+)\/*$/)){
	    loc.href = `${matched[1]}/${Number(matched[2])+1}`;
	}
    }
)(location, location.pathname);
