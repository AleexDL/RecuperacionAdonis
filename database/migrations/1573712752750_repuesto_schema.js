'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RepuestoSchema extends Schema {
  up () {
    this.create('repuestos', (table) => {
      table.increments()
      table.timestamps()
      table.string('descripcion').notNullable();
      table.integer('costUnit').notNullable();
      table.integer('precioUnt').notNullable();
      table.integer('impParcial').notNullable();
      table.integer('HojaDeParte').unsigned().references('id').inTable('hoja_de_partes').onDelete('cascade');
      table.integer('HojaDeParteMecanicoResponsable').unsigned().references('idMecanicoResponsable').inTable('hoja_de_partes').onDelete('cascade');
    })
  }

  down () {
    this.drop('repuestos')
  }
}

module.exports = RepuestoSchema
