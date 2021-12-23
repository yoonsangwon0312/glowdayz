import { Request, Response, NextFunction } from 'express';

export function HeaderMiddleware(req: Request, res: Response, next: NextFunction) {
    const ip = req.headers.ip;
    const host = req.headers.host; //request에서 입력한 해당 서버 주소
    const agent = req.headers['user-agent'];
    const NODE_ENV = process.env.NODE_ENV;

    const develop_host_list = ['localhost', '127.0.0.1', '0.0.0.0', '192.168.', ':::'];

    if (!ip) {
        for (let i = 0; i < develop_host_list.length; ++i) {
            if (host.indexOf(develop_host_list[i]) > -1) {
                if (NODE_ENV === 'development') {
                    //console.warn(`개발자 모드`);
                    req.headers['ip'] = host;
                } else {
                    console.warn(`적절하지 않은 접속 주소(${host}) 입니다. `);
                    throw new Error(`적절하지 않은 접속 주소(${host}) 입니다. `);
                }
            }
        }
    }

    // 기존
    // if (!ip && NODE_ENV === 'production') {
    //     throw new Error('아이피가 존재하지 않습니다.');
    // } else if (!ip && NODE_ENV === 'development') {
    //     console.warn(
    //         '아이피가 존재하지 않습니다. 임시 아이피를 입력합니다.(123.123.123.123)',
    //     );
    //     req.headers['ip'] = '123.123.123.123';
    // }
    // if (!agent) {
    //     throw new Error('유저에이전트가 존재하지 않습니다.');
    // }
    next();
}
