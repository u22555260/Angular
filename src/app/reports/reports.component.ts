import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeReport } from '../shared/EmployeeReport';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

Chart.register(...registerables);

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {
  
  chartsLoaded:boolean = false;
  //Product Report
  products: any[] = [];
  productCategory: any[] = [];

  //Review Report
  reviews: any[] = [];
  supplierType: any[] = [];

  //Sales
  salesByEvent: any[] = [];
  bookingSales: any[] = [];

  //Employee Report
  employeeReport: EmployeeReport[] = [];
  gender: string = "MALE";

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}



  EmployeeReport() {
    this.dataService.GenerateEmployeeReport(this.gender).subscribe((result: EmployeeReport[]) => {
        this.employeeReport = result;
        console.log(this.employeeReport);
      });
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
  reviewData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Review Stars', backgroundColor: [this.random_rgba(), this.random_rgba(), this.random_rgba(), this.random_rgba(), this.random_rgba(),]},
    ],
  };

  reviewChartOptions: ChartOptions = {
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
        text: 'Review Ratings Count',
      },
    },
  };

populateReviewChart() {
  this.dataService.GetReviewChart().subscribe(result => {
    let reviewData:any[] = result[0];

    reviewData.forEach((element) => {
      this.reviewData.labels?.push(element.key)
      this.reviewData.datasets[0].data.push(element.rating_Count)

      this.reviews.push(element)
      console.log(this.reviews)
    });

  })
}

  //Event Sales
  EventSalesData: ChartData<'line'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Event Booking', backgroundColor: [this.random_rgba(), this.random_rgba(), this.random_rgba(), this.random_rgba(), this.random_rgba(),]},
    ],
  };

  EventSalesChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: { 
        grid: {
          display: true 
        }
      },
      y: { 
        ticks: {
          stepSize: 10
        },
        grid: {
          display: true
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Event Sales',
      },
    },
  };

    //Booking Sales
    BookingSalesData: ChartData<'line'> = {
      labels: [],
      datasets: [
        { data: [], label: 'Room Booking', backgroundColor: [this.random_rgba(), this.random_rgba(), this.random_rgba(), this.random_rgba(), this.random_rgba(),] },
      ],
    };
  
    BookingSalesChartOptions: ChartOptions = {
      responsive: true,
      scales: {
        x: { 
          grid: {
            display: true 
          }
        },
        y: { 
          ticks: {
            stepSize: 10
          },
          grid: {
            display: true
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Booking Sales',
        },
      },
    };

  //Product Quantity
  quantityData: ChartData<'radar'> = {
    labels: [],
    datasets: [
      { data: [], label: '', backgroundColor:[this.random_rgba(), this.random_rgba(), this.random_rgba(), this.random_rgba(), this.random_rgba(),]},
    ],
  };

  quantityChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: { 
        grid: {
          display: true 
        }
      },
      y: { 
        ticks: {
          stepSize: 10
        },
        grid: {
          display: true
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Product Quantity On Hand',
      },
    },
  };

  //Stock Take Report
  stockTakeData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Stock Take Items', backgroundColor:[this.random_rgba(), this.random_rgba(), this.random_rgba(), this.random_rgba(), this.random_rgba(),]},
    ],
  };

  stockTakeChartOptions: ChartOptions = {
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
        text: 'Stock Take Items',
      },
    },
  };

  //Report Methods
  GenerateProductReport()
  {
    this.dataService.GenerateProductsReport().subscribe(result => {
      let productCategoryData:any[] = result[0]

      productCategoryData.forEach((element) => {
        this.productCategoryData.labels?.push(element.key)
        this.productCategoryData.datasets[0].data.push(element.productCount)

        this.products.push(element)
      });
    


      this.chartsLoaded = true;
      this.cdr.detectChanges();
    })
  }

  GenerateEventSalesReport()
  {
    this.dataService.GenerateEventSalesReport().subscribe(result => {
      let EventSalesData: any[] = result[0]

      EventSalesData.forEach((element) => {
        this.EventSalesData.labels?.push(element.monthYear)
        this.EventSalesData.datasets[0].data.push(element.totalSales)

      });

      this.chartsLoaded = true;
      this.cdr.detectChanges();
    })
  }

  GenerateBookingSalesReport()
  {
    this.dataService.GenerateBookingSalesReport().subscribe(result => {
      let BookingSalesData: any[] = result[0]

      BookingSalesData.forEach((element) => {
        this.BookingSalesData.labels?.push(element.monthYear)
        this.BookingSalesData.datasets[0].data.push(element.totalSales)

      });

      this.chartsLoaded = true;
      this.cdr.detectChanges();
    })
  }

  GenerateProductQuantityReport()
  {
    this.dataService.GenerateProductQuantityReport().subscribe(result => {
      let quantityData: any[] = result[0]

      quantityData.forEach((element) => {
        this.quantityData.labels?.push(element.productName)
        this.quantityData.datasets[0].data.push(element.count)

      });

      this.chartsLoaded = true;
      this.cdr.detectChanges();
    })
  }

  GenerateStockTakeQuantityReport()
  {
    this.dataService.GenerateStockTakeReport().subscribe(result => {
      let stockTakeData: any[] = result[0]

      stockTakeData.forEach((element) => {
        this.stockTakeData.labels?.push(element.monthYear)
        this.stockTakeData.datasets[0].data.push(element.totalItems)

      });

      this.chartsLoaded = true;
      this.cdr.detectChanges();
    })
  }

  onGenderChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.gender = target.value;
    this.EmployeeReport();
  }

  public generatePDF(): void {
    const data = document.getElementById('reportTable');
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 208;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('EmployeeReport.pdf');
      });
    }
  }

  ngOnInit() {
    this.EmployeeReport();
    this.GenerateProductReport();
    this.populateReviewChart();
    this.GenerateEventSalesReport();
    this.GenerateBookingSalesReport();
    this.GenerateProductQuantityReport();
    this.GenerateStockTakeQuantityReport();
  }

}
