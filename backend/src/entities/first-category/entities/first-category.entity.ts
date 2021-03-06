import { Exclude } from 'class-transformer';
import { Post } from 'src/entities/post/entities/post.entity';
import { SecondCategory } from 'src/entities/second-category/entities/second-category.entity';
import {
    Column,
    Entity,
    Index,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * 대분류
 */
@Entity()
export class FirstCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    @Index()
    name: string;

    @Column({
        nullable: false,
    })
    description: string;

    @OneToMany(
        () => SecondCategory,
        (secondCategory) => secondCategory.firstCategory,
    )
    secondCategories: SecondCategory[];

    @OneToMany(() => Post, (post) => post.firstCategory)
    posts: Post[];
}
