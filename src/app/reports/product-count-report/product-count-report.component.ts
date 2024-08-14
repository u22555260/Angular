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

pdfMake.vfs = pdfFonts.pdfMake.vfs; 

@Component({
  selector: 'app-product-count-report',
  templateUrl: './product-count-report.component.html',
  styleUrl: './product-count-report.component.scss'
})
export class ProductCountReportComponent implements OnInit {
  //Product Report
  products: any[] = [];
  productCategory: any[] = [];
  productCountDetails: any[] = [];

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit() {
    this.GenerateProductReport();
    this.GetProductDetails();
  }

  random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ', 0.7)';
  }

  //Product Category
  productCategoryData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Product Category', backgroundColor: [this.random_rgba(), this.random_rgba(), this.random_rgba(), this.random_rgba(), this.random_rgba(),]},
    ],
  };

  productCategoryChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: { 
        grid: {
          display: false 
        }
      },
      y: { 
        ticks: {
          stepSize: 1
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Product Count by Product Category',
      },
    },
  };

  GenerateProductReport()
  {
    this.dataService.GenerateProductsReport().subscribe(result => {
      let productCategoryData:any[] = result[0]

      productCategoryData.forEach((element) => {
        this.productCategoryData.labels?.push(element.key)
        this.productCategoryData.datasets[0].data.push(element.productCount)

        this.products.push(element)
      });

    })
  }

  GetProductDetails()
  {
    this.dataService.GetProductCountReport().subscribe(result => {
      this.productCountDetails = result;
      console.log(this.productCountDetails);
    })
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
          text: 'Product List Report',
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
          color: '#ff6347'
        },
        cell: {
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
