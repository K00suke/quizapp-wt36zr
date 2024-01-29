<script>
    import AnswerButton from "./AnswerButton.svelte";
    
    let currentScore = 0;
    let renzokuSeikai = 0;
    let quizData = {question: "この問題の正解はどれでしょう？", correctAnswer : ["O₂", "13.8"], taku: ["ア","O₂","①","doing","13.8"]};


    const answerButtonClicked = (isCorrect) => {
        if(isCorrect){
            renzokuSeikai += 1;
            currentScore += renzokuSeikai;
        }
        else{
            renzokuSeikai = 0;
        }
    }
</script>
<main class="flex flex-col h-dvh">
    <!-- メニューバー -->
    <div class="bg-red-200 flex justify-around text-xl font-bold p-3">
        <div>スコア:{currentScore}</div>
        <div>連続正解数:{renzokuSeikai}</div>
    </div>

    <!-- 問題文 -->
    <div class="bg-green-200 text-center text-4xl py-4">{quizData.question}</div>

    <!-- 選択肢 -->
    <div class="bg-blue-200 flex flex-col justify-around flex-grow items-center">
        {#each quizData.taku as t}
            <AnswerButton on:click={() => answerButtonClicked(quizData.correctAnswer.includes(t))}>{t}</AnswerButton>
        {/each}
    </div>
</main>