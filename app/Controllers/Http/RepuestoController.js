'use strict'
const Repuesto= use('App/Models/Repuesto')
const Hoja= use('App/Models/HojaDeParte')
const Mecanico= use('App/Models/MecanicoResponsable')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with repuestos
 */
class RepuestoController {
  /**
   * Show a list of all repuestos.
   * GET repuestos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const repuestos = await Repuesto.query().with('hoja').with('mecanico').fetch();
    return view.render('repuesto.index',{repuestos:repuestos.toJSON()});
  }

  /**
   * Render a form to be used for creating a new repuesto.
   * GET repuestos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let hojas = await Hoja.all();
    let mecanicos= await Mecanico.all();
    
      return view.render('repuesto.create',{hojas:hojas.toJSON(),mecanicos:mecanicos.toJSON()});
  }

  /**
   * Create/save a new repuesto.
   * POST repuestos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Repuesto.create(request.all());
    return response.redirect('/repuesto')
  }

  /**
   * Display a single repuesto.
   * GET repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing repuesto.
   * GET repuestos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let repuesto =await Repuesto.find(params.id);
    let hojas = await Hoja.all();
    return view.render('repuesto.edit',{repuesto:repuesto.toJSON(),hojas:hojas.toJSON()});
  }

  /**
   * Update repuesto details.
   * PUT or PATCH repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let repuesto = await Repuesto.find(params.id);
    
    repuesto.merge(request.all());
    await repuesto.save();
    return response.redirect('/repuesto')
  }

  /**
   * Delete a repuesto with id.
   * DELETE repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let repuesto =await Repuesto.find(params.id);
    repuesto.delete();
    return response.redirect('/repuesto');
  }
}

module.exports = RepuestoController
