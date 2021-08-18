import { Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";

@Entity()
export class User {
  @PrimaryKey()
  id: number;

  @Property()
  email: string;

  @Property()
  @Unique()
  username: string;

  @Property()
  password: string;

  @Property()
  isAdmin: boolean;
}
