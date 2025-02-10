import {startEpisode} from './plot/plot.js';
import {Plot} from './plot/plotType.js';
import {isEndGame} from './plot/isEndGame.js'
import  {createInterface} from 'readline';



function runPlot(plot: Plot) {
    console.log(plot.text);
    if (isEndGame(plot)) {
        return;
    }

    plot.actions.forEach((action, idx) => {console.log(`${idx + 1}) ${action.actionText}`)});

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question(``, plotNumber => {
        rl.close();
        runPlot(plot.actions[Number.parseInt(plotNumber)-1].action);
    });
}

runPlot(startEpisode);
