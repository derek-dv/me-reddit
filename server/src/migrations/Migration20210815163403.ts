import { Migration } from '@mikro-orm/migrations';

export class Migration20210815163403 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "email" varchar(255) not null, "username" varchar(255) not null, "password" varchar(255) not null, "is_admin" bool not null);');
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
  }

}
