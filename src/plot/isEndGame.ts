import {EndGame, Plot} from './plotType.js';

export const isEndGame = (data: Plot): data is EndGame => 'isEnd' in data;