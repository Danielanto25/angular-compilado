"use strict";(self.webpackChunkAbogadosFront=self.webpackChunkAbogadosFront||[]).push([[317],{1317:(L,m,a)=>{a.r(m),a.d(m,{ListarBibliotecaModule:()=>x});var p=a(6895),b=a(3599),h=a(5508),f=a(5226),C=a.n(f),t=a(8256),_=a(8651),l=a(433),O=a(8718),M=a(7185),d=a(3968);function P(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,r=t.oxw();return t.KtG(r.eliminar(i.id))}),t._UZ(1,"img",24),t.qZA()}}const T=function(n){return["/editar-bibliotecas",n]};function B(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td",15),t._uU(2),t.qZA(),t.TgZ(3,"td",15),t._uU(4),t.qZA(),t.TgZ(5,"td",16)(6,"a")(7,"button",17),t.NdJ("click",function(){const r=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.clickEvent(r.id,r.archivo))}),t._UZ(8,"img",18),t.qZA()()(),t.TgZ(9,"td",19),t.YNc(10,P,2,0,"button",20),t.TgZ(11,"button",21),t._UZ(12,"img",22),t.qZA()()()}if(2&n){const e=c.$implicit,o=t.oxw();t.xp6(2),t.hij(" ",e.cliente.nombre," "),t.xp6(2),t.hij(" ",e.nombreArchivo," "),t.xp6(6),t.Q6J("ngIf",o.superAdmin),t.xp6(1),t.Q6J("routerLink",t.VKq(4,T,e.id))}}const Z=[{path:"",component:(()=>{class n{constructor(e,o,i,r){this.bibliotecaService=e,this.fb=o,this.logicaGuard=i,this.toastr=r,this.superAdmin=this.logicaGuard.permisoValido([h.r.superAdmin]),this.mensajeSatisfactorio="Satisfactorio",this.editar=!1,this.textoBoton="Editar Registro",this.page=1,this.pageSize=10,this.bibliotecaDocumentos=[],this.BIBLIOTECADOCUMENTOS=[],this.collectionSize=this.bibliotecaDocumentos.length,this.refreshDocuments()}ngOnInit(){this.listar()}refreshDocuments(){this.bibliotecaDocumentos=this.BIBLIOTECADOCUMENTOS.map((e,o)=>({id:o+1,...e})).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize)}listar(){this.bibliotecaService.getBibliotecaDocumento().subscribe(e=>{this.bibliotecaDocumentos=e,this.BIBLIOTECADOCUMENTOS=e,this.collectionSize=this.bibliotecaDocumentos.length})}eliminar(e){C().fire({title:"Est\xe1s seguro?",text:"No Podras Revertir!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, Eliminar!"}).then(o=>{o.isConfirmed&&this.bibliotecaService.eliminar(e).subscribe(i=>{this.toastr.success(this.mensajeSatisfactorio),this.listar()},i=>this.mensajeError(i))})}mensajeError(e){console.log(e),this.toastr.error("Ha Ocurrido un Problema")}clickEvent(e,o){const i=o.toLowerCase().split(".");this.bibliotecaService.getPDF(e).subscribe(r=>{if("pdf"===i[i.length-1]){let g=new Blob([r],{type:"application/pdf"});console.log(g);var s=URL.createObjectURL(g);window.open(s)}else{let g=new Blob([r],{type:"octet/stream"});s=URL.createObjectURL(g);var u=document.createElement("a");u.download=o,u.href=s,u.click()}})}filtrar(e){const o=e.target.value;""==o?this.listar():this.bibliotecaService.listarPorCliente(o).subscribe(i=>{this.bibliotecaDocumentos=i,this.BIBLIOTECADOCUMENTOS=i,this.collectionSize=this.bibliotecaDocumentos.length})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_.O),t.Y36(l.qu),t.Y36(O.b),t.Y36(M._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-listar-biblioteca"]],decls:38,vars:10,consts:[[1,"container-table"],[1,"d-flex","justify-content-between","title-button"],["onclick","location.href='registrar-biblioteca';",1,"btn"],[1,"mb-3","row","d-flex","justify-content-center"],[1,"col-sm-auto","search","align-self-end"],["id","table-complete-search","type","text","name","searchTerm","placeholder","Consultar Nombre del Cliente",1,"form-control",3,"keyup"],[1,"table","table-striped"],["scope","col"],["scope","col",1,"width-1"],[4,"ngFor","ngForOf"],["colspan","4"],[1,"d-flex","justify-content-end","p-2"],[1,"form-select",2,"width","auto",3,"ngModel","ngModelChange"],[3,"ngValue"],[1,"pagination",3,"collectionSize","page","pageSize","pageChange"],[1,"p-3"],[1,"width-1"],[1,"button-list","p-2",3,"click"],["src","../../../../../assets/imgs/iconFile.png","alt","",1,"img-list"],[1,"d-flex","p-3"],["class","button-list",3,"click",4,"ngIf"],[1,"button-list",3,"routerLink"],["src","../../../../../assets/imgs/lapiz.png","alt","",1,"img-list"],[1,"button-list",3,"click"],["src","../../../../../assets/imgs/papelera.png","alt","",1,"img-list"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"LISTADO DOCUMENTOS"),t.qZA(),t.TgZ(4,"button",2),t._uU(5," Subir Documento "),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"input",5),t.NdJ("keyup",function(r){return o.filtrar(r)}),t.qZA()()(),t.TgZ(9,"table",6)(10,"thead")(11,"tr")(12,"th",7),t._uU(13,"NOMBRE CLIENTE"),t.qZA(),t.TgZ(14,"th",7),t._uU(15,"NOMBRE DEL ARCHIVO"),t.qZA(),t.TgZ(16,"th",7),t._uU(17,"ARCHIVO"),t.qZA(),t.TgZ(18,"th",8),t._uU(19,"ACCIONES"),t.qZA()()(),t.TgZ(20,"tbody"),t.YNc(21,B,13,6,"tr",9),t.qZA(),t.TgZ(22,"tfoot")(23,"tr")(24,"td",10)(25,"div",11)(26,"select",12),t.NdJ("ngModelChange",function(r){return o.pageSize=r})("ngModelChange",function(){return o.refreshDocuments()}),t.TgZ(27,"option",13),t._uU(28,"2 items for page"),t.qZA(),t.TgZ(29,"option",13),t._uU(30,"4 items for page"),t.qZA(),t.TgZ(31,"option",13),t._uU(32,"6 items for page"),t.qZA(),t.TgZ(33,"option",13),t._uU(34,"8 items for page"),t.qZA(),t.TgZ(35,"option",13),t._uU(36,"10 items for page"),t.qZA()(),t.TgZ(37,"ngb-pagination",14),t.NdJ("pageChange",function(r){return o.page=r})("pageChange",function(){return o.refreshDocuments()}),t.qZA()()()()()()()),2&e&&(t.xp6(21),t.Q6J("ngForOf",o.bibliotecaDocumentos),t.xp6(5),t.Q6J("ngModel",o.pageSize),t.xp6(1),t.Q6J("ngValue",2),t.xp6(2),t.Q6J("ngValue",4),t.xp6(2),t.Q6J("ngValue",6),t.xp6(2),t.Q6J("ngValue",8),t.xp6(2),t.Q6J("ngValue",10),t.xp6(2),t.Q6J("collectionSize",o.collectionSize)("page",o.page)("pageSize",o.pageSize))},dependencies:[p.sg,p.O5,b.rH,d.N9,l.YN,l.Kr,l.EJ,l.JJ,l.On],styles:["*[_ngcontent-%COMP%]{font-family:Arial Narrow,Arial,sans-serif;--bs-table-accent-bg:0}h1[_ngcontent-%COMP%]{text-align:center}.btn[_ngcontent-%COMP%]{background-color:#fe8910;color:#fff;padding:5px;border:none;width:50%;margin:.6rem 0 1.5rem;justify-content:center;border-radius:15px}.btn[_ngcontent-%COMP%]:hover{color:#f7f7f7;background-color:#868789}.container-table[_ngcontent-%COMP%]{padding:2rem 0;width:60%;margin:auto}th[_ngcontent-%COMP%]{background-color:#fe8910;color:#fff;font-weight:400}.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd){background-color:transparent!important}.table-striped[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:nth-of-type(odd) > *[_ngcontent-%COMP%]{--bs-table-accent-bg: transparent!important}.page-link[_ngcontent-%COMP%]{background-color:transparent!important}table.table[_ngcontent-%COMP%]{background-color:#66666640;width:100%;text-align:center}ngb-pagination[_ngcontent-%COMP%]     .page-item.disabled   .page-link{color:#6c757d;cursor:pointer;background-color:transparent;border-color:transparent}ngb-pagination[_ngcontent-%COMP%]     .page-item   .page-link{color:#6c757d;cursor:pointer;background-color:transparent;border-color:transparent}ngb-pagination[_ngcontent-%COMP%]     .page-item.active   .page-link{border-radius:50%;background-color:#f7f7f7;color:#6c757d;border:none}.width-1[_ngcontent-%COMP%]{width:10%}.rol-box[_ngcontent-%COMP%]{color:#f7f7f7;background-color:#868789;border-radius:15px}table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:0px solid;padding-right:2rem}.form-select[_ngcontent-%COMP%]{background-color:#6660;border:none;color:#868789}.button-list[_ngcontent-%COMP%]{border:none;background:none}.img-list[_ngcontent-%COMP%]{filter:brightness(0) saturate(100%) invert(49%) sepia(98%) saturate(731%) hue-rotate(352deg) brightness(103%) contrast(99%)}.img-list[_ngcontent-%COMP%]{width:2rem}.pagination[_ngcontent-%COMP%]{padding-top:1rem}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#1a1a1a;width:20rem;background-color:#f7f7f7;border:2px solid #868789;padding:.6rem;margin-bottom:1rem;border-radius:15px}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{text-align:center}@media (max-width: 767px){.container-table[_ngcontent-%COMP%]{width:90%}.title-button[_ngcontent-%COMP%]{flex-direction:column}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:auto}.btn[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width: 500px){table[_ngcontent-%COMP%]{display:block;overflow-x:auto}}"]}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[b.Bz.forChild(Z),b.Bz]}),n})(),x=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,A,d.jF,d._A,l.u5]}),n})()}}]);