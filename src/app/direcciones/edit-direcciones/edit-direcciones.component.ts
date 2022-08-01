import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { DireccionesService } from 'src/app/services/direcciones.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/shared/model/Usuario';

@Component({
  selector: 'app-edit-direcciones',
  templateUrl: './edit-direcciones.component.html',
  styleUrls: ['./edit-direcciones.component.scss']
})
export class EditDireccionesComponent implements OnInit {

  public dataForm:FormGroup;
  private submitted: Boolean = false;
  public listUsuario: Usuario[]=[];
  
  constructor(protected formBuilder:FormBuilder, 
    private activateRouter: ActivatedRoute, 
    private svcDirecciones: DireccionesService, 
    private svcUsuario: UsuarioService,
    private snackBar:MatSnackBar,
    private router:Router) {
      this.dataForm = this.formBuilder.group({
        id:[0],
        direccion:['',[Validators.required]],
        id_Usuario:[, [Validators.required]],
      });
     }

  ngOnInit(): void {
    this.activateRouter.params.pipe(
      switchMap(({id})=>this.svcDirecciones.getDireccion(id))
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
      this.svcUsuario.getUsuarios().subscribe(value=>{
        const dataObject = Object.values(value);
        if (dataObject[0] == 200){
          this.listUsuario = dataObject[2];
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
    this.svcDirecciones.actualizarDirecciones(this.dataForm.value).subscribe(
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
