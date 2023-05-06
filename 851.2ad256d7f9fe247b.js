"use strict";(self.webpackChunkAbogadosFront=self.webpackChunkAbogadosFront||[]).push([[851],{9851:(D,u,l)=>{l.r(u),l.d(u,{EditarClienteModule:()=>y});var p=l(6895),d=l(3599),n=l(433),f=l(797),g=l(9644),h=l(3696),C=l(5226),v=l.n(C),t=l(8256),x=l(9799),Z=l(1227),M=l(7185),_=l(6940);const b=["fileDropRef"];function T(i,a){if(1&i&&(t.TgZ(0,"option",29),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.nombre," ")}}function O(i,a){if(1&i&&(t.TgZ(0,"option",29),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.nombre," ")}}function P(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",30),t._UZ(1,"img",31),t.TgZ(2,"div",32)(3,"h4",33),t._uU(4),t.qZA(),t.TgZ(5,"p",34),t._uU(6),t.qZA()(),t.TgZ(7,"img",35),t.NdJ("click",function(){const s=t.CHM(e).index,c=t.oxw();return t.KtG(c.deleteFile(s))}),t.qZA()()}if(2&i){const e=a.$implicit,o=t.oxw();t.xp6(4),t.hij(" ",null==e?null:e.name," "),t.xp6(2),t.hij(" ",o.formatBytes(null==e?null:e.size)," ")}}const w=[{path:"",component:(()=>{class i{constructor(e,o,r,s,c,m,E){this.tipoDocumentoService=e,this.tipoContratoService=o,this.fb=r,this.toastr=s,this.clientesService=c,this.ruta=m,this.router=E,this.editar=!1,this.files=[],this.textoBoton="Editar Registro",this.mensajeSatisfactorio="satisfactorio",this.cliente=new f.c,this.id=Number(this.ruta.snapshot.paramMap.get("id"))}ngOnInit(){this.listarTipoContrato(),this.listarTipoDocumento(),this.initForm(),this.listarPorId(this.id)}listarPorId(e){console.log(this.id),this.clientesService.listarPorId(e).subscribe(o=>{console.log(o),this.form.get("id").setValue(o.id),this.form.get("nombre").setValue(o.nombre),this.form.get("documento").setValue(o.documento),this.form.get("descripcion").setValue(o.descripcion),this.form.get("archivo").setValue(o.archivo),this.form.get("numeroContrato").setValue(o.numeroContrato),this.form.get("tipoContrato").setValue(o.tipoContrato.id),this.form.get("tipoDocumento").setValue(o.tipoDocumento.id)})}listarTipoContrato(){this.tipoContratoService.getTipoContrato().subscribe(e=>{this.lstTipoContrato=e})}listarTipoDocumento(){this.tipoDocumentoService.getTipoDocumento().subscribe(e=>{this.lstTipoDocumento=e})}initForm(){this.form=this.fb.group({id:new n.NI(""),nombre:new n.NI("",n.kI.required),documento:new n.NI("",n.kI.required),descripcion:new n.NI("",n.kI.required),numeroContrato:new n.NI("",n.kI.required),tipoContrato:new n.NI("",n.kI.required),tipoDocumento:new n.NI(0,n.kI.required),archivo:new n.NI("",n.kI.required)})}clickEnviar(){let s,e=new f.c,o=new h.A,r=new g.Q;e.id=this.form.get("id").value,e.nombre=this.form.get("nombre").value,e.documento=this.form.get("documento").value,e.descripcion=this.form.get("descripcion").value,e.numeroContrato=this.form.get("numeroContrato").value,o.id=this.form.get("tipoDocumento").value,e.tipoDocumento=o,r.id=this.form.get("tipoContrato").value,e.tipoContrato=r,s=this.files.find(c=>c.name),v().fire({title:"Est\xe1s seguro?",text:"No Podras Revertir!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, Actualizar!"}).then(c=>{c.isConfirmed&&null!=s?this.modificar(s,e):this.modificarSinArchivo(e)})}modificar(e,o){this.clientesService.modificar(o,e).subscribe(r=>{this.toastr.success(this.mensajeSatisfactorio),this.form.reset(),this.router.navigateByUrl("listado-cliente")},r=>this.mensajeError(r))}modificarSinArchivo(e){this.clientesService.modificarSinArchivo(e).subscribe(o=>{this.toastr.success(this.mensajeSatisfactorio),this.form.reset(),this.router.navigateByUrl("listado-cliente")},o=>this.mensajeError(o))}mensajeError(e){console.log(e),this.toastr.error("Ha Ocurrido un Problema")}onFileDropped(e){this.prepareFilesList(e)}fileBrowseHandler(e){this.prepareFilesList(e)}deleteFile(e){this.files.splice(e,1)}prepareFilesList(e){for(const o of e)this.files.push(o);this.fileDropEl.nativeElement.value=""}formatBytes(e,o=2){if(0===e)return"0 Bytes";const s=o<=0?0:o,m=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,m)).toFixed(s))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][m]}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x.d),t.Y36(Z.u),t.Y36(n.qu),t.Y36(M._W),t.Y36(_.Y),t.Y36(d.gz),t.Y36(d.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-editar-cliente"]],viewQuery:function(e,o){if(1&e&&t.Gf(b,5),2&e){let r;t.iGM(r=t.CRH())&&(o.fileDropEl=r.first)}},decls:48,vars:4,consts:[[1,"container-form"],[2,"text-align","center"],["onclick","location.href='listado-cliente';",1,"btn"],[1,"form",3,"formGroup"],[1,"align-center","d-flex","flex-column"],["for","name",1,"text-gray"],["type","text","name","name","required","","formControlName","nombre"],["for","documento",1,"text-gray"],["type","text","name","documento","required","","formControlName","documento"],["for","tipoDocumento",1,"text-gray"],["name","tipoDocumento","id","tipoDocumento-select","formControlName","tipoDocumento"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[1,"contrato"],[1,"inputs"],["for","tipoContrato",1,"text-gray"],["name","tipoContrato","id","tipoContrato-select","formControlName","tipoContrato"],["for","contrato",1,"text-gray"],["type","text","name","contrato","required","","formControlName","numeroContrato"],["for","descripcion",1,"text-gray"],["type","text","name","descripcion","cols","40","rows","5","required","","formControlName","descripcion",1,"h-coment"],["for","clientes",1,"text-gray"],["appDnd","",1,"dropzone","align-items-center","fileover",3,"fileDropped"],["type","file","id","fileDropRef","multiple","",3,"change"],["fileDropRef",""],["for","fileDropRef"],[1,"files-list"],["class","single-file",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-form",3,"click"],[3,"value"],[1,"single-file"],["src","assets/imgs/ic-file.svg","width","45px","alt","file"],[1,"info"],[1,"name"],[1,"size"],["src","assets/imgs/ic-delete-file.svg","width","20px","alt","file",1,"delete",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"ACTUALIZAR CLIENTE"),t.qZA(),t.TgZ(3,"div",1)(4,"button",2),t._uU(5," Listado de Clientes "),t.qZA()(),t.TgZ(6,"form",3)(7,"div",4)(8,"label",5),t._uU(9,"Nombre"),t.qZA(),t._UZ(10,"input",6),t.TgZ(11,"label",7),t._uU(12,"Documento"),t.qZA(),t._UZ(13,"input",8),t.TgZ(14,"label",9),t._uU(15,"Tipo de Documento"),t.qZA(),t.TgZ(16,"select",10)(17,"option",11),t._uU(18,"--Seleccione un tipo de documento--"),t.qZA(),t.YNc(19,T,2,2,"option",12),t.qZA(),t.TgZ(20,"div",13)(21,"div",14)(22,"label",15),t._uU(23,"Tipo de Contrato"),t.qZA(),t.TgZ(24,"select",16)(25,"option",11),t._uU(26,"--Seleccione un tipo de Contrato--"),t.qZA(),t.YNc(27,O,2,2,"option",12),t.qZA()(),t.TgZ(28,"div",14)(29,"label",17),t._uU(30,"No. Contrato"),t.qZA(),t._UZ(31,"input",18),t.qZA()(),t.TgZ(32,"label",19),t._uU(33,"Descripcion"),t.qZA(),t._UZ(34,"textarea",20),t.TgZ(35,"label",21),t._uU(36,"Subir Contrato"),t.qZA(),t.TgZ(37,"div",22),t.NdJ("fileDropped",function(s){return o.onFileDropped(s)}),t.TgZ(38,"input",23,24),t.NdJ("change",function(s){return o.fileBrowseHandler(s.target.files)}),t.qZA(),t.TgZ(40,"h3"),t._uU(41,"Drag and drop file Here to Upload"),t.qZA(),t.TgZ(42,"label",25),t._uU(43,"Or Select Files to Upload"),t.qZA()(),t.TgZ(44,"div",26),t.YNc(45,P,8,2,"div",27),t.qZA(),t.TgZ(46,"button",28),t.NdJ("click",function(){return o.clickEnviar()}),t._uU(47," Actualizar Cliente "),t.qZA()()()()),2&e&&(t.xp6(6),t.Q6J("formGroup",o.form),t.xp6(13),t.Q6J("ngForOf",o.lstTipoDocumento),t.xp6(8),t.Q6J("ngForOf",o.lstTipoContrato),t.xp6(18),t.Q6J("ngForOf",o.files))},dependencies:[p.sg,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.Q7,n.sg,n.u],styles:["*[_ngcontent-%COMP%]{font-family:Arial Narrow,Arial,sans-serif}h1[_ngcontent-%COMP%]{text-align:center}.align-center[_ngcontent-%COMP%]{display:flex;justify-content:center}.text-gray[_ngcontent-%COMP%]{color:#868789}.container-form[_ngcontent-%COMP%]{padding:2rem 0;width:70%;margin:auto}.btn[_ngcontent-%COMP%]{background-color:#fe8910;color:#fff;padding:5px;border:none;width:65%;margin:.6rem 0 1rem;justify-content:center;border-radius:15px}.btn[_ngcontent-%COMP%]:hover{color:#f7f7f7;background-color:#868789}.btn-form[_ngcontent-%COMP%]{width:100%;padding:1rem}.form[_ngcontent-%COMP%]{width:65%;margin:0 auto}.contrato[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{color:#1a1a1a;width:100%;background-color:#66666640;border:none;padding:.6rem;margin-bottom:1rem;border-radius:15px}.form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{color:#868789;padding:1rem;text-align:center;border-radius:15px}.form[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]{width:48%}.dropzone[_ngcontent-%COMP%]{width:100%;height:100%;padding:4rem;text-align:center;border:dashed 5px #868789;position:relative;margin:0 auto}.dropzone[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0}.dropzone[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#f7f7f7;width:90%;background-color:#fe8910;padding:0 16px;border-radius:15px}.dropzone[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:#868789}.fileover[_ngcontent-%COMP%]{animation:shake 1s;animation-iteration-count:infinite}.files-list[_ngcontent-%COMP%]{margin-top:1.5rem;display:flex;flex-grow:1}.single-file[_ngcontent-%COMP%]{display:flex;padding:.5rem;justify-content:space-between;align-items:center;border:dashed 1px #979797;margin-bottom:1rem}img.delete[_ngcontent-%COMP%]{margin-left:.5rem;cursor:pointer;align-self:flex-end}.name[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#353f4a;margin:0}.size[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#a4a4a4;margin:0;margin-bottom:.25rem}.info[_ngcontent-%COMP%]{width:100%}@media (max-width:767px){.container-form[_ngcontent-%COMP%]{width:100%}.form[_ngcontent-%COMP%]{width:90%}.contrato[_ngcontent-%COMP%]{flex-direction:column}.form[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]{width:100%}}@media (max-width:1023px){.container-form[_ngcontent-%COMP%]{width:100%}.form[_ngcontent-%COMP%]{width:90%}}"]}),i})()}];let A=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.Bz.forChild(w),d.Bz]}),i})(),y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.ez,A,n.u5,n.UX]}),i})()}}]);