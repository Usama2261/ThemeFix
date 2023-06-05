import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[contentProjectionDirective]'
})
export class ContentProjectionDirectiveDirective {

  constructor(public templateRef: TemplateRef<unknown>) {}

}
