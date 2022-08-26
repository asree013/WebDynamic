import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  mobileQueryMax: MediaQueryList;

  private _mobileQueryListener: () => void;

  //DI/Depedenci Injection
  constructor( changeDetectorRef: ChangeDetectorRef , media: MediaMatcher) {
    this._mobileQueryListener = ()=> changeDetectorRef.detectChanges();
    this.mobileQueryMax = media.matchMedia('(max-width: 600px)');
    this.mobileQueryMax.addListener(this._mobileQueryListener)
  }
  ngOnDestroy(): void {
    this.mobileQueryMax.removeListener(this._mobileQueryListener)
  }

  onsay(text: string){
    //alert(text);
  }
}
