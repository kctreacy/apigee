var keys = [
"client.scheme",
"client.host", 
"client.ip", 
"client.port", 
"client.received.start.time", 
"client.received.start.timestamp", 
"client.received.end.time", 
"client.received.end.timestamp", 
"client.sent.end.time",
"client.sent.end.timestamp", 
"client.sent.start.time", 
"client.sent.start.timestamp"
];

var keys2 = [
"proxy.basepath",
"proxy.client.ip",	
"proxy.pathsuffix",
"proxy.url"
];

var clientCertX509Keys = [
"client.cn",	
"client.country",	
"client.email.address",	
"client.locality",	
"client.organization",	
"client.organization.unit",	
"client.ssl.enabled",	
"client.state"
];

var keys4 = [
"router.uuid",	
//"system.interface.{interface_name}",	
"system.pod.name",	
"system.region.name",	
"system.time",	
"system.time.day",	
"system.time.dayofweek",	
"system.time.hour",	
"system.time.millisecond",	
"system.time.minute",	
"system.time.month",	
"system.time.second",	
"system.time.year",	
"system.time.zone",	
"system.timestamp",	
"system.uuid"
];

var keys5 = [
"application.basepath",
"proxy.basepath",
"proxy.pathsuffix",
"request.path",
"request.querystring",
"request.uri",
"request.url",
"target.basepath",
"target.url"
];


var keys3 = [
"request.formparams.count",	
"request.formparams.names",	
"request.formstring",	
"request.headers.count",
"request.headers.names",	
"request.queryparams.count",	
"request.queryparams.names",	
"request.querystring",	
"request.transport.message",
"request.content",
"request",	
"request.transportid",	
"request.path",	
"request.uri",	
"request.url",	
"request.verb",
"request.version"
];

var sslKeys = [
"ssl.cipher",
"ssl.client.a.key",
"ssl.client.a.sig",	
"ssl.client.i.dn",	
"ssl.client.i.dn.c",	
"ssl.client.i.dn.cn",	
"ssl.client.i.dn.l",	
"ssl.client.i.dn.o",	
"ssl.client.m.serial",	
"ssl.client.m.version",	
"ssl.client.s.dn",	
"ssl.client.s.dn.c",	
"ssl.client.s.dn.cn",	
"ssl.client.s.dn.l",	
"ssl.client.s.dn.o",	
"ssl.client.v.end",	
"ssl.client.v.remain",	
"ssl.client.v.start",	
"ssl.protocol",	
"ssl.server.a.key",	
"ssl.server.a.sig",	
"ssl.server.i.dn",	
"ssl.server.i.dn.c",	
"ssl.server.i.dn.cn",	
"ssl.server.i.dn.l",
"ssl.server.i.dn.o",	
"ssl.server.m.serial",	
"ssl.server.m.version",	
"ssl.server.s.dn",	
"ssl.server.s.dn.c",	
"ssl.server.s.dn.cn",	
"ssl.server.s.dn.l",	
"ssl.server.s.dn.o",	
"ssl.server.v.end",	
"ssl.server.v.remain",	
"ssl.server.v.start",	
"ssl.session.id"
];

//request.queryparam.{queryparam_name}	
//request.queryparam.{queryparam_name}.
//request.header.{header_name}	
//request.header.{header_name}.values	
//request.header.{header_name}.values.count	
//request.content	
//request.formparam.{formparam_name}	
//request.formparam.{formparam_name}.


var result = {};

// Create a JSON response object
result.client = populateFromArray(keys);
result.ssl = populateFromArray(sslKeys);
result.clientCertX509Keys = populateFromArray(clientCertX509Keys);
result.proxy = populateFromArray(keys2);
result.SystemParms = populateFromArray(keys4);
result.Vars = populateFromArray(keys3);
result.Vars2 = populateFromArray(keys5);

result.request = {};

result.request.Headers = populateFromCollection("headers", "header");
result.request.QueryParams = populateFromCollection("queryparams", "queryparam");
result.request.FormParms = populateFromCollection("formparams", "formparam");


// Set the response body, prettified
context.proxyResponse.content = JSON.stringify(result, null, 2);

function populateFromCollection(c, c2) {
    
    var jsonData = {};
    
    var cNames = "request." + c + ".names";
    var cCount = "request." + c + ".count";
    var aCount = context.getVariable(cCount);
    var aNames = context.getVariable(cNames);
    
    if (aNames === null|| aCount === null || aCount === 0) {
        jsonData.names= '';
        jsonData.count= 0;
        return jsonData;
    }
    
    var a = makeArray(aNames);
    jsonData.names = aNames + "";
	jsonData.count= a.length;
    
	a.forEach(function(k) {
	    var k2 = "request." + c2 + "." + k;
		var v = context.getVariable(k2);
		jsonData[k] = v;
		var multi = makeArray(context.getVariable(k2 + ".values"));
		if (multi.length > 1) {
		    jsonData[k] = (context.getVariable(k2 + ".values") + "").slice(1, -1);
		    jsonData[k + "Array"] = multi;
		}
		else {
		    jsonData[k] = v;
		}
	});

	return jsonData;

}

// From: http://stackoverflow.com/questions/22622151/how-to-get-all-apigee-request-headers-in-javascript
function makeArray(a) {
    // Collection is a java.util.TreeMap$KeySet;
 	// Convert it to a string and then back to any array
 	// Conversion to string results in: "[A, B, C]" 
	return (a + '').slice(1, -1).split(', ');

}

function populateFromArray(a) {
    
    var jsonData = {};
	a.forEach(function(element, index, array) {

		var k = element;
		var v = context.getVariable(k);

		var v2;
		if (v === null) {
		    v2 = v;
		}
		else {

			var at = k.slice(-3);
			if (at == "_at") {
			    // Date
			    var date = new Date();
			    date.setTime(v);
			    v2 = date.toJSON();

			    // Add an extra name with the timestamp
			    jsonData[element+".timestamp"] = parseInt(v);
			}
			else {
			    // convert to string, some are Java String arrays
			    v2 = v + ''; 

			    // TODO: Has to be a better way to do this
			    if (v2.indexOf("Ljava.lang.String",0) > -1) {
				    var len = v.length;
    				var a2 = [];
    				for (var i=0; i < len; i++) {
    				    a2.push(v[i] + '');
    				}
    				v2 = a2;
			    }
			    else {
			      if (isInt(v2) || getClass(v) == "Number") {
				v2 = parseInt(v);   
			      }
			    }
			}
		}

		jsonData[element] = v2;
	});

	return jsonData;

}

function isInt(value) {
  var x;
  if (isNaN(value)) {
    return false;
  }
  x = parseFloat(value);
  return (x | 0) === x;
}

function getClass(obj) {
  if (typeof obj === "undefined")
    return "undefined";
  if (obj === null)
    return "null";
  return Object.prototype.toString.call(obj)
    .match(/^\[object\s(.*)\]$/)[1];
}

