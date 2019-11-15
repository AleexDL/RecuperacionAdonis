'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Repuesto extends Model {
    hoja(){
        return this.belongsTo('App/Models/HojaDeParte','HojaDeParte');
    }
    mecanico(){
        return this.belongsTo('App/Models/MecanicoResponsable','HojaDeParteMecanicoResponsable');
    }
}

module.exports = Repuesto
