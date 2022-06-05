import { writable } from "svelte/store";

const PollStore = writable([
    {
        id: 1,
        question: "Svelte or React?",
        answerA: "Svelte",
        answerB: "React",
        votesA: 8,
        votesB: 11,
    },
]);

export default PollStore;