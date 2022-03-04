import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PdfComponent } from '../pdf/pdf.component';

@Component({
  selector: 'app-pdf-viewer-dialog',
  templateUrl: './pdf-viewer-dialog.component.html',
  styleUrls: ['./pdf-viewer-dialog.component.css'],
})
export class PdfViewerDialogComponent implements  OnInit {


  loading = true;

  constructor(
    public dialogRef: MatDialogRef<PdfComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.loading = false;
  }

  cerrar(): void {
    this.dialogRef.close();
  }
}
