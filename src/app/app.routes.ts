import { Routes } from '@angular/router';
import {authRoutes} from "./views/auth/auth.routes";
import {HomeComponent} from "./views/home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
    ...authRoutes,
];
