'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Factura extends Model {
    hoja(){
        return this.belongsTo('App/Models/HojaDeParte','idHoja');
        
    }
}

module.exports = Factura
