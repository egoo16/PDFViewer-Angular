import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfComponent } from './viewer/pdf/pdf.component';
import { DesignModule } from './design.module';
import { PdfViewerDialogComponent } from './viewer/pdf-viewer-dialog/pdf-viewer-dialog.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    PdfComponent,
    PdfViewerDialogComponent
  ],
  imports: [
    PdfViewerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DesignModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
