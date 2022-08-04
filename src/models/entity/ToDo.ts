import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "title", type: "varchar" })
  title: String

  @Column({ name: "gender", type: "varchar" })
  gender: String

  @Column({ name: "classification", type: "varchar" })
  classification: String

  @Column({ name: "subtitle", type: "varchar" })
  subtitle: String

  @Column({ name: "image", type: "varchar" })
  image: String

  @Column({ name: "release_date", type: "timestamp" })
  release_date: Date

  @Column({ name: "director", type: "varchar" })
  director: String

  @Column({ name: "writer", type: "varchar" })
  writer: String

  @Column({ name: "studio", type: "varchar" })
  studio: String

  @Column({ name: "actors", type: "varchar" })
  actors: String

  @Column({ name: "resume", type: "varchar" })
  resume: String

  @Column({ name: "awards", type: "varchar" })
  awards: String

  @Column({ name: "note", type: "int" })
  note: Number

  @CreateDateColumn({
    name: "created_at",
    type: "timestamp",
    default: () => "current_timestamp(6)",
    onUpdate: "current_timestamp(6)",
  })
  createdAt: Date
  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamp",
    default: () => "current_timestamp(6)",
    onUpdate: "current_timestamp(6)",
  })
  updated_at: Date
}
