'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class HojaDeParte extends Model {
    mecanico(){
        return this.belongsTo('App/Models/MecanicoResponsable','idMecanicoResponsable');
        
    }
}

module.exports = HojaDeParte
