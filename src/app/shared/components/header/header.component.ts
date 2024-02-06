import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/core/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterLink, TranslateModule],
  standalone: true,
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {}
  langSwitch() {
    this.translate.currentLang === Language.English
      ? localStorage.setItem('lang', Language.Arabic)
      : localStorage.setItem('lang', Language.English);
    window.location.reload();
  }
}
