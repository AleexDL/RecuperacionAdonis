'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HojaDeParteSchema extends Schema {
  up () {
    this.create('hoja_de_partes', (table) => {
      table.increments()
      table.timestamps()
      table.string('idHoja').notNullable();
      table.string('concepto').notNullable();
      table.integer('cantidad').notNullable();
      table.string('reparacion').notNullable();
      table.integer('idMecanicoResponsable').unsigned().references('id').inTable('mecanico_responsables').onDelete('cascade');
    })
  }

  down () {
    this.drop('hoja_de_partes')
  }
}

module.exports = HojaDeParteSchema
