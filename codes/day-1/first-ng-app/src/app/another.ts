import { Component } from "@angular/core";

@Component({
    selector: 'app-another',
    template: `<h2>Another Component</h2>`,
    standalone: false
})
export class Another {
    constructor() {
        console.log('Another Component initialized');
    }
}