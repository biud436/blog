import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { PostModule } from './entities/post/post.module';
import { ConfiguredDatabaseModule } from './modules/configured-database/configured-database.module';
import { UserModule } from './entities/user/user.module';
import { ProfileModule } from './entities/profile/profile.module';
import { AuthModule } from './domain/auth/auth.module';
import { AdminModule } from './entities/admin/admin.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './domain/auth/guards/roles.guard';
import { AllExceptionFilter } from './exceptions/AllExceptionFilter.filter';
import { EnvFileMap } from '@app/env/libs/types';
import { PostsModule } from './domain/posts/posts.module';
import { MailModule } from './modules/mail/mail.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from './domain/health-check/health-check.controller';
import { MicroServicesModule } from './micro-services/micro-services.module';
import { OrmModule } from './modules/orm/orm.module';
import { ImageModule } from './domain/image/image.module';
import { MulterModule } from '@nestjs/platform-express';
import { getMyMulterOption } from './common/multer.config';
import { AesModule } from './modules/aes/aes.module';
import { FirstCategoryModule } from './entities/first-category/first-category.module';
import { SecondCategoryModule } from './entities/second-category/second-category.module';
import { PostViewCountModule } from './entities/post-view-count/post-view-count.module';
import './polyfill/';

@Module({
    imports: [
        PostModule,
        ConfigModule.forRoot({
            envFilePath: <EnvFileMap>(
                (AppModule.isDelvelopment() ? '.development.env' : '.env')
            ),
            isGlobal: true,
        }),
        ConfiguredDatabaseModule,
        MulterModule.registerAsync({
            useFactory: () => {
                const isProduction = process.env.NODE_ENV === 'production';

                return {
                    ...getMyMulterOption(isProduction),
                };
            },
        }),
        TerminusModule,
        HttpModule,
        UserModule,
        ProfileModule,
        AuthModule,
        AdminModule,
        PostsModule,
        MailModule,
        MicroServicesModule,
        OrmModule,
        ImageModule,
        AesModule,
        FirstCategoryModule,
        SecondCategoryModule,
        PostViewCountModule,
    ],
    controllers: [AppController, HealthCheckController],
    providers: [
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
        {
            provide: APP_FILTER,
            useClass: AllExceptionFilter,
        },
    ],
})
export class AppModule {
    public static isDelvelopment(): boolean {
        return process.env.NODE_ENV !== 'production';
    }
}
