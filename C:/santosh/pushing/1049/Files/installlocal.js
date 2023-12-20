function execute(){
    importPackage(com.ads.api.util);
    importPackage(com.ads.api.beans.sm);
    importPackage(com.ads.api.beans.common);
    
    var k=new SystemManagerUtil(AUTH_TOKEN);

    var kk=new SMSystem();
    var systemName ='Install Local SYstem';
    var dataStewardName ='TestDataSteward';  //provide data steward name which is exist in application only, otherwise empty data steward name is displayed for all get templates

    kk.setSystemName(systemName);
    kk.setSystemPrimaryMoveType('Test');
    kk.setSystemBusinessPurposeShort('BusinessPurpose');
    kk.setSystemDescriptionLong('SystemDesc');
    kk.setServerPlatform('Windows');
    kk.setServerOSVersion('213');
    kk.setDBMSPlatform('SQM');
    kk.setDBMSVersion('12');
    kk.setFileManagmentSystemType('NFS');
    kk.setFileLocation('Remote Location');
    kk.setESBPlatformType('ESB platform');
    kk.setESBQManagerName('ESB q Manager');
    kk.setRelease('1');
    kk.setTotalTableCount('24');
    kk.setTotalDBSizeInGB('25');
    kk.setEndOfDayDefinition('EOD');
    kk.setDailyBatchExtractWindow('BatchExtractwindow');
    kk.setAverageNamedUsersCount('2');
    kk.setAverageConcurrentUsersCount('4');
    kk.setSpecialInsructionsComments('Special Instruction comments');
    kk.setSystemOwnerFullName('DBAdmin');
    kk.setSystemOwnerTelephone('91852147963');
    kk.setSystemOwnerEmail('rajeshk@analytixds.com');
   // kk.setDataStewardName(dataStewardName);
    
    var reqStatus=  k.createSystem(kk);
    
    if(reqStatus.isRequestSuccess())
     return systemName +" ---- "+reqStatus.getStatusMessage();
    else
      return reqStatus.getStatusMessage();
}
execute();
