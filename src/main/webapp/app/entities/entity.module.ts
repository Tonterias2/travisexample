import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Jhipsterpress09BlogModule } from './blog/blog.module';
import { Jhipsterpress09PostModule } from './post/post.module';
import { Jhipsterpress09TopicModule } from './topic/topic.module';
import { Jhipsterpress09TagModule } from './tag/tag.module';
import { Jhipsterpress09CommentModule } from './comment/comment.module';
import { Jhipsterpress09MessageModule } from './message/message.module';
import { Jhipsterpress09NotificationModule } from './notification/notification.module';
import { Jhipsterpress09UprofileModule } from './uprofile/uprofile.module';
import { Jhipsterpress09CommunityModule } from './community/community.module';
import { Jhipsterpress09FollowModule } from './follow/follow.module';
import { Jhipsterpress09BlockuserModule } from './blockuser/blockuser.module';
import { Jhipsterpress09AlbumModule } from './album/album.module';
import { Jhipsterpress09CalbumModule } from './calbum/calbum.module';
import { Jhipsterpress09PhotoModule } from './photo/photo.module';
import { Jhipsterpress09InterestModule } from './interest/interest.module';
import { Jhipsterpress09ActivityModule } from './activity/activity.module';
import { Jhipsterpress09CelebModule } from './celeb/celeb.module';
import { Jhipsterpress09UrllinkModule } from './urllink/urllink.module';
import { Jhipsterpress09FrontpageconfigModule } from './frontpageconfig/frontpageconfig.module';
import { Jhipsterpress09VtopicModule } from './vtopic/vtopic.module';
import { Jhipsterpress09VquestionModule } from './vquestion/vquestion.module';
import { Jhipsterpress09VanswerModule } from './vanswer/vanswer.module';
import { Jhipsterpress09VthumbModule } from './vthumb/vthumb.module';
import { Jhipsterpress09NewsletterModule } from './newsletter/newsletter.module';
import { Jhipsterpress09FeedbackModule } from './feedback/feedback.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        Jhipsterpress09BlogModule,
        Jhipsterpress09PostModule,
        Jhipsterpress09TopicModule,
        Jhipsterpress09TagModule,
        Jhipsterpress09CommentModule,
        Jhipsterpress09MessageModule,
        Jhipsterpress09NotificationModule,
        Jhipsterpress09UprofileModule,
        Jhipsterpress09CommunityModule,
        Jhipsterpress09FollowModule,
        Jhipsterpress09BlockuserModule,
        Jhipsterpress09AlbumModule,
        Jhipsterpress09CalbumModule,
        Jhipsterpress09PhotoModule,
        Jhipsterpress09InterestModule,
        Jhipsterpress09ActivityModule,
        Jhipsterpress09CelebModule,
        Jhipsterpress09UrllinkModule,
        Jhipsterpress09FrontpageconfigModule,
        Jhipsterpress09VtopicModule,
        Jhipsterpress09VquestionModule,
        Jhipsterpress09VanswerModule,
        Jhipsterpress09VthumbModule,
        Jhipsterpress09NewsletterModule,
        Jhipsterpress09FeedbackModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipsterpress09EntityModule {}
