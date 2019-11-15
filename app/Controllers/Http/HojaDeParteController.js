'use strict'
const Hoja= use('App/Models/HojaDeParte')
const Mecanico= use('App/Models/MecanicoResponsable')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with hojadepartes
 */
class HojaDeParteController {
  /**
   * Show a list of all hojadepartes.
   * GET hojadepartes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const hojas = await Hoja.query().with('mecanico').fetch();
    return view.render('hoja.index',{hojas:hojas.toJSON()});
  }

  /**
   * Render a form to be used for creating a new hojadeparte.
   * GET hojadepartes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let mecanicos = await Mecanico.all();
      return view.render('hoja.create',{mecanicos:mecanicos.toJSON()});
  }

  /**
   * Create/save a new hojadeparte.
   * POST hojadepartes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Hoja.create(request.all());
    return response.redirect('/hoja')
  }

  /**
   * Display a single hojadeparte.
   * GET hojadepartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let hoja = await Hoja.find(params.id);
    return response.json(hoja);
  }

  /**
   * Render a form to update an existing hojadeparte.
   * GET hojadepartes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let hoja =await Hoja.find(params.id);
    let mecanicos = await Mecanico.all();
    return view.render('hoja.edit',{hoja:hoja.toJSON(),mecanicos:mecanicos.toJSON()});
  }

  /**
   * Update hojadeparte details.
   * PUT or PATCH hojadepartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let hoja =await Hoja.find(params.id);
    hoja.merge(request.all());
    await hoja.save();
    return response.redirect('/hoja')
  }

  /**
   * Delete a hojadeparte with id.
   * DELETE hojadepartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let hoja =await Hoja.find(params.id);
    hoja.delete();
    return response.redirect('/hoja')
  }
}

module.exports = HojaDeParteController
