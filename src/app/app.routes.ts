import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



const ROUTES : Routes = [
  { path:'home', component : UserProfileComponent},
  { path : 'contact', component : ContactComponent},
  { path:'sign-up', component : SignUpComponent},
  { path : 'user-profile', component : UserProfileComponent}
]

export {ROUTES};
