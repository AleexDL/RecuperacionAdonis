'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')





Route.get('cliente/crear','ClienteController.create');
Route.post('cliente/store','ClienteController.store');
Route.get('cliente','ClienteController.index');
Route.get('cliente/eliminar/:id','ClienteController.destroy');
Route.get('cliente/editar/:id','ClienteController.edit');
Route.post('cliente/editar/:id','ClienteController.update');
Route.get('cliente/mostrar/:id','ClienteController.show');

Route.get('vehiculo/crear','VehiculoController.create');
Route.post('vehiculo/store','VehiculoController.store');
Route.get('vehiculo','VehiculoController.index');
Route.get('vehiculo/eliminar/:id','VehiculoController.destroy');
Route.get('vehiculo/editar/:id','VehiculoController.edit');
Route.post('vehiculo/editar/:id','VehiculoController.update');
Route.get('vehiculo/mostrar/:id','VehiculoController.show');

Route.get('mecanico/crear','MecanicoResponsableController.create');
Route.post('mecanico/store','MecanicoResponsableController.store');
Route.get('mecanico','MecanicoResponsableController.index');
Route.get('mecanico/eliminar/:id','MecanicoResponsableController.destroy');
Route.get('mecanico/editar/:id','MecanicoResponsableController.edit');
Route.post('mecanico/editar/:id','MecanicoResponsableController.update');
Route.get('mecanico/mostrar/:id','MecanicoResponsableController.show');


Route.get('hoja/crear','HojaDeParteController.create');
Route.post('hoja/store','HojaDeParteController.store');
Route.get('hoja','HojaDeParteController.index');
Route.get('hoja/eliminar/:id','HojaDeParteController.destroy');
Route.get('hoja/editar/:id','HojaDeParteController.edit');
Route.post('hoja/editar/:id','HojaDeParteController.update');
Route.get('hoja/mostrar/:id','HojaDeParteController.show');

Route.get('repuesto/crear','RepuestoController.create');
Route.post('repuesto/store','RepuestoController.store');
Route.get('repuesto','RepuestoController.index');
Route.get('repuesto/eliminar/:id','RepuestoController.destroy');
Route.get('repuesto/editar/:id','RepuestoController.edit');
Route.post('repuesto/editar/:id','RepuestoController.update');
Route.get('repuesto/mostrar/:id','RepuestoController.show');

Route.get('factura/crear','FacturaController.create');
Route.post('factura/store','FacturaController.store');
Route.get('factura','FacturaController.index');
Route.get('factura/eliminar/:id','FacturaController.destroy');
Route.get('factura/editar/:id','FacturaController.edit');
Route.post('factura/editar/:id','FacturaController.update');
Route.get('factura/mostrar/:id','FacturaController.show');

Route.get('registro/crear','MecanicosVehiculoController.create');
Route.post('registro/store','MecanicosVehiculoController.store');
Route.get('registro','MecanicosVehiculoController.index');
Route.get('registro/eliminar/:id','MecanicosVehiculoController.destroy');
Route.get('registro/editar/:id','MecanicosVehiculoController.edit');
Route.post('registro/editar/:id','MecanicosVehiculoController.update');
Route.get('registro/mostrar/:id','MecanicosVehiculoController.show');