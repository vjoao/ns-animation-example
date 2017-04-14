import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { Item } from "./item";
import { ItemService } from "./item.service";
import {registerElement} from "nativescript-angular/element-registry";
import { screen } from 'platform';
import { ListView } from "ui/list-view";

registerElement("map-view", () => require("nativescript-google-maps-sdk").MapView);

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: [
        "./items.component.css"
    ],
    animations: [
        trigger("info", [
            state("inactive", style({ 
                "transform": "translateX(" + (screen.mainScreen.widthDIPs - 240) + ")"
            })),
            state("active", style({ 
                "transform": "translateX(0)"
                // "transform": "translateX(-500)"
            })),
            transition("* => *", [ animate("600ms ease-out") ]),
        ])
    ]
})
export class ItemsComponent implements OnInit {
    items: Item[];
    itemState: string = "inactive";
    @ViewChild("list") listRef: ElementRef;
    
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        console.log(screen.mainScreen.scale);
    }

    listLoaded(args) {
        console.log(args.object.width);
    }

    itemTap (event) {
        if(this.itemState == 'active'){
            this.itemState = 'inactive';
        } else {
            this.itemState = 'active';
        }
        console.log('tap', event.id);
    }
}
