'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MecanicoResponsable extends Model {
    hoja(){
        return this.hasMany('App/Models/HojaDeParte');
    }
    vehiculos(){
        return this.belongsToMany('App/Models/Vehiculo').pivotTable('mecanicos_vehiculos');
    }
}

module.exports = MecanicoResponsable
