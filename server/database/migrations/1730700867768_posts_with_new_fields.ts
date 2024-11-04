import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterPostsAddNameDescription extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('name').notNullable()
      table.text('description').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('name')
      table.dropColumn('description')
    })
  }
}
