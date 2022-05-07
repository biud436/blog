import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner } from 'typeorm';
import { CreatePostViewCountDto } from './dto/create-post-view-count.dto';
import { UpdatePostViewCountDto } from './dto/update-post-view-count.dto';
import { PostViewCount } from './entities/post-view-count.entity';
import { PostViewCountRepository } from './entities/post-view-count.repository';

@Injectable()
export class PostViewCountService {
    constructor(
        @InjectRepository(PostViewCountRepository)
        private readonly postViewCountRepository: PostViewCountRepository,
    ) {}

    /**
     * ! TRANSACTIONAL METHODS
     *
     * @param createPostViewCountDto
     * @param queryRunner
     * @returns
     */
    async create(
        createPostViewCountDto: CreatePostViewCountDto,
        queryRunner: QueryRunner,
    ): Promise<PostViewCount> {
        const model = await this.postViewCountRepository.create(
            createPostViewCountDto,
        );

        return await queryRunner.manager.save(model);
    }

    async findOne(id: number): Promise<PostViewCount> {
        const model = await this.postViewCountRepository
            .createQueryBuilder('post_view_count')
            .select()
            .where('post_view_count.id = :id', { id })
            .andWhere('post_view_count.deletedAt IS NULL')
            .getOne();

        return model;
    }
}
