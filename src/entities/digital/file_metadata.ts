//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('file_metadata')
export class file_metadata {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({
    name: 'mime_type',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  mime_type: string;
  @Column({
    name: 'filepath',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  filepath: string;
  @Column({
    name: 'filename',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  filename: string;
  @Column({
    name: 'quote_id',
    nullable: true,
    precision: 10,
    scale: 0,
    type: 'number',
    primary: false,
  })
  quote_id: number;
  @Column({
    name: 'risk_id',
    nullable: true,
    precision: 10,
    scale: 0,
    type: 'number',
    primary: false,
  })
  risk_id: number;
  @Column({
    name: 'doc_type_id',
    nullable: true,
    precision: 10,
    scale: 0,
    type: 'number',
    primary: false,
  })
  doc_type_id: number;
  @Column({
    name: 'doc_sub_type_id',
    nullable: true,
    precision: 10,
    scale: 0,
    type: 'number',
    primary: false,
  })
  doc_sub_type_id: number;
  @Column({
    name: 'created_date',
    nullable: true,
    type: 'timestamp with time zone',
    primary: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_date: Date;
}
