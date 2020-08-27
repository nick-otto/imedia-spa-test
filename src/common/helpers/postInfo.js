// @flow
import type {post, user} from '@/common/flow/types.js';

import {localStorageGet} from '@/common/helpers/localStorage.js';

export function getUserIdByPost(post: post) : number {
  return post.userId;
}

export function getNameByPost(post: post, users : user[]) : string {
  const userId = getUserIdByPost(post);

  return users[userId - 1].name;
}

export function getShrinkDesc(desc: string) : string {
  const tooLong = desc.length > 100;
  const shortDesc = desc.substr(0, 100);

  return tooLong ? `${shortDesc}...` : shortDesc;
}

export function wasPostRead(postId: number) : boolean {
  const postsRead = localStorageGet('postsRead');

  if (!postsRead) return false;

  return postsRead[postId] || false;
}
