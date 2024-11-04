import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterUsersAddCommentsAndPosts extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      // Adding comments column as JSON
      table.json('comments').nullable()

      // Adding posts column as JSON
      table.json('posts').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('comments')
      table.dropColumn('posts')
    })
  }
}
