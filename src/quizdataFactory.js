/** 0以上max未満の整数をランダムに選ぶ関数 */
const randomRange = (max) => Math.floor(Math.random() * max);

/** 0以上max以下の整数を重複なくlen個をランダムに選ぶ関数 */
const randomArray = (max, len) => {
    const array = [];               // 空の配列を用意し、arrayと名付ける
    while(array.length < len){      // arrの長さがlen未満である限り、以下を繰り返し実行
        const r = randomRange(max); // rに0以上max未満の整数をランダムに選ぶ
        if(!array.includes(r)){     // rがarrayに含まれていなければ、以下を実行
            array.push(r);          // arrayの末尾にrを追加
        }
    }
    return array;                   // 作成したarrayを返す
};

const QAlist = [
    {
        Q: "この問題の間違いはどれでしょう？",
        A: "ア"
    },
    {
        Q: "この問題の不正解はどれでしょう？",
        A: "O₂"
    },
    {
        Q: "この問題の正解ではないものはどれでしょう？",
        A: "①"
    },
    {
        Q: "この問題のwrong answerはどれでしょう？",
        A: "doing"
    },
    {
        Q: "この問題の正解はどれでしょう？",
        A: "13.8"
    },
    {
        Q: "この問題のAnswerはどれでしょう？",
        A:"D"
    }
];

export const getQuizData = () => {
    const numberOfTaku = 5;
    const takuID = randomArray(QAlist.length, numberOfTaku);
    const correctID = takuID[randomRange(numberOfTaku)];
    const taku = takuID.map(id => QAlist[id].A);
    return {
        question: QAlist[correctID].Q,
        correctAnswer : QAlist[correctID].A,
        taku: taku
    }
}