//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('locale')
export class locale {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'en', nullable: false, type: 'varchar2', primary: false })
  en: string;
  @Column({ name: 'ar', nullable: true, type: 'varchar2', primary: false })
  ar: string;
}
