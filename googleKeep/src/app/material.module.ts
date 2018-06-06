/**Purpose:This is material module contains all APIS's needed to implement different
 * modules i.e. registrationForm,loginForm,toolBar,navBar
 * 
 * @author: SANA SHAIKh
 * @since: 9/April/2018
 */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule(
    {
        imports:[
            MatButtonModule,
            MatToolbarModule,
            MatInputModule,
            MatCardModule, 
        ],
            
        exports:[
            MatButtonModule,
            MatToolbarModule,
            MatCardModule,
            MatInputModule,        
        ],
    }
)

export class MaterialModule{}