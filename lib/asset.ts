import { Asset, EntryCollection } from 'contentful';
import { IPosts, IPostsFields } from '../@types/generated/contentful';
import client from '../utils/client';

export async function getAssetData(thumbnail_id: string): Promise<Asset> {
  const asset: Asset = await client.getAsset(thumbnail_id);

  return asset;
}
