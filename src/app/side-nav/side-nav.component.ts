import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MenuList, menuList } from '../../domain/model/menu-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [TranslateModule, FontAwesomeModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  menuList: MenuList[] = menuList;
  signOutIcon = faArrowRightFromBracket;
}
