import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from "@angular/material";

import { MatBadgeModule } from "@angular/material/badge";
const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule
];
@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
