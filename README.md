# Lazy Service Sharing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Todos:

1. Extend the shared module with with a `forChild()`-method that only provides the directives and with an `forRoot()` that also includes the services.

```
@NgModule({
    […],
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [AuthService, ...]
        }
    }
}
```
