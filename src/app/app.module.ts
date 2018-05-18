import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";


import { HomePageComponent } from "./store/homePage.component";
import { ClockComponent } from "./store/clock.component";
import { BearingComponent } from "./store/bearing.component";
import { ContactComponent } from "./store/contact.component";
import { TermsComponent } from "./store/terms.component";

@NgModule({
    imports: [BrowserModule, StoreModule,
        RouterModule.forRoot([
            {
                path: "home", component: HomePageComponent,
                canActivate: [StoreFirstGuard]
            }, 
            {
                path: "store", component: StoreComponent,
                canActivate: [StoreFirstGuard]
			}, 
			{
				path: "cart", component: CartDetailComponent,
				canActivate: [StoreFirstGuard]
			}, 
			{
				path: "checkout", component: CheckoutComponent,
				canActivate: [StoreFirstGuard]
			},
            {
                path: "admin",
                loadChildren: "app/admin/admin.module#AdminModule",
                canActivate: [StoreFirstGuard]
            },
            {
                path: "clock", component: ClockComponent,
                canActivate: [StoreFirstGuard]
            },
        
            {
                path: "bearing", component: BearingComponent,
                canActivate: [StoreFirstGuard]
            },

            {
                path: "contact", component: ContactComponent,
                canActivate: [StoreFirstGuard]
            },

            {
                path: "terms", component: TermsComponent,
                canActivate: [StoreFirstGuard]
            },



            { path: "**", redirectTo: "/home" }
        ])],
    providers: [StoreFirstGuard],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
