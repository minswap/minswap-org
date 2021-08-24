import { NextApiRequest, NextApiResponse } from "next";

import { getTopDiscordUsers } from "src/api/discord-users";

export default async function getTopDiscordUsersApi(req: NextApiRequest, res: NextApiResponse) {
    const users = await getTopDiscordUsers();
    res.send(users);
}