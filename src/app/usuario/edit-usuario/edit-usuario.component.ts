import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit {
  
  public dataForm:FormGroup;
  private submitted: Boolean = false;
  
  constructor(protected formBuilder:FormBuilder, 
    private activateRouter: ActivatedRoute, 
    private svcUsuario: UsuarioService, 
    private snackBar:MatSnackBar,
    private router:Router) {
      this.dataForm = this.formBuilder.group({
        id:[0],
        nombre:['',[Validators.required]],
        apellido:['',[Validators.required]],
        celular:[,[Validators.required]],
        correo:['',[Validators.required]],
      });
     }

  ngOnInit(): void {
    this.activateRouter.params.pipe(
      switchMap(({id})=>this.svcUsuario.getUsuario(id))
      ).subscribe(value=>{
        const dataObject = Object.values(value);
        if (dataObject[0] == 200){
          this.dataForm.patchValue(dataObject[2]);
          this.snackBar.open(dataObject[1], 'Ok', {
            horizontalPosition:'center',
            verticalPosition:'bottom',
            duration:5000
          })
        }
      });
  }

  guardar(){
    this.submitted = true;
    if (this.submitted && this.dataForm.invalid){
      this.snackBar.open('Faltan datos obligatorios', 'Ok', {
        horizontalPosition:'center',
        verticalPosition:'bottom',
        duration:5000
      })
      return;
  }
    this.svcUsuario.actualizarUsuario(this.dataForm.value).subscribe(
      value=>{
        const dataObject = Object.values(value);
        if (dataObject[0] == 201){
          this.dataForm.patchValue (dataObject[2]);
          this.snackBar.open(dataObject[1], 'Ok', {
            horizontalPosition:'center',
            verticalPosition:'bottom',
            duration:5000
          })
        }
      }
  )
  }
}
