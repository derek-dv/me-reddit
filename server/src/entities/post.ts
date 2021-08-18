import { Entity, PrimaryKey, Property } from "@mikro-orm/core";


@Entity()
export class Post {
  @PrimaryKey()
  id!: number;

  @Property({ type: "date" })
  createdAt = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: "text" })
  title: string;

  @Property({ type: "number" })
  authorId: number;

  @Property({ type: "text" })
  content: string;

  @Property({type: Number})
    votes: string
}
