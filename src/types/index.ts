export interface BtnType {
    text: string;
    icon?: string;
    url: string;
}

export type versionType = BtnType;

export interface DownloadCardType {
    title: string;
    description?: string;
    image: string;
    versions: versionType[];
}