'use strict'
const Mecanico= use('App/Models/MecanicoResponsable');
const Vehiculo= use('App/Models/Vehiculo');
const Registro= use('App/Models/MecanicosVehiculo')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with mecanicosvehiculos
 */
class MecanicosVehiculoController {
  /**
   * Show a list of all mecanicosvehiculos.
   * GET mecanicosvehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const registros = await Registro.query().with('mecanico').with('vehiculo').fetch();
    return view.render('registro.index',{registros:registros.toJSON()});
  }

  /**
   * Render a form to be used for creating a new mecanicosvehiculo.
   * GET mecanicosvehiculos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let mecanicos = await Mecanico.all();
    let vehiculos = await Vehiculo.all();  
    return view.render('registro.create',{vehiculos:vehiculos.toJSON(),mecanicos:mecanicos.toJSON()});
  }

  /**
   * Create/save a new mecanicosvehiculo.
   * POST mecanicosvehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Registro.create(request.all());
    return response.redirect('/registro')
  }

  /**
   * Display a single mecanicosvehiculo.
   * GET mecanicosvehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing mecanicosvehiculo.
   * GET mecanicosvehiculos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let registro =await Registro.find(params.id);
    let mecanicos = await Mecanico.all();
    let vehiculos = await Vehiculo.all(); 
    return view.render('registro.edit',{registro:registro.toJSON(),mecanicos:mecanicos.toJSON(),vehiculos:vehiculos.toJSON()});
  }

  /**
   * Update mecanicosvehiculo details.
   * PUT or PATCH mecanicosvehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let registro =await Registro.find(params.id);
    registro.merge(request.all());
    await registro.save();
    return response.redirect('/registro')
  }

  /**
   * Delete a mecanicosvehiculo with id.
   * DELETE mecanicosvehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let registro =await Registro.find(params.id);
    registro.delete();
    return response.redirect('/registro')
  }
}

module.exports = MecanicosVehiculoController

