public with sharing class CustomObjectController {
    public final String son {get; private set;}
    public final Id soid {get; private set;}
    public final String tz {get; private set;}

    public CustomObjectController(ApexPages.StandardController stdController) {
        son = stdController.getRecord().getSObjectType().getDescribe().getName();
        soid = ApexPages.CurrentPage().getparameters().get('id');
        tz = UserInfo.getTimeZone().getId();
    }
}
