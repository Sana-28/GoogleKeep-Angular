/**Purpose:This is material module contains all APIS's needed to implement different
 * modules i.e. registrationForm,loginForm,toolBar,navBar
 * 
 * @author: SANA SHAIKh
 * @since: 9/April/2018
 */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule(
    {
        imports:[
            FormsModule,
            FlexLayoutModule,
            MatButtonModule,
            MatToolbarModule,
            MatInputModule,
            MatIconModule,
            MatCardModule,
            MatFormFieldModule,
            MatStepperModule,
            ReactiveFormsModule
        ],
            
        exports:[
            FormsModule,
            FlexLayoutModule,
            MatButtonModule,
            MatToolbarModule,
            MatCardModule,
            MatInputModule, 
            MatIconModule, 
            MatFormFieldModule,
            MatStepperModule,
            ReactiveFormsModule    
        ],
    }
)

export class MaterialModule{}