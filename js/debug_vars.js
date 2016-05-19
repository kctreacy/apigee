var now = new Date();

// Cache Scope Key
//orgName__envName__apiProxyName__deployedRevisionNumber__proxy
var scope = [
"organization.name",
"environment.name",
"apiproxy.name",
"apiproxy.revision",
"proxy.name"
];

var ctx = [
"messageid",
"system.time",	
"organization.name",
"environment.name",
"apiproxy.name",
"apiproxy.revision",
"system.interface.eth0",
"request.header.Host",
"system.host", /* Only returned in log.level = DEBUG */
"system.timestamp",
"system",	
"organization"
];

var target = [
"target.name",
"target.url",
/* "target" */
];

var target_flow_keys = [
"target.flow.description",
"target.flow.name"
];

var target_connection_keys = [
"target.host",
"target.ip",
"target.port", 
"target.scheme", 
"target.ssl.enabled",
"target.basepath",
"target.basepath.with.query"
];

var target_flags = [
"target.copy.pathsuffix",
"target.copy.queryparams",
"target.expectedcn"
];

var target_cert_keys = [
"target.cn", 
"target.organization", 
"target.organization.unit", 
"target.country", 
"target.state",
"target.locality",
"target.email.address"
];

var target_metrics_keys = [
"target.sent.content.length",
/*"target.sent.time",
"target.sent.timestamp", */
/* "target.sent.start.time", */
"target.sent.start.timestamp",
/* "target.sent.end.time", */
"target.sent.end.timestamp", 

"target.received.content.length",
/* "target.received.time",
"target.received.timestamp", */
/* "target.received.start.time", */
"target.received.start.timestamp",
/* "target.received.end.time", */
"target.received.end.timestamp"
];

var client_keys = [
"client",
"client.ssl.enabled",
"client.scheme",
"client.host", 
"client.ip",
"proxy.client.ip",
"request.header.X-Forwarded-For",
"client.port",
"client.server.ip",
"client.server.port"
];

var client_metrics_keys = [
"client.received.content.length",
/* "client.received.time", 
"client.received.timestamp", */
/* "client.received.start.time", */
"client.received.start.timestamp", 
/* "client.received.end.time", */
"client.received.end.timestamp", 

"client.sent.content.length",     
/* "client.sent.time",
"client.sent.timestamp", */
/* "client.sent.start.time", */
"client.sent.start.timestamp",
/* "client.sent.end.time", */
"client.sent.end.timestamp", 
];

var client_cert_keys = [
"client.cn",	
"client.organization",	
"client.organization.unit",	
"client.country",	
"client.state",
"client.locality",
"client.email.address"
];

var apiproxy_keys = [
"apiproxy",
"apiproxy.name",
"apiproxy.basepath",
"apiproxy.revision",
"apiproxy.qualifiedname"
/*
"apiproxy.ConfigurationVersion",
"apiproxy.Description",
"apiproxy.DisplayName",
"apiproxy.Policies",
"apiproxy.ProxyEndpoints",
"apiproxy.Resources",
"apiproxy.TargetServers",
"apiproxy.TargetEndpoints" */
];

var flow_keys = [
    "targetconnection",
    "apigee",
    "apigee.edge",
    "apigee.edge.execution",
    "apigee.edge.execution.fault_flow_state",
    "apigee.edge.step.current",
    "apigee.edge.step.currentpolicyname",
    "apigee.edge.step.current.flowname",
    "apigee.edge.step.current.flowstate",
    "context",
    "context.flow",
"current.flow.name",
"current.flow.description",
"proxy.flow.name",
"proxy.flow.description",
"target.flow.name",
"target.flow.description"
];

var virtualhost_keys = [
"virtualhost" ,
"virtualhost.name",
"virtualhost.aliases",
"virtualhost.port",
"virtualhost.ssl.enabled"
];

var environment_keys = [
"environment",
"environment.name",
"environment.orgname",
"environment.qualifiedname"
];

var proxy_keys = [
"proxy",
"proxy.name",
"proxy.url",
/* "proxy.client.ip", */
"proxy.basepath",
"proxy.pathsuffix",
"proxy.request",
"proxy.response"
];

var system_processing_keys = [
"system.uuid",
"system.pod.name",	
"system.region.name",	
"router.uuid"	
];

var system_time = [
"system.time.day",	
"system.time.dayofweek",	
"system.time.hour",	
"system.time.millisecond",	
"system.time.minute",	
"system.time.month",	
"system.time.second",	
"system.time.year",	
"system.time.zone",	
];

var fe_protocol_keys = [
"client.scheme",
"request.transportid",	
"request.header.X-Forwarded-Proto",
"request.header.X-Forwarded-Port",
"request.version",
"request.verb",
"client.ssl.enabled"
];

var url_keys = [
"proxy.url",
"proxy.basepath",
"proxy.pathsuffix",
"request.path",	
"request.uri",	
"request.querystring"
/* request.url */
];

var misc_keys = [    
"application.basepath",
"target.basepath",
"target.url"
];

//https://community.apigee.com/articles/2514/how-to-restrict-api-resources-by-their-full-path-a.html
var keys6 = [
  "flow.resource.name",
  "request.verb"
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

var route_keys = [
"route",
"route.name",
"route.target",
"targetserver",
"targetserver.name"
];

var result = {};

// Create a JSON response object
var elapsed1 = context.getVariable("client.received.end.timestamp") - context.getVariable("client.received.start.timestamp");
var elapsed2 = context.getVariable("target.sent.end.timestamp") - context.getVariable("target.sent.start.timestamp");
var elapsed3 = context.getVariable("target.received.end.timestamp") - context.getVariable("target.received.end.timestamp");
var elapsed4 = now.getTime() - context.getVariable("client.received.start.timestamp");
var elapsed5 = context.getVariable("client.sent.end.timestamp") - context.getVariable("client.sent.start.timestamp");
var processingElapsed = elapsed4 - (elapsed1 + elapsed2 + elapsed3);

result.Scope = populateFromArray(scope);

result.ContextObject = {};
result.ContextObject["context"] = context
result.ContextObject["context.flow"] = context.flow + "";
result.ContextObject["context.session"] = context.session + "";
result.ContextObject["context.now"] = now;
result.ContextObject["context.elapsed.total"] = now.getTime() - context.getVariable("client.received.start.timestamp");
result.ContextObject["context.elapsed.processing"] = processingElapsed;
result.ContextObject["context.elapsed.req_recv"] = context.getVariable("client.received.end.timestamp") - context.getVariable("client.received.start.timestamp");
result.ContextObject["context.elapsed.req_send"] = context.getVariable("target.sent.end.timestamp") - context.getVariable("target.sent.start.timestamp");
result.ContextObject["context.elapsed.resp_recv"] = context.getVariable("target.received.end.timestamp") - context.getVariable("target.received.start.timestamp");
result.ContextObject["context.req_recv.start"] = new Date(context.getVariable("client.received.start.timestamp"));
result.ContextObject["context.req_recv.end"] = new Date(context.getVariable("client.received.end.timestamp"));
result.ContextObject["context.send.start"] = new Date(context.getVariable("target.sent.start.timestamp"));
result.ContextObject["context.send.end"] = new Date(context.getVariable("target.sent.end.timestamp"));
result.ContextObject["context.resp_recv.start"] = new Date(context.getVariable("target.received.start.timestamp"));
result.ContextObject["context.resp_recv.end"] = new Date(context.getVariable("target.received.end.timestamp"));

//result.ContextObject["request"] = request + "";
//result.ContextObject["context.proxyRequest"] = context.proxyRequest + "";
//result.ContextObject["context.targetRequest"] = context.targetRequest + "";
//result.ContextObject["context.targetResponse"] = context.targetResponse + "";
//result.ContextObject["context.proxyResponse"] = context.proxyResponse + "";
//result.ContextObject["context.proxyResponseObj"] = context.proxyResponse;

result.Context = populateFromArray(ctx);

result.Target = populateFromArray(target);
result.Target["target.elapsed"] = context.getVariable("target.received.end.timestamp") - context.getVariable("target.sent.start.timestamp");
result.Target["target.sent.ts"] = new Date(context.getVariable("target.sent.start.timestamp"));
result.Target["target.recv.ts"] = new Date(context.getVariable("target.received.end.timestamp"));
result.Target["target.configFlags"] = populateFromArray(target_flags);
result.Target["target.connection"] = populateFromArray(target_connection_keys);
result.Target["target.metrics"] = populateFromArray(target_metrics_keys);
result.Target["target.metrics"]["target.send.elapsed"] = elapsed2;
result.Target["target.metrics"]["target.received.elapsed"] = elapsed3;
result.Target["target.metrics"]["target.processing.elapsed"] = context.getVariable("target.received.start.timestamp") - context.getVariable("target.sent.end.timestamp");
result.Target["target.metrics"]["target.total.elapsed"] = context.getVariable("target.received.end.timestamp") - context.getVariable("target.sent.start.timestamp");
result.Target["target.serverCert"] = populateFromArray(target_cert_keys);
result.Target["target.flow"] = populateFromArray(target_flow_keys);

result.Client = populateFromArray(client_keys);
result.Client["client.received.ts"] = new Date(context.getVariable("client.received.end.timestamp"));
result.Client["client.metrics"] = populateFromArray(client_metrics_keys);
result.Client["client.metrics"]["client.received.elapsed"] = elapsed1;
result.Client["client.metrics"]["client.sent.elapsed"] = elapsed5;
result.Client["client.serverCert"] = populateFromArray(client_cert_keys);

//result.SystemKeys = populateFromArray(system_keys);

result.APIProxy = populateFromArray(apiproxy_keys);
result.Proxy = populateFromArray(proxy_keys);

result.EnvironmentKeys = populateFromArray(environment_keys);
result.VirtualHostKeys = populateFromArray(virtualhost_keys);

result.FrontEndProtocol = populateFromArray(fe_protocol_keys);
result.url = populateFromArray(url_keys);

result.SystemProcessing = populateFromArray(system_processing_keys);
result.SystemDateTimeElements = populateFromArray(system_time);
result.Vars3 = populateFromArray(keys3);
result.Vars6 = populateFromArray(keys6);

result.FlowKeys = populateFromArray(flow_keys);

result.ssl = populateFromArray(sslKeys);

result.RouteKeys = populateFromArray(route_keys);
result.misc = populateFromArray(misc_keys);

// Computed
result.Context.FlowResourceName =  context.getVariable('request.verb')+  context.getVariable('proxy.basepath')+    context.getVariable('proxy.pathsuffix');
result.Context.FQResourceName =  context.getVariable('organization.name') + "." + context.getVariable('apiproxy.name') + "." + context.getVariable('environment.name');

result.RequestObject = {};
result.RequestObject["request.url"] = request.url;
result.RequestObject["request.headers"] = request.headers;
result.RequestObject["request.queryParams"] = request.queryParams;
result.RequestObject["request.formParams"] = request.formParams;
result.RequestObject["request.method"] = request.method;
result.RequestObject["request.body"] = request.body;

//result.ContextObject["response"] = response;
result.ResponseObject = {};
result.ResponseObject["response.headers"] = response.headers;
result.ResponseObject["response.status"] = response.status;
result.ResponseObject["response.status.code"] = response.status.code;
result.ResponseObject["response.status.message"] = response.status.message;
result.ResponseObject["response.content"] = response.content;

// Request
result.request = {};
result.request.Headers = populateFromCollection("request", "headers", "header");
result.request.QueryParams = populateFromCollection("request", "queryparams", "queryparam");
result.request.FormParms = populateFromCollection("request", "formparams", "formparam");

// Message
result.message = {};
result.message.Headers = populateFromCollection("message", "headers", "header");
result.message.QueryParams = populateFromCollection("message", "queryparams", "queryparam");
result.message.FormParms = populateFromCollection("message", "formparams", "formparam");

// Response
result.response = {};
result.response.Headers = populateFromCollection("response", "headers", "header");
result.response.QueryParams = populateFromCollection("response", "queryparams", "queryparam");
result.response.FormParms = populateFromCollection("response", "formparams", "formparam");


// Set the response body, prettified
context.proxyResponse.content = JSON.stringify(result, null, 2);

function populateFromCollection(msgName, pluralName, singularName) {
    
    var jsonData = {};
    
    var aCount = context.getVariable(msgName + "." + pluralName + ".count");
    var aNames = context.getVariable(msgName + "." + pluralName + ".names");
    if (aNames === null|| aCount === null || aCount === 0) {
        jsonData.count= 0;
        jsonData.names= '';
        return jsonData;
    }
    
    var a = makeArray(aNames);
	jsonData.count= a.length;
    jsonData.names = aNames + "";
    
	a.forEach(function(k) {
	    var k2 = msgName + "." + singularName + "." + k;
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
			var time = k.slice(-10);
			if (at == "_at") {
			    // Date
			    var date = new Date();
			    date.setTime(v);
			    v2 = date.toJSON();

			    // Add an extra name with the timestamp
			    jsonData[element+".timestamp"] = parseInt(v);
			}
			else if (time == ".timestamp") {
			    v2 = new Date(v);
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

