import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ComponentsModule } from 'src/app/presentation/components/components.module';
import { SettingsComponent } from './settings.component';
import { SecurityComponent } from './security/security.component';
import { PasswordComponent } from './security/password/password.component';
import { LanguageComponent } from './language/language.component';
import { ThemeComponent } from './theme/theme.component';
import { PolicyComponent } from './policy/policy.component';
import { PrivacyComponent } from './policy/privacy/privacy.component';
import { TermsComponent } from './policy/terms/terms.component';
import { CopyrightComponent } from './policy/copyright/copyright.component';
import { MatchRuleComponent } from './match-rule/match-rule.component';
import { CardRuleComponent } from './match-rule/card-rule/card-rule.component';
import { CardRuleColumnsComponent } from './match-rule/card-rule/columns/columns.component';
import { CardRuleCreateComponent } from './match-rule/card-rule/create/create.component';
import { CardRuleEditComponent } from './match-rule/card-rule/edit/edit.component';
import { CardRuleFilterComponent } from './match-rule/card-rule/filter/filter.component';
import { CardRuleViewComponent } from './match-rule/card-rule/view/view.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SettingsComponent,
    SecurityComponent,
    PasswordComponent,
    LanguageComponent,
    ThemeComponent,
    PolicyComponent,
    PrivacyComponent,
    TermsComponent,
    CopyrightComponent,
    MatchRuleComponent,
    CardRuleComponent,
    CardRuleColumnsComponent,
    CardRuleCreateComponent,
    CardRuleEditComponent,
    CardRuleFilterComponent,
    CardRuleViewComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class SettingsModule { }
