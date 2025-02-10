export type Plot = Episode | EndGame;

export interface Episode {
    position?: string;
    actions: Action[];
    text: string;
}

export interface EndGame {
    text: string;
    isEnd: true;
}

export interface Action {
    actionText: string;
    action: Plot;
}