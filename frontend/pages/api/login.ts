import { NextApiRequest, NextApiResponse } from "next";
import { authActions, FSM } from "../../recoil/auth/index";
import { beforeAuthInstance } from "../../lib/axios";
import jwt from "jsonwebtoken";

type LoginApiResponse = {
    accessToken: string;
    refreshToken: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        res.status(405).end();
        return;
    }

    if (!req.body) {
        res.statusCode = 401;
        res.json({
            error: "인증 정보가 없습니다.",
        });
    }

    const { username, password } = req.body;

    const response = await authActions.login(username, password);

    const { data } = <any>response.data;
    console.log("userData :");

    const DAY = 60 * 60 * 24;

    res.setHeader(
        "Set-Cookie",
        `token=${data.accessToken}; HttpOnly; Max-Age=${DAY * 7}`
    );
    res.status(200).json(data);
};
