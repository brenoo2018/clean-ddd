import { randomUUID } from 'node:crypto';
import { Slug } from './value-objects/slug';

export class Question {
  public id: string;
  public title: string;
  public slug: Slug;
  public content: string;
  public authorId: string;

  constructor(
    title: string,
    content: string,
    authorId: string,
    slug: Slug,
    id?: string
  ) {
    this.title = title;
    this.content = content;
    this.authorId = authorId;
    this.slug = slug;
    this.id = id ?? randomUUID();
  }
}
