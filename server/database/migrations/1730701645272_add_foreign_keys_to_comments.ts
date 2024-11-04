import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddForeignKeysToComments extends BaseSchema {
  protected tableName = 'comments'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('CASCADE')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign(['post_id'])
      table.dropForeign(['user_id'])
      table.dropColumn('post_id')
      table.dropColumn('user_id')
    })
  }
}
