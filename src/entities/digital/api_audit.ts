//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('api_audit')
export class api_audit {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'key', nullable: false, type: 'varchar2', primary: false })
  key: string;
  @Column({
    name: 'identifier',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  identifier: string;
  @Column({ name: 'request', nullable: true, type: 'clob', primary: false })
  request: string;
  @Column({ name: 'response', nullable: true, type: 'clob', primary: false })
  response: string;
  @Column({
    name: 'duration',
    nullable: true,
    precision: 3,
    scale: 2,
    type: 'number',
    primary: false,
  })
  duration: number;
  @Column({
    name: 'created_date',
    nullable: true,
    type: 'timestamp with time zone',
    primary: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_date: Date;
}
