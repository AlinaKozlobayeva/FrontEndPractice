var ar_rhost = 'ad.adriver.ru', ar_alt = '', ar_target = '_blank';	
var ar_bid, ar_width, ar_height, ar_sid, ar_pz, ar_ad, ar_bn, ar_bt, ar_ntype, ar_nid, ar_ref, ar_rnd, ar_ref, ar_redirect, ar_domain, ar_CompPath;
var ar_plugin = false; 
var ar_html = '';

function ar_parseURL(){
	var parameters = location.search.substring(1), param, v;
	parameters = parameters.split('&');
	for (var i in parameters){
		param = parameters[i].split('=');
		if (typeof(v = param[1]) != 'undefined' && (param[0] == 'html_params')){
				ar_parseParams(unescape(v)); return;
		}
	}
}

function ar_parseParams(parameters){
	var param, v;
	parameters = parameters.split('&');
	for (var i in parameters){
		param = parameters[i].split('=');
		if (typeof(v = param[1]) != 'undefined'){
			switch(param[0]){
				case 'domain':	ar_domain = v; break;
				case 'rhost':	ar_rhost = v; break;
				case 'bid':		ar_bid = v; break;
				case 'sid':		ar_sid = v; break;
				case 'width':	ar_width = v; break;
				case 'height':	ar_height = v; break;
				case 'rnd':		ar_rnd	= v; break;
				case 'pz':		ar_pz = v; break;
				case 'ad':		ar_ad = v; break;
				case 'bt':		ar_bt = v; break;
				case 'bn':		ar_bn = v; break;
				case 'ntype':	ar_ntype = v; break;
				case 'nid':		ar_nid = v; break;
				case 'ref':		ar_ref = v; break;
				case 'target':	ar_target = v; break;
				case 'url':		ar_redirect = v; break;
				case 'CompPath':	ar_CompPath = unescape(v); break;
			}
		}
	}
}

function ar_p (param, value){
	return typeof(value) == 'undefined' ? '' : param + '=' + value ;
}

ar_parseURL();

ar_redirect = typeof(ar_redirect) == 'undefined' ? 'http://' + ar_rhost + '/cgi-bin/click.cgi' +
					ar_p('?bid', ar_bid) + ar_p('&pz', ar_pz) + ar_p('&ad', ar_ad) + 
					ar_p('&sid', ar_sid) + ar_p('&bt', ar_bt) + ar_p('&bn', ar_bn) + 
					ar_p('&ntype', ar_ntype) + ar_p('&nid', ar_nid) + ar_p('&rnd', ar_rnd) +  
					ar_p('&ref', ar_ref) + ar_p('&rleurl','') : ar_redirect;

if (typeof(ar_CompPath) == 'undefined') {
    var ar_CompPath=window.location.href.substring(0, window.location.href.indexOf('index.html'));
}
