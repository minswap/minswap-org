import sortBy from 'lodash/sortBy';
import Mee6LevelsApi, { User } from 'mee6-levels-api';

const minswapServerID = '829060079248343090';

export async function getTopDiscordUsers(): Promise<User[]> {
  const users: User[] = await Mee6LevelsApi.getLeaderboardPage(minswapServerID);
  const topUsers = sortBy(users, 'rank').slice(0, 30);
  return topUsers;
}

export type { User as DiscordUser } from 'mee6-levels-api';
