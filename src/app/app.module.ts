import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CenterComponent } from './center/center.component';
import { Demo1Component } from './demo1/demo1.component';
import { CardComponent } from './card/card.component';
import { EmployeeCrudComponent } from './employee-crud/employee-crud.component';
import { PipesComponent } from './pipes/pipes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from './custom_pipes/remaining.pipe';
import { PrefixPipe } from './custom_pipes/prefix.pipe';
import { FilterPipe } from './custom_pipes/filter.pipe';
import { MySortPipe } from './custom_pipes/my-sort.pipe';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { EmployeesComponent } from './employees/employees.component';
import { Employees2Component } from './employees2/employees2.component';
import { EmployeesService } from './employees.service';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
import { MyInterceptor1Service } from './my-interceptor1.service';
import { RetryInterceptor } from './retry-interceptor.service';
import { EmployeeAJAXComponent } from './employee-ajax/employee-ajax.component';
import { Observable1Component } from './observable1/observable1.component';
import { Observable2Component } from './observable2/observable2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    Demo1Component,
    CardComponent,
    EmployeeCrudComponent,
    PipesComponent,
    NavbarComponent,
    RemainingPipe,
    PrefixPipe,
    FilterPipe,
    MySortPipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    EmployeesComponent,
    Employees2Component,
    UsersComponent,
    UserComponent,
    CommentsComponent,
    EmployeeAJAXComponent,
    Observable1Component,
    Observable2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    EmployeesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor1Service,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RetryInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
