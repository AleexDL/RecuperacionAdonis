'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MecanicosVehiculoSchema extends Schema {
  up () {
    this.create('mecanicos_vehiculos', (table) => {
      table.increments()
      table.timestamps()
      table.integer('mecanico_id').unsigned().references('id').inTable('mecanico_responsables').onDelete('cascade');
      table.integer('vehiculo_id').unsigned().references('id').inTable('vehiculos').onDelete('cascade');
    })
  }

  down () {
    this.drop('mecanicos_vehiculos')
  }
}

module.exports = MecanicosVehiculoSchema
