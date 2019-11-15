'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vehiculo extends Model {
    cliente(){
        return this.belongsTo('App/Models/Cliente','cliente_RFC');
    }
    mecanicos(){
        return this.belongsToMany('App/Models/MecanicoResponsable').pivotTable('mecanicos_vehiculos');
    }
}

module.exports = Vehiculo
