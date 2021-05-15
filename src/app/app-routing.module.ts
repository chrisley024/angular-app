import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogArchiveComponent } from './blog-archive/blog-archive.component';
import { BlogProfileComponent } from './blog-profile/blog-profile.component';
import { FollowerHttpComponent } from './follower-http/follower-http.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'followers/:id/:username', component: GithubProfileComponent },
  { path: 'blogs/:year/:month', component: BlogProfileComponent },
  { path: 'followers', component: FollowerHttpComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'blogs', component: BlogArchiveComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
