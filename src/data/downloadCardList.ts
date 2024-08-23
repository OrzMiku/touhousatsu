import type { DownloadCardType } from '../types';

export const downloadCardList: DownloadCardType[] = [
    {
        title: '游戏本体(Windows版)',
        description: `
            东方杀游戏本体文件，包含游戏的所有资源文件。
            <br>
            目前最新版本为 20240727 【0.10.10】。
        `,
        image: '/images/touhou-card-banner-1.png',
        versions: [
            {
                text: '0.10.10 安装包',
                url: 'https://touhousatsu-1251389155.cos.ap-shanghai.myqcloud.com/20240727/TouhouSatsu.exe'
            },
            {
                text: '0.10.10 解压包',
                url: 'https://touhousatsu-1251389155.cos.ap-shanghai.myqcloud.com/20240727/TouhouSatsu%5Bv0.10.10%5D0727-full.7z'
            }
        ]
    },
    {
        title: '皮肤与音乐包',
        description: `
            东方杀皮肤与音乐包，分别包含游戏的皮肤与音乐资源文件。
            <br>
            使用方法：将压缩包解压后，将 audio 或者 image 文件夹放到与 QSanguosha.exe 同级的文件夹，与原有文件夹合并。
        `,
        image: '/images/touhou-card-banner-2.png',
        versions: [
            {
                text: '0.10.9 皮肤包',
                url: 'https://touhousatsu-1251389155.cos.ap-shanghai.myqcloud.com/20240727/TouhouSatsu%5Bv0.10.10%5D0727-skin.7z'
            },
            {
                text: '0.10.10 BGM',
                url: 'https://touhousatsu-1251389155.cos.ap-shanghai.myqcloud.com/20240727/TouhouSatsu%5Bv0.10.10%5D0727-music.7z'
            }
        ]
    }
];

export const cards = downloadCardList; 