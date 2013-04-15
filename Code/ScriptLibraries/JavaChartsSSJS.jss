// This function puts all the data in compositeData variable to sessionScope variable
function putDataInSessionScope(compositeDataMap:java.util.Map) {
	var chartID = @Unique();
	// Get all the keys
	var keySet:java.util.Set = compositeDataMap.keySet();
	var itrKeys:java.util.Iterator = keySet.iterator();
	// Put all the data in the sessionScope
	while (itrKeys.hasNext()) {
		var key = itrKeys.next();
		sessionScope.put(key.toString() + chartID, compositeDataMap.get(key));
	}
		
	compositeDataMap.put("chartID", chartID); // Store the chart ID in the compositeData so that it is available to current custom control
}