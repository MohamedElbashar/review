//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('role_permission')
export class role_permission {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({
    name: 'role_id',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  role_id: string;
  @Column({
    name: 'permission_id',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  permission_id: string;
}
