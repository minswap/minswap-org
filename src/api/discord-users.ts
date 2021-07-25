import sortBy from 'lodash/sortBy';
import Mee6LevelsApi, { User } from 'mee6-levels-api';

const minswapServerID = '829060079248343090';

// Long Nguyen, Hieu Phan, Ballsoutbet
const minswapMemeberIDs: string[] = ['278205932888915970', '664868100998561803', '297833555327975424'];

export async function getTopDiscordUsers(): Promise<User[]> {
  const users: User[] = await Mee6LevelsApi.getLeaderboardPage(minswapServerID);
  const userFilter: User[] = users.filter(
    (user) => !minswapMemeberIDs.includes(user.id) && user.avatarUrl.split('/').pop() !== '',
  );
  const topUsers = sortBy(userFilter, 'rank').slice(0, 30);
  return topUsers;
}

export type { User as DiscordUser } from 'mee6-levels-api';
