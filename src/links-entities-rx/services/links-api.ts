import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiLinkItem } from '../types';

export class LinksApi {
  private readonly client = inject(HttpClient);

  getLinks() {
    return this.client.get<ApiLinkItem[]>(
      'https://api.some-fake-server.com/links',
    );
  }
}
