import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

import * as faRegular from '@fortawesome/free-regular-svg-icons';
import * as faSolid from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    TranslateModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  faRegular = faRegular;
  faSolid = faSolid;
}
