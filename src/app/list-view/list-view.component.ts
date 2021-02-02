import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  sampleJSON : any = [];
  DropJSON : number =1;
  constructor(public restApi : ApiService) { }

  ngOnInit(): void {
    this.fetchData();
  }


  fetchData()
  {
      let url = '';
      if(this.DropJSON==1)
      {
          url = `${environment.mockApiUrl}${'/json-sample-A.json'}`;
      }else
      {
        url = `${environment.mockApiUrl}${'/json-sample-B.json'}`;
      }

      this.restApi.getData(url).subscribe(sampleRes=>
        {
              this.sampleJSON = sampleRes;
        })
  }

}
