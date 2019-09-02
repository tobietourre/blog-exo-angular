import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-exo';
  posts = [{
    title: 'Mon premier post',
    content:  'Le meilleur de tous les posts',
    loveIts: 5,
    created_at: new Date()
  },
  {
    title: 'Mon deuxième post',
    content:  'Le plus moyen de tous les posts',
    loveIts: 0,
    created_at: new Date()
  },
  {
    title: 'Mon troisième post',
    content:  'Le pire de tous les posts',
    loveIts: -5,
    created_at: new Date()
  }];
}
