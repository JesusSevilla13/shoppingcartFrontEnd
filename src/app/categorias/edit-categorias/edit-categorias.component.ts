import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar';
import { switchMap } from 'rxjs';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-edit-categorias',
  templateUrl: './edit-categorias.component.html',
  styleUrls: ['./edit-categorias.component.scss']
})
export class EditCategoriasComponent implements OnInit {

  public dataForm:FormGroup;
  private submitted: Boolean = false;
  
  constructor(protected formBuilder:FormBuilder, 
    private activateRouter: ActivatedRoute, 
    private svcCategorias: CategoriasService, 
    private snackBar:MatSnackBar,
    private router:Router) {
      this.dataForm = this.formBuilder.group({
        id:[0],
        nombre:['',[Validators.required]],
      });
     }

  ngOnInit(): void {
    this.activateRouter.params.pipe(
      switchMap(({id})=>this.svcCategorias.getCategoria(id))
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
    this.svcCategorias.actualizarCategorias(this.dataForm.value).subscribe(
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
