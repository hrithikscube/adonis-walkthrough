import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterPostsAddUserIdAndComments extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      // Adding user_id column as a foreign key to the users table
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')

      // Adding comments column as JSON
      table.json('comments').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign(['user_id'])
      table.dropColumn('user_id')
      table.dropColumn('comments')
    })
  }
}
