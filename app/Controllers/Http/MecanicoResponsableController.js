'use strict'

const Mecanico = use('App/Models/MecanicoResponsable');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with mecanicoresponsables
 */
class MecanicoResponsableController {
  /**
   * Show a list of all mecanicoresponsables.
   * GET mecanicoresponsables
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let mecanicos= await Mecanico.all();
    return view.render('mecanico.index',{mecanicos:mecanicos.toJSON()});
  }


  /**
   * Render a form to be used for creating a new mecanicoresponsable.
   * GET mecanicoresponsables/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
      return view.render('mecanico.create');
      
     
  }

  /**
   * Create/save a new mecanicoresponsable.
   * POST mecanicoresponsables
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Mecanico.create(request.all());
    return response.redirect('/mecanico');
  }

  /**
   * Display a single mecanicoresponsable.
   * GET mecanicoresponsables/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing mecanicoresponsable.
   * GET mecanicoresponsables/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    
    
    let mecanico =await Mecanico.find(params.id);
    return view.render('mecanico.edit', {mecanico:mecanico});
    
  }

  /**
   * Update mecanicoresponsable details.
   * PUT or PATCH mecanicoresponsables/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let mecanico =await Mecanico.find(params.id);
    mecanico.merge(request.all());
    await mecanico.save();
    return response.redirect('/mecanico')
  }

  /**
   * Delete a mecanicoresponsable with id.
   * DELETE mecanicoresponsables/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let mecanico =await Mecanico.find(params.id);
    mecanico.delete();
    return response.redirect('/mecanico')
  }
}

module.exports = MecanicoResponsableController
