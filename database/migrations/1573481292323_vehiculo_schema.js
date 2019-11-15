'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VehiculoSchema extends Schema {
  up () {
    this.create('vehiculos', (table) => {
      table.increments()
      table.timestamps()
      table.integer('idMatrícula').notNullable();
      table.string('modelo').notNullable();
      table.string('color').notNullable();
      table.datetime('fecha_ent').notNullable();
      table.time('hora_ent').notNullable();
      table.integer('cliente_RFC').unsigned().references('id').inTable('clientes').onDelete('cascade');
    })
  }

  down () {
    this.drop('vehiculos')
  }
}

module.exports = VehiculoSchema
