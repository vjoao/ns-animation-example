"use strict";
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var item_service_1 = require("./item.service");
var element_registry_1 = require("nativescript-angular/element-registry");
var platform_1 = require("platform");
element_registry_1.registerElement("map-view", function () { return require("nativescript-google-maps-sdk").MapView; });
var ItemsComponent = (function () {
    function ItemsComponent(itemService) {
        this.itemService = itemService;
        this.itemState = "inactive";
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
        console.log(platform_1.screen.mainScreen.scale);
    };
    ItemsComponent.prototype.listLoaded = function (args) {
        console.log(args.object.width);
    };
    ItemsComponent.prototype.itemTap = function (event) {
        if (this.itemState == 'active') {
            this.itemState = 'inactive';
        }
        else {
            this.itemState = 'active';
        }
        console.log('tap', event.id);
    };
    return ItemsComponent;
}());
__decorate([
    core_1.ViewChild("list"),
    __metadata("design:type", core_1.ElementRef)
], ItemsComponent.prototype, "listRef", void 0);
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html",
        styleUrls: [
            "./items.component.css"
        ],
        animations: [
            animations_1.trigger("info", [
                animations_1.state("inactive", animations_1.style({
                    "transform": "translateX(" + (platform_1.screen.mainScreen.widthDIPs - 240) + ")"
                })),
                animations_1.state("active", animations_1.style({
                    "transform": "translateX(0)"
                })),
                animations_1.transition("* => *", [animations_1.animate("600ms ease-out")]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFDekUsa0RBQWlGO0FBRWpGLCtDQUE2QztBQUM3QywwRUFBc0U7QUFDdEUscUNBQWtDO0FBR2xDLGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxPQUFPLEVBQS9DLENBQStDLENBQUMsQ0FBQztBQXNCbkYsSUFBYSxjQUFjO0lBS3ZCLHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUg1QyxjQUFTLEdBQVcsVUFBVSxDQUFDO0lBR2lCLENBQUM7SUFFakQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFTLEtBQUs7UUFDVixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxDQUFBLENBQUM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDaEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDOUIsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBckJzQjtJQUFsQixnQkFBUyxDQUFDLE1BQU0sQ0FBQzs4QkFBVSxpQkFBVTsrQ0FBQztBQUg5QixjQUFjO0lBcEIxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFO1lBQ1AsdUJBQXVCO1NBQzFCO1FBQ0QsVUFBVSxFQUFFO1lBQ1Isb0JBQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQ1osa0JBQUssQ0FBQyxVQUFVLEVBQUUsa0JBQUssQ0FBQztvQkFDcEIsV0FBVyxFQUFFLGFBQWEsR0FBRyxDQUFDLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHO2lCQUN6RSxDQUFDLENBQUM7Z0JBQ0gsa0JBQUssQ0FBQyxRQUFRLEVBQUUsa0JBQUssQ0FBQztvQkFDbEIsV0FBVyxFQUFFLGVBQWU7aUJBRS9CLENBQUMsQ0FBQztnQkFDSCx1QkFBVSxDQUFDLFFBQVEsRUFBRSxDQUFFLG9CQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBRSxDQUFDO2FBQ3RELENBQUM7U0FDTDtLQUNKLENBQUM7cUNBTW1DLDBCQUFXO0dBTG5DLGNBQWMsQ0F3QjFCO0FBeEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInVpL2xpc3Qtdmlld1wiO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJtYXAtdmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNka1wiKS5NYXBWaWV3KTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgXCIuL2l0ZW1zLmNvbXBvbmVudC5jc3NcIlxuICAgIF0sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKFwiaW5mb1wiLCBbXG4gICAgICAgICAgICBzdGF0ZShcImluYWN0aXZlXCIsIHN0eWxlKHsgXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVYKFwiICsgKHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAtIDI0MCkgKyBcIilcIlxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgc3RhdGUoXCJhY3RpdmVcIiwgc3R5bGUoeyBcbiAgICAgICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVgoMClcIlxuICAgICAgICAgICAgICAgIC8vIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWCgtNTAwKVwiXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKFwiKiA9PiAqXCIsIFsgYW5pbWF0ZShcIjYwMG1zIGVhc2Utb3V0XCIpIF0pLFxuICAgICAgICBdKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBJdGVtW107XG4gICAgaXRlbVN0YXRlOiBzdHJpbmcgPSBcImluYWN0aXZlXCI7XG4gICAgQFZpZXdDaGlsZChcImxpc3RcIikgbGlzdFJlZjogRWxlbWVudFJlZjtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICAgICAgY29uc29sZS5sb2coc2NyZWVuLm1haW5TY3JlZW4uc2NhbGUpO1xuICAgIH1cblxuICAgIGxpc3RMb2FkZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLm9iamVjdC53aWR0aCk7XG4gICAgfVxuXG4gICAgaXRlbVRhcCAoZXZlbnQpIHtcbiAgICAgICAgaWYodGhpcy5pdGVtU3RhdGUgPT0gJ2FjdGl2ZScpe1xuICAgICAgICAgICAgdGhpcy5pdGVtU3RhdGUgPSAnaW5hY3RpdmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pdGVtU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygndGFwJywgZXZlbnQuaWQpO1xuICAgIH1cbn1cbiJdfQ==