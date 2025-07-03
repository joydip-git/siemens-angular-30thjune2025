import { Subscription } from "rxjs";
import { DataService } from "./storage";

//consumer
const dataService = DataService.getInstance();
const sub: Subscription = dataService.obsData
    .subscribe(
        (data) => {
            console.log("Received data:", data);
        }
    );

setTimeout(() => {
    console.log('unsubscribing');
    sub.unsubscribe();
}, 5000)

//publisher
const serviceInstance = DataService.getInstance();
setInterval(
    () => {
        console.log('publishing data'); serviceInstance.publishData(Math.floor(Math.random() * 100));
    },
    2000
)