//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('system_messages')
export class system_messages {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({
    name: 'message_code',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  message_code: string;
  @Column({
    name: 'message_type',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  message_type: string;
  @Column({
    name: 'locale_id',
    nullable: false,
    type: 'number',
    primary: false,
  })
  locale_id: number;
}
