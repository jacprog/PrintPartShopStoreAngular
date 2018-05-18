import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Complete Clock", "A Clock", "A complete and assembled 3D printed clock", 500, "assets/images/clock.jpg"),
        new Product(2, "Anchor", "Clock parts", "Custom designed anchor", 20, "assets/images/anchor.jpg"),
        new Product(3, "Escape wheel", "Clock parts", "Custom designed escape wheel", 20, "assets/images/escape.jpg"),
	    new Product(4, "Escapment Frame", "Clock parts", "Secondary frame for escapement", 15, "assets/images/escapeMount.jpg"),
        new Product(5, "Frame", "Clock parts", "Main frame, set of 2, only one here", 25, "assets/images/frame.jpg"),
        new Product(6, "Face", "Clock parts", "The clock face", 18, "assets/images/face.jpg"),
        new Product(7, "Main gear", "Clock parts", "Gear, 10 and 60 teeth", 20, "assets/images/gear1060.jpg"),
        new Product(8, "Gear", "Clock parts", "Gear, 8 and 64 teeth", 20, "assets/images/gear864.jpg"),
        new Product(9, "Hour Hand", "Clock parts", "hour hand", 12, "assets/images/hour.jpg"),
        new Product(10, "Minute Hand", "Clock parts", "Minute hand", 10, "assets/images/minute.jpg"),
        new Product(11, "Pulley", "Clock parts", "Pulley for weight rope", 8, "assets/images/pulley.jpg"),
        new Product(12, "Hour Spindle", "Clock parts", "Spindle to power the hour hand", 7, "assets/images/hourSpindle.jpg"),
        new Product(13, "Hour Gear 10", "Clock parts", "Gear 10 teeth", 6, "assets/images/gear10.jpg"),
        new Product(14, "Hour Gear 32", "Clock parts", "Gear 32 teeth", 8, "assets/images/gear32.jpg"),
        new Product(15, "Pendulum Screw", "Clock parts", "Beat adjusting screw set", 24, "assets/images/screw.jpg"),
	    new Product(16, "Pendulum", "Clock parts", "Pendulum front and back", 40, "assets/images/pendulum.jpg"), 
	    new Product(17, "Stops", "Clock parts", "Set of stops rings", 6, "assets/images/stops.jpg"),
	    new Product(18, "Shafts", "Hardware", "Set of shafts", 20, "assets/images/shafts.jpg"),
	    new Product(19, "Screws", "Hardware", "Set of screws, nuts, washers", 10, "assets/images/screws.jpg"),
	    new Product(20, "Small Weight", "Hardware", "The smaller steel weight", 25, "assets/images/smallWeight.jpg"),
	    new Product(21, "Large Weight", "Hardware", "The larger steel weight", 50, "assets/images/largeWeight.jpg"),
	    new Product(22, "Small Bearing", "Bearing", "3D printed bearing, similar to a 608", 20, "assets/images/bearing608.jpg"),
	    new Product(23, "Large Bearing", "Bearing", "3D printed bearing, 48 mm outer diameter", 28, "assets/images/bearing48.jpg"),
   ];
	    getProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
            console.log(JSON.stringify(order));
            return Observable.from([order]);
    }
}
