import {EndGame, Episode} from "./plotType.js";

export const startEpisode: Episode = {
    text: 'Вы просыпаетесь в центре густого леса, окруженного туманом. Единственный звук, который вы слышите, — это ветер, шелестящий в листве деревьев. Перед вами две тропинки. Одна ведет направо, другая — налево.',
    actions: []
}

const crossBridge: EndGame = {
    text: 'Вы смело идёте по скрипящим доскам моста, но в середине пути слышите треск. Мост обрушивается под вами, и вы падаете в холодную воду реки. Вы теряете сознание...',
    isEnd: true,
}

const rightEpisode: Episode = {
    text: 'Вы поворачиваете направо и идёте по узкой тропинке. Через некоторое время перед вами появляется старый мост, ведущий через бурную реку.',
    actions: [
        {
            actionText: 'Перейти через мост',
            action: crossBridge,
        },
        {
            actionText: 'Вернуться назад',
            action: startEpisode,
        }
    ]

}

const knockHouseEpisode: EndGame = {
    text: 'Вы стучите в дверь, и через мгновение её открывает пожилая женщина с добрым взглядом. Она предлагает вам войти и отдохнуть. Вы чувствуете себя в безопасности и продолжаете путь с новыми силами.',
    isEnd: true,
}

const enterHouseEpisode: EndGame = {
    text: 'Вы решаете войти в хижину, но как только переступаете порог, дверь захлопывается за вашей спиной. Внутри пусто, только звук капающей воды раздается в тишине. Кажется, что вы попали в ловушку.',
    isEnd: true
}

const leftEpisode: Episode = {
    text: 'Вы сворачиваете налево, и тропинка выводит вас к небольшой хижине. Из окна виден тусклый свет, а дверь приоткрыта.',
    actions: [
        {
            actionText: 'Войти в хижину',
            action: enterHouseEpisode,
        },
        {
            actionText: 'Постучать в дверь',
            action: knockHouseEpisode
        }
    ]
}

startEpisode.actions = [{
    actionText: 'Направо',
    action: rightEpisode,
},
    {
        actionText: 'Налево',
        action: leftEpisode
    }]