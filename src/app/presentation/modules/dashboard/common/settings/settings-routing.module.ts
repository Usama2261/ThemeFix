import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageComponent } from './language/language.component';
import { SecurityComponent } from './security/security.component';
import { SettingsComponent } from './settings.component';
import { PolicyComponent } from './policy/policy.component';
import { MatchRuleComponent } from './match-rule/match-rule.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: "security",
        component: SecurityComponent
      },
      {
        path: "language",
        component: LanguageComponent
      },
      {
        path: "policy",
        component: PolicyComponent
      }, 
      {
        path: "match-rule",
        component: MatchRuleComponent
      },
      {
        path: "",
        redirectTo: "security",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
