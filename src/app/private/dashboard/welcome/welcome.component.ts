import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Order, StatusType } from 'src/app/providers/models/OrderRequest.model';
import { DashboardService } from 'src/app/providers/services/dashboard.service';
import { OrderService } from 'src/app/providers/services/order.service';
import { CancelOrderModalComponent } from '../cancel-order-modal/cancel-order-modal.component';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { NewStatusModalComponent } from '../new-status-modal/new-status-modal.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'client', 'status', 'actions'];
  dataSource = new MatTableDataSource<Order>([]);
  totalOrdersPreparando: number;
  totalOrdersScheduleds: number;

  @ViewChild('paginator', { static: true }) paginator: MatPaginator;
  page = 0;
  size = 0;
  totalElements = 0;

  constructor(
    private dashboardService: DashboardService,
    public dialog: MatDialog,
    private orderService: OrderService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getOrdersByStatusPreparando();
    this.getOrdersScheduleds();
    this.setPageSize();
    this.getOrdersOfDay();
  }

  async ngAfterViewInit() {
    setTimeout(() => {
      this.configurePaginator();
    }, 0);
  }

  private configurePaginator(): void {
    if (this.paginator) {
      this.paginator._intl.itemsPerPageLabel = 'Itens por página';
      this.paginator._intl.firstPageLabel = 'Primeira página';
      this.paginator._intl.nextPageLabel = 'Próxima página';
      this.paginator._intl.previousPageLabel = 'Página anterior';
      this.paginator._intl.lastPageLabel = 'Última página';
      this.paginator._intl.getRangeLabel = this.getPortugueseRangeLabel;
      this.paginator.page.subscribe(
        (ev: PageEvent) => {
          this.size = ev.pageSize;
          this.page = ev.pageIndex;
          this.getOrdersOfDay();
        }
      );
    }
  }

  public setPageSize() {
    this.size = 10;
  }

  getPortugueseRangeLabel(page: number, pageSize: number, length: number) {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  }

  public getOrdersByStatusPreparando() {
    this.dashboardService.getOrdersByStatusPreparando().subscribe(
      success => {
        this.totalOrdersPreparando = success.data.length;
      }
    );
  }

  public getOrdersScheduleds() {
    this.dashboardService.getOrdersScheduleds().subscribe(
      success => {
        this.totalOrdersScheduleds = success.data.length;
      }
    );
  }

  public getOrdersOfDay() {
    this.dashboardService.getOrdersOfDay(this.page).subscribe(
      success => {
        this.dataSource = new MatTableDataSource(success.data);
        this.totalElements = success.data.length;
        this.setPaginatorOptions();
      }
    );
  }

  private setPaginatorOptions(): void {
    if (this.paginator) {
      this.paginator.pageIndex = this.page;
      this.paginator.length = this.totalElements;
    }
  }

  public showOrderDetails(item: Order): void {
    this.dialog.open(DetailsModalComponent, {
      width: '70%',
      data: item
    });
  }

  public changeOrderStatus(item: Order) {
    const dialogRef = this.dialog.open(NewStatusModalComponent, {
      width: '300px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  public cancelOrder(item: Order) {

    const dialogRef = this.dialog.open(CancelOrderModalComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        item.status = StatusType.CANCELADO;

        this.orderService.updateOrderStatus(item).subscribe(
          success => {
            if (success.status == 202) {
              this.snackBar.open(success.errors[0], 'OK!', {
                duration: 5000,
                panelClass: ['feedback-error']
              });
            }

            if (success.status == 200) {
              this.snackBar.open('Status atualizado!', 'OK!', {
                duration: 5000,
                panelClass: ['feedback']
              });
            }
          }
        );
      }
    });
  }

}
