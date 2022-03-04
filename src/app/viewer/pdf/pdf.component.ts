import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { PdfViewerDialogComponent } from '../pdf-viewer-dialog/pdf-viewer-dialog.component';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  srcPDF = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PdfViewerDialogComponent, {
      width:' 1050px',
      data: { src: this.srcPDF },
    });

  }
}

