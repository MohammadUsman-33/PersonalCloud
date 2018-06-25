import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { inject } from '@angular/core/testing';
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    public sysInfo: SystemInformation[];
    public availableSpace: string;
    public totalSpace: string;
    private IPAddress: string;
    constructor(private http: Http) {

        this.getSpaceDetail();
        this.getFreeSpace();
        this.getTotlaSpace();
       // this.getInternetInfo();
    }

    getSpaceDetail() {
        this.http.get('http://localhost:57364/api/memory/GetMemory').subscribe(data => {
            this.sysInfo = data
                .json() as SystemInformation[];
            console.log(data);
        }, error => console.error(error));
    }
    getFreeSpace() {
        this.http.get('http://localhost:57364/api/memory/GetAvailableMemory').subscribe(data => {
            this.availableSpace = data
                .json();
            console.log(data);
        }, error => console.error(error));
    }

    getTotlaSpace() {
        this.http.get('http://localhost:57364/api/Memory/getTotalMemory').subscribe(data => {
            this.totalSpace = data
                .json();
            console.log(data);
        }, error => console.error(error));
    }
    getInternetInfo() {
        this.http.get('http://localhost:57364/api/Memory/GetIntenetInfo').subscribe(data => {
            this.IPAddress = data
                .json();
            console.log(data);
        }, error => console.error(error));
    }
}

interface SystemInformation {
    totalSpace: string;
    freeSpace: string;
    driveName: string;
    driveType: string;
    rootDirectory: string;
    volumeLabel: string
    totalFreeSpace: string;
    driveFormat: string;
}