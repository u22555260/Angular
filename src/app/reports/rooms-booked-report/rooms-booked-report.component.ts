import { Component, OnInit, ChangeDetectorRef, NgModule } from '@angular/core';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { DataService } from '../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Margins, TDocumentDefinitions } from 'pdfmake/interfaces';
import { image } from '../../shared/imageData';

@Component({
  selector: 'app-rooms-booked-report',
  templateUrl: './rooms-booked-report.component.html',
  styleUrl: './rooms-booked-report.component.scss'
})

export class RoomsBookedReportComponent implements OnInit {
  roomsBookedData: any[] = [];
  roomsNotBookedData: any[] = [];


  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit() {

  }

  random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ', 0.7)';
  }

  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.value) {
      const selectedDate = new Date(input.value);
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1; // Months are zero-based, so add 1

      this.dataService.GenerateRoomsBookedReport(year, month).subscribe(result => {
        this.roomsBookedData = result;
      })
 
    }
  }


  extractTableData() {
    const table = document.getElementById('reportTable') as HTMLTableElement;
  
    const headers = Array.from(table.querySelectorAll('thead th')).map(th => (th as HTMLElement).innerText);
    const rows = Array.from(table.querySelectorAll('tbody tr')).map(tr =>
      Array.from(tr.querySelectorAll('td')).map(td => (td as HTMLElement).innerText)
    );
    return { headers, rows };
  }

  generatePDF() {
    const { headers, rows } = this.extractTableData();
    const date = document.getElementById('datePicker') as HTMLInputElement;
    const dateGenerated = new Date().toLocaleString();
    const generatedBy = localStorage.getItem("username");
  
    const docDefinition: TDocumentDefinitions = {
      background: {
        canvas: [
          {
            type: 'rect',
            x: 0,
            y: 0,
            w: 595.28,  // A4 width in points (72 points/inch * 8.27 inches)
            h: 841.89,  // A4 height in points (72 points/inch * 11.69 inches)
            color: '#E0E0E0'  // Light gray background
          }
        ]
      },
      content: [
        {
          text: 'Rooms Report For ' + date.value.substring(0,7),
          style: 'title'
        },
        {
          columns: [
            {
              image: image,
              width: 100
            },
            {
              text: [
                { text: `Date Generated: ${dateGenerated}\n`, style: 'headerRight' },
                { text: `Generated By: ${generatedBy}`, style: 'headerRight' }
              ],
              alignment: 'right'
            }
          ],
          margin: [0, 0, 0, 10] as [number, number, number, number]
        },
        {
          table: {
            headerRows: 1,
            body: [
              headers.map(header => ({ text: header, style: 'header' })),
              ...rows.map(row => row.map(cell => ({ text: cell, style: 'cell' })))
            ]
          },
          layout: 'striped'
        }
      ],
      footer: function (currentPage: number, pageCount: number) {
        return {
          columns: [
            {
              text: 'Menlyn Mews',
              alignment: 'center'
            },
            {
              text: `Page ${currentPage} of ${pageCount}`,
              alignment: 'right'
            }
          ],
          margin: [0, 10, 0, 0] as [number, number, number, number]
        };
      },
      styles: {
        title: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 20] as [number, number, number, number]
        },
        header: {
          bold: true,
          fontSize: 13,
          color: '#33331a'
        },
        cell: {
          bold: true,
          margin: [0, 5, 0, 5] as [number, number, number, number]
        },
        headerRight: {
          fontSize: 10,
          margin: [0, 0, 10, 0] as [number, number, number, number]
        }
      }
    };
  
    pdfMake.createPdf(docDefinition).open();
  }
  

}
