function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    console.log('멍멍');
};

const getRabbit = async () => {
    await sleep(500);
    console.log('토끼토끼');
};
const getTurtle = async () => {
    await sleep(3000);
    console.log('거북거북');
};

async function process() {
    await getDog();
    await getRabbit();
    await getTurtle();
}

process();