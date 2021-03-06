/**
 * Script to dump the set of 'client.' variables that 
 * Apigee makes available at run-time
 */
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

var result = {};

// Create a JSON response object
result.cilent = populateFromArray(keys);

// Set the response body, prettified
context.proxyResponse.content = JSON.stringify(result, null, 2);

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
