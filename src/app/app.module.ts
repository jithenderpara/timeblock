import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// import { TimeblockComponent } from '../timeblock/timeblock.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { u} from 'block-ui';
import { TimeblockComponent } from './timeblock/timeblock.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UphnSyncAsyncComponent } from './uphn-sync-async/uphn-sync-async.component';
import { OnetimesComponent } from './onetimes/onetimes.component';


@NgModule({
	declarations: [AppComponent, TimeblockComponent, UphnSyncAsyncComponent, OnetimesComponent],
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgMultiSelectDropDownModule.forRoot(), BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule 
  ],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
