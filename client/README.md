# Talentum

```
client
├─ .angular
├─ .editorconfig
├─ angular.json
├─ package-lock.json
├─ package.json
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ app
│  │  ├─ app-routing.module.ts
│  │  ├─ app.component.html
│  │  ├─ app.component.scss
│  │  ├─ app.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.module.ts
│  │  ├─ core
│  │  │  ├─ components
│  │  │  │  ├─ components.module.ts
│  │  │  │  ├─ footer
│  │  │  │  │  ├─ footer.component.html
│  │  │  │  │  ├─ footer.component.scss
│  │  │  │  │  ├─ footer.component.spec.ts
│  │  │  │  │  └─ footer.component.ts
│  │  │  │  ├─ full-job-card
│  │  │  │  │  ├─ full-job-card.component.html
│  │  │  │  │  ├─ full-job-card.component.scss
│  │  │  │  │  ├─ full-job-card.component.spec.ts
│  │  │  │  │  └─ full-job-card.component.ts
│  │  │  │  ├─ header
│  │  │  │  │  ├─ header.component.html
│  │  │  │  │  ├─ header.component.scss
│  │  │  │  │  ├─ header.component.spec.ts
│  │  │  │  │  └─ header.component.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ page-header
│  │  │  │     ├─ page-header.component.html
│  │  │  │     ├─ page-header.component.scss
│  │  │  │     ├─ page-header.component.spec.ts
│  │  │  │     ├─ page-header.component.ts
│  │  │  │     └─ tempCodeRunnerFile.scss
│  │  │  ├─ core.module.ts
│  │  │  ├─ directives
│  │  │  │  ├─ password-match.directive.spec.ts
│  │  │  │  └─ password-match.directive.ts
│  │  │  ├─ index.ts
│  │  │  ├─ models
│  │  │  │  ├─ admin.ts
│  │  │  │  ├─ category.ts
│  │  │  │  ├─ company.ts
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ job-application.ts
│  │  │  │  ├─ job.ts
│  │  │  │  ├─ saved-jobs.ts
│  │  │  │  ├─ tempCodeRunnerFile.ts
│  │  │  │  └─ user.ts
│  │  │  └─ services
│  │  │     ├─ admin
│  │  │     │  ├─ admin.service.spec.ts
│  │  │     │  └─ admin.service.ts
│  │  │     ├─ auth
│  │  │     │  ├─ logger
│  │  │     │  │  ├─ logger.spec.ts
│  │  │     │  │  └─ logger.ts
│  │  │     │  └─ signup
│  │  │     │     ├─ register.service.spec.ts
│  │  │     │     └─ register.service.ts
│  │  │     ├─ category
│  │  │     │  ├─ category.service.spec.ts
│  │  │     │  └─ category.service.ts
│  │  │     ├─ company
│  │  │     │  ├─ company-ser.service.spec.ts
│  │  │     │  └─ company.service.ts
│  │  │     ├─ error-handling.ts
│  │  │     ├─ index.ts
│  │  │     ├─ job
│  │  │     │  ├─ job.service.spec.ts
│  │  │     │  └─ job.service.ts
│  │  │     ├─ local-storage
│  │  │     │  ├─ local-storage.service.spec.ts
│  │  │     │  └─ local-storage.service.ts
│  │  │     ├─ pagination
│  │  │     │  ├─ pagination.service.spec.ts
│  │  │     │  └─ pagination.service.ts
│  │  │     ├─ scroll
│  │  │     │  ├─ scroll.service.spec.ts
│  │  │     │  └─ scroll.service.ts
│  │  │     ├─ services.module.ts
│  │  │     └─ user
│  │  │        ├─ user.service.spec.ts
│  │  │        └─ user.service.ts
│  │  ├─ features
│  │  │  ├─ auth
│  │  │  │  ├─ auth-routing.module.ts
│  │  │  │  ├─ auth.module.ts
│  │  │  │  ├─ login
│  │  │  │  │  ├─ login.component.html
│  │  │  │  │  ├─ login.component.scss
│  │  │  │  │  ├─ login.component.spec.ts
│  │  │  │  │  └─ login.component.ts
│  │  │  │  └─ signup
│  │  │  │     ├─ build
│  │  │  │     │  └─ Debug
│  │  │  │     ├─ signup.component.html
│  │  │  │     ├─ signup.component.scss
│  │  │  │     ├─ signup.component.spec.ts
│  │  │  │     └─ signup.component.ts
│  │  │  ├─ company
│  │  │  │  ├─ company-routing.module.ts
│  │  │  │  ├─ company.module.ts
│  │  │  │  └─ pages
│  │  │  │     ├─ add-job
│  │  │  │     │  ├─ add-job.component.html
│  │  │  │     │  ├─ add-job.component.scss
│  │  │  │     │  ├─ add-job.component.spec.ts
│  │  │  │     │  └─ add-job.component.ts
│  │  │  │     └─ company
│  │  │  │        ├─ company.component.html
│  │  │  │        ├─ company.component.scss
│  │  │  │        ├─ company.component.spec.ts
│  │  │  │        └─ company.component.ts
│  │  │  ├─ features.module.ts
│  │  │  ├─ home
│  │  │  │  ├─ components
│  │  │  │  │  ├─ category-card
│  │  │  │  │  │  ├─ category-card.component.html
│  │  │  │  │  │  ├─ category-card.component.scss
│  │  │  │  │  │  ├─ category-card.component.spec.ts
│  │  │  │  │  │  └─ category-card.component.ts
│  │  │  │  │  └─ job-card
│  │  │  │  │     ├─ job-card.component.html
│  │  │  │  │     ├─ job-card.component.scss
│  │  │  │  │     ├─ job-card.component.spec.ts
│  │  │  │  │     └─ job-card.component.ts
│  │  │  │  ├─ home
│  │  │  │  │  ├─ home.component.html
│  │  │  │  │  ├─ home.component.scss
│  │  │  │  │  ├─ home.component.spec.ts
│  │  │  │  │  └─ home.component.ts
│  │  │  │  ├─ home.module.ts
│  │  │  │  └─ index.ts
│  │  │  ├─ index.ts
│  │  │  ├─ jobs
│  │  │  │  ├─ jobs-routing.module.ts
│  │  │  │  ├─ jobs.module.ts
│  │  │  │  └─ pages
│  │  │  │     ├─ apply-to-job
│  │  │  │     │  ├─ apply-to-job.component.html
│  │  │  │     │  ├─ apply-to-job.component.scss
│  │  │  │     │  ├─ apply-to-job.component.spec.ts
│  │  │  │     │  ├─ apply-to-job.component.ts
│  │  │  │     │  └─ min-date-validator.ts
│  │  │  │     ├─ job-details
│  │  │  │     │  ├─ job-details.component.html
│  │  │  │     │  ├─ job-details.component.scss
│  │  │  │     │  ├─ job-details.component.spec.ts
│  │  │  │     │  └─ job-details.component.ts
│  │  │  │     └─ jobs
│  │  │  │        ├─ jobs.component.html
│  │  │  │        ├─ jobs.component.scss
│  │  │  │        ├─ jobs.component.spec.ts
│  │  │  │        └─ jobs.component.ts
│  │  │  └─ user
│  │  │     ├─ user
│  │  │     │  ├─ user.component.html
│  │  │     │  ├─ user.component.scss
│  │  │     │  ├─ user.component.spec.ts
│  │  │     │  └─ user.component.ts
│  │  │     ├─ user-routing.module.ts
│  │  │     └─ user.module.ts
│  │  ├─ shared
│  │  │  ├─ index.ts
│  │  │  ├─ primeng-components
│  │  │  │  └─ primeng-components.module.ts
│  │  │  ├─ shared.module.ts
│  │  │  └─ ui
│  │  │     ├─ buttons
│  │  │     │  ├─ animated-button
│  │  │     │  │  ├─ animated-button.component.html
│  │  │     │  │  ├─ animated-button.component.scss
│  │  │     │  │  ├─ animated-button.component.spec.ts
│  │  │     │  │  └─ animated-button.component.ts
│  │  │     │  ├─ buttons.module.ts
│  │  │     │  └─ save-button
│  │  │     │     ├─ save-button.component.html
│  │  │     │     ├─ save-button.component.scss
│  │  │     │     ├─ save-button.component.spec.ts
│  │  │     │     └─ save-button.component.ts
│  │  │     ├─ index.ts
│  │  │     ├─ price-slider
│  │  │     │  ├─ price-slider.component.html
│  │  │     │  ├─ price-slider.component.scss
│  │  │     │  ├─ price-slider.component.spec.ts
│  │  │     │  └─ price-slider.component.ts
│  │  │     └─ ui.module.ts
│  │  ├─ time-formatter.pipe.spec.ts
│  │  └─ time-formatter.pipe.ts
│  ├─ assets
│  │  ├─ convert-to-json.js
│  │  ├─ fonts
│  │  │  ├─ ClashDisplay-Bold.eot
│  │  │  ├─ ClashDisplay-Bold.ttf
│  │  │  ├─ ClashDisplay-Bold.woff
│  │  │  ├─ ClashDisplay-Bold.woff2
│  │  │  ├─ ClashDisplay-Extralight.eot
│  │  │  ├─ ClashDisplay-Extralight.ttf
│  │  │  ├─ ClashDisplay-Extralight.woff
│  │  │  ├─ ClashDisplay-Extralight.woff2
│  │  │  ├─ ClashDisplay-Font.scss
│  │  │  ├─ ClashDisplay-Light.eot
│  │  │  ├─ ClashDisplay-Light.ttf
│  │  │  ├─ ClashDisplay-Light.woff
│  │  │  ├─ ClashDisplay-Light.woff2
│  │  │  ├─ ClashDisplay-Medium.eot
│  │  │  ├─ ClashDisplay-Medium.ttf
│  │  │  ├─ ClashDisplay-Medium.woff
│  │  │  ├─ ClashDisplay-Medium.woff2
│  │  │  ├─ ClashDisplay-Regular.eot
│  │  │  ├─ ClashDisplay-Regular.ttf
│  │  │  ├─ ClashDisplay-Regular.woff
│  │  │  ├─ ClashDisplay-Regular.woff2
│  │  │  ├─ ClashDisplay-Semibold.eot
│  │  │  ├─ ClashDisplay-Semibold.ttf
│  │  │  ├─ ClashDisplay-Semibold.woff
│  │  │  ├─ ClashDisplay-Semibold.woff2
│  │  │  ├─ ClashDisplay-Variable.eot
│  │  │  ├─ ClashDisplay-Variable.ttf
│  │  │  ├─ ClashDisplay-Variable.woff
│  │  │  └─ ClashDisplay-Variable.woff2
│  │  ├─ images
│  │  │  ├─ curly-arrow-down.svg
│  │  │  ├─ curly-arrow-up.svg
│  │  │  ├─ curly-line.svg
│  │  │  ├─ godaddy-logo.svg
│  │  │  ├─ header-bg.svg
│  │  │  ├─ hero-pattern.svg
│  │  │  ├─ hero-person-02.svg
│  │  │  ├─ hero-person-03.svg
│  │  │  ├─ hero-person.svg
│  │  │  ├─ Hero.svg
│  │  │  ├─ How_talentum_works.svg
│  │  │  ├─ jobsSearch.jpg
│  │  │  ├─ Logo.svg
│  │  │  ├─ map.svg
│  │  │  ├─ No-Added.svg
│  │  │  ├─ rectangle.svg
│  │  │  ├─ SVG
│  │  │  └─ user.svg
│  │  ├─ jobs-data.json
│  │  └─ testingData.ts
│  ├─ environments
│  │  ├─ environment.development.ts
│  │  ├─ environment.ts
│  │  └─ index.ts
│  ├─ index.html
│  ├─ main.ts
│  ├─ styles
│  │  ├─ theme-overrides.scss
│  │  └─ variables.scss
│  ├─ styles.scss
│  └─ testing-data.ts
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json

```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
