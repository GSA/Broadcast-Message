({
	doInit : function(component, event, helper) {
        var designId = component.get("v.id");
        var pageRecordId = component.get("v.recordId");
        console.log(designId);
        // Evaluates if a recordId (as specified in the setup of the compnent) has been inserted
        // Sets that id as the overriderecordid
        if (designId != "" && designId != null) {
            component.set("v.overRideRecordId",designId);
        }
        // if the id is blank in component setup, check to see if the component is on a record page
        else if (pageRecordId != "" && pageRecordId != null) {
            component.set("v.onRecordPage", true);
            console.log("RecordId: "+pageRecordId);
            component.set("v.overRideRecordId",pageRecordId);
        }
        else {
			// do nothing            
        }
        component.find("recordLoader").reloadRecord(true);
        
	}
})