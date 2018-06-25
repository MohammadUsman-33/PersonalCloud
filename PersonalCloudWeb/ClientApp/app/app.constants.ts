import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class Configuration {
    public Server = 'http://localhost:57364/';
    public ApiUrl = 'api/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}

//import { Http} from '@angular/http';

//    public sysInfo: SystemInformation[] | undefined;

//constructor(http: Http, @Inject('ORIGIN_URL') originUrl: string) {
//    http.get('localhost:57364' + '/api/memory').subscribe(result => {
//        this.sysInfo = result.json() as SystemInformation[];
//        console.log(this.sysInfo);
//    }, error => console.error(error));
//}