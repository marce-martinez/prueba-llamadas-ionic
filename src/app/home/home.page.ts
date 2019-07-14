import { Component } from '@angular/core';
import { Platform } from '@ionic/angular'; 
 
import { CallLog, CallLogObject } from '@ionic-native/call-log/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  filters: CallLogObject[];
  recordsFound: any;
  recordsFoundText: string;
  listTyle:string;

  constructor(
    private callLog: CallLog, 
    private callNumber: CallNumber,
    private platform: Platform
    ) { 
      this.platform.ready().then(() => {
  
        this.callLog.hasReadPermission().then(hasPermission => {
          if (!hasPermission) {
            this.callLog.requestReadPermission().then(results => {
              this.getContacts("type","1","==");
            })
              .catch(e => alert(" requestReadPermission " + JSON.stringify(e)));
          } else {
            this.getContacts("type", "1", "==");
          }
        })
          .catch(e => alert(" hasReadPermission " + JSON.stringify(e)));
      });
  
    }

    getContacts(name, value, operator) {
      if(value == '1'){
        this.listTyle = "Incoming Calls from yesterday";
      }else if(value == '2'){
        this.listTyle = "Ougoing Calls from yesterday";
      }else if(value == '5'){
        this.listTyle = "Rejected Calls from yesterday";
      }
  
      //Getting Yesterday Time
      var today = new Date();
      var yesterday = new Date(today);
      yesterday.setDate(today.getDate() -1);
      var fromTime = yesterday.getTime();
      //var fromTime = today.getTime();
  
      this.filters = [{
        name: name,
        value: value,
        operator: operator,
      }, {
        name: "date",
        value: fromTime.toString(),
        operator: ">=",
      }];
      this.callLog.getCallLog(this.filters)
        .then(results => {
          this.recordsFoundText = JSON.stringify(results);
          this.recordsFound = results;//JSON.stringify(results);
          console.log(this.recordsFound);
          console.log(this.recordsFoundText);
        })
        .catch(e => alert(" LOG " + JSON.stringify(e)));
    }

    callThisNumber(number){
      this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }

}
