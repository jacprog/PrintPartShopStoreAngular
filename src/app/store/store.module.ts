import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive"; 
import { CartSummaryComponent } from "./cartSummary.component"; 
import { CartDetailComponent } from "./cartDetail.component"; 
import { CheckoutComponent } from "./checkout.component";  
import { RouterModule } from "@angular/router";

import { HomePageComponent } from "./homePage.component";
import { ClockComponent } from "./clock.component";
import { BearingComponent } from "./bearing.component";
import { ContactComponent } from "./contact.component";
import { TermsComponent } from "./terms.component";

           

@NgModule({
	imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent,
        CartDetailComponent, CheckoutComponent, HomePageComponent, ClockComponent, BearingComponent, ContactComponent, TermsComponent],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent, HomePageComponent, ClockComponent, BearingComponent, ContactComponent, TermsComponent]
})
export class StoreModule { }
