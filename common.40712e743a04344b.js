"use strict";(self.webpackChunkAbogadosFront=self.webpackChunkAbogadosFront||[]).push([[592],{2094:(a,o,e)=>{e.d(o,{y:()=>n});class n{}},642:(a,o,e)=>{e.d(o,{G:()=>n});class n{}},797:(a,o,e)=>{e.d(o,{c:()=>n});class n{}},8354:(a,o,e)=>{e.d(o,{M:()=>n});class n{}},1597:(a,o,e)=>{e.d(o,{j:()=>n});class n{}},6563:(a,o,e)=>{e.d(o,{F:()=>n});class n{}},9764:(a,o,e)=>{e.d(o,{r:()=>n});class n{}},2601:(a,o,e)=>{e.d(o,{s:()=>n});class n{}},1353:(a,o,e)=>{e.d(o,{G:()=>n});class n{}},7052:(a,o,e)=>{e.d(o,{c:()=>n});class n{}},3515:(a,o,e)=>{e.d(o,{S:()=>n});class n{}},6026:(a,o,e)=>{e.d(o,{s:()=>n});class n{}},5218:(a,o,e)=>{e.d(o,{L:()=>n});class n{}},4688:(a,o,e)=>{e.d(o,{X:()=>n});class n{}},9644:(a,o,e)=>{e.d(o,{Q:()=>n});class n{}},3696:(a,o,e)=>{e.d(o,{A:()=>n});class n{}},9472:(a,o,e)=>{e.d(o,{B:()=>n});class n{}},7524:(a,o,e)=>{e.d(o,{w:()=>n});class n{}},5156:(a,o,e)=>{e.d(o,{H:()=>n});class n{}},2468:(a,o,e)=>{e.d(o,{T:()=>_});var n=e(2340),s=e(8256),i=e(529);let _=(()=>{class r{constructor(t){this.http=t,this.URL=`${n.N.apiUrl}/agendar-tarea`}getTareaEstado(){return this.http.get(`${this.URL}`)}getTareaDto(){return this.http.get(`${this.URL}/dto`)}getTareaEstadoUser(t){return this.http.get(`${this.URL}/listarUser/${t}`)}listarPorId(t){return this.http.get(`${this.URL}/${t}`)}listarPorFechaInicio(t){return this.http.get(`${this.URL}/fechaInicio/${t}`)}listarPorFechaFin(t){return console.log(t),this.http.get(`${this.URL}/fechaFin/${t}`)}listarPorProceso(t){return this.http.get(`${this.URL}/proceso/${t}`)}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(i.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},8651:(a,o,e)=>{e.d(o,{O:()=>_});var n=e(2340),s=e(8256),i=e(529);let _=(()=>{class r{constructor(t){this.http=t,this.URL=`${n.N.apiUrl}/biblioteca-documento`}getBibliotecaDocumento(){return this.http.get(this.URL)}listarClienteId(t){return this.http.get(`${this.URL}/${t}`)}listarPorCliente(t){return this.http.get(`${this.URL}/cliente/${t}`)}crear(t,h){let u=new FormData;return u.set("json",JSON.stringify(t)),u.set("archivoLlegada",h),this.http.post(`${this.URL}`,u)}eliminar(t){return this.http.delete(`${this.URL}/${t}`)}modificar(t,h){let u=new FormData;return u.set("json",JSON.stringify(t)),u.set("archivoLlegada",h),this.http.put(this.URL,u)}modificarSinArchivo(t){let h=new FormData;return h.set("json",JSON.stringify(t)),this.http.put(`${this.URL}/null`,h)}getPDF(t){return this.http.get(`${this.URL}/archivo/${t}`,{responseType:"blob"})}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(i.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},6940:(a,o,e)=>{e.d(o,{Y:()=>_});var n=e(2340),s=e(8256),i=e(529);let _=(()=>{class r{constructor(t){this.http=t,this.URL=`${n.N.apiUrl}/cliente`}getCliente(){return this.http.get(this.URL)}crear(t,h){let u=new FormData;return u.set("json",JSON.stringify(t)),u.set("archivoLlegada",h),this.http.post(`${this.URL}`,u)}listarPorId(t){return this.http.get(`${this.URL}/${t}`)}listarPorCliente(t){return this.http.get(`${this.URL}/cliente/${t}`)}listarCliente(){return this.http.get(this.URL)}eliminar(t){return this.http.delete(`${this.URL}/${t}`)}modificar(t,h){let u=new FormData;return u.set("json",JSON.stringify(t)),u.set("archivoLlegada",h),this.http.put(this.URL,u)}modificarSinArchivo(t){let h=new FormData;return h.set("json",JSON.stringify(t)),this.http.put(`${this.URL}/null`,h)}getPDF(t){return this.http.get(`${this.URL}/archivo/${t}`,{responseType:"blob"})}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(i.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},2333:(a,o,e)=>{e.d(o,{K:()=>_});var n=e(2340),s=e(8256),i=e(529);let _=(()=>{class r{constructor(t){this.http=t,this.URL=`${n.N.apiUrl}/estado-proceso`}getEstado(){return this.http.get(this.URL)}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(i.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},393:(a,o,e)=>{e.d(o,{J:()=>_});var n=e(2340),s=e(8256),i=e(529);let _=(()=>{class r{constructor(t){this.http=t,this.URL=`${n.N.apiUrl}/estado-tarea`}getEstado(){return this.http.get(this.URL)}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(i.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},3952:(a,o,e)=>{e.d(o,{s:()=>_});var n=e(2340),s=e(8256),i=e(529);let _=(()=>{class r{constructor(t){this.http=t,this.URL=`${n.N.apiUrl}/estado`}getEstado(){return this.http.get(this.URL)}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(i.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},936:(a,o,e)=>{e.d(o,{o:()=>_});var n=e(2340),s=e(8256),i=e(529);let _=(()=>{class r{constructor(t){this.http=t,this.URL=`${n.N.apiUrl}/responsable`}getProceso(){return this.http.get(this.URL)}crear(t){return this.http.post(`${this.URL}`,t)}listarPorId(t){return this.http.get(`${this.URL}/${t}`)}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(i.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},8081:(a,o,e)=>{e.d(o,{m:()=>_});var n=e(2340),s=e(8256),i=e(529);let _=(()=>{class r{constructor(t){this.http=t,this.URL=`${n.N.apiUrl}/rol`}getRol(){return this.http.get(this.URL)}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(i.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},7191:(a,o,e)=>{e.d(o,{D:()=>_});var n=e(2340),s=e(8256),i=e(529);let _=(()=>{class r{constructor(t){this.http=t,this.URL=`${n.N.apiUrl}/tarea`}getTarea(){return this.http.get(this.URL)}crear(t,h,u){let l=new FormData;return l.set("json",JSON.stringify(t)),l.set("archivoLlegada",h),l.set("responsable",JSON.stringify(u)),this.http.post(`${this.URL}`,l)}crearVarios(t,h,u){let l=new FormData;return l.set("json",JSON.stringify(t)),l.set("archivoLlegada",h),l.set("responsable",JSON.stringify(u)),this.http.post(`${this.URL}/varios`,l)}pasarReporte(t,h){let u=new FormData;return u.set("idReporte",JSON.stringify(h)),this.http.put(`${this.URL}/${t}`,u)}modificar(t,h){let u=new FormData;return u.set("json",JSON.stringify(t)),u.set("archivoLlegada",h),this.http.put(`${this.URL}`,u)}modificarSinArchivo(t){let h=new FormData;return h.set("json",JSON.stringify(t)),this.http.put(`${this.URL}/null`,h)}getPDF(t){return this.http.get(`${this.URL}/archivo/${t}`,{responseType:"blob"})}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(i.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},1227:(a,o,e)=>{e.d(o,{u:()=>_});var n=e(2340),s=e(8256),i=e(529);let _=(()=>{class r{constructor(t){this.http=t,this.URL=`${n.N.apiUrl}/tipo-contrato`}getTipoContrato(){return this.http.get(this.URL)}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(i.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},9799:(a,o,e)=>{e.d(o,{d:()=>_});var n=e(2340),s=e(8256),i=e(529);let _=(()=>{class r{constructor(t){this.http=t,this.URL=`${n.N.apiUrl}/tipo-documento`}getTipoDocumento(){return this.http.get(this.URL)}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(i.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},6874:(a,o,e)=>{e.d(o,{s:()=>_});var n=e(2340),s=e(8256),i=e(529);let _=(()=>{class r{constructor(t){this.http=t,this.URL=`${n.N.apiUrl}/tipo-proceso`}getTipoProceso(){return this.http.get(this.URL)}crear(t){return this.http.post(`${this.URL}`,t)}eliminar(t){return this.http.delete(`${this.URL}/${t}`)}modificar(t){return this.http.put(this.URL,t)}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(i.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},5841:(a,o,e)=>{e.d(o,{$:()=>_});var n=e(2340),s=e(8256),i=e(529);let _=(()=>{class r{constructor(t){this.http=t,this.URL=`${n.N.apiUrl}/tipo-tarea`}getTipoTarea(){return this.http.get(this.URL)}crear(t){return this.http.post(`${this.URL}`,t)}eliminar(t){return this.http.delete(`${this.URL}/${t}`)}modificar(t){return this.http.put(this.URL,t)}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(i.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},7597:(a,o,e)=>{e.d(o,{U:()=>_});var n=e(2340),s=e(8256),i=e(529);let _=(()=>{class r{constructor(t){this.http=t,this.URL=`${n.N.apiUrl}/usuario-rol`}getUsuarioRol(){return this.http.get(this.URL)}eliminar(t){return this.http.delete(`${this.URL}/${t}`)}listarPorId(t){return this.http.get(`${this.URL}/${t}`)}modificar(t){return this.http.put(this.URL,t)}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(i.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},4618:(a,o,e)=>{function n(s){return i=>s.test(i.value)?{forbiddenName:{value:i.value}}:null}e.d(o,{o:()=>n})}}]);