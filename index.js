function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function returnedFunction() {
        console.log("This function returns a named function");
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('Returns an anonymous function');
    }
}


// ******************************************************************
// *** Test code (This is the follow along code from the lecture) ***
// ******************************************************************
function runFiveMiles() {
    console.log("Go for a five mile run");
}

function liftWeights() {
    console.log("Pump iron");
}

function swimFortyLaps() {
    console.log("Swim 40 laps");
}

function monday() {
    exerciseRoutine(liftWeights);
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function morningRoutine(excercise) {
    let breakfast;

    if (excercise === liftWeights) {
        breakfast = "protein bar";
    } else if (excercise === swimFortyLaps) {
        breakfast = "kale smoothie";
    } else {
        breakfast = "granola";
    }

    exerciseRoutine(excercise);

    return function () {
        console.log(`Nom nom nom this ${breakfast} is delicious`);
    }
}

//monday();

//exerciseRoutine(() => console.log("Stretch! Work that core!"));

//let afterExercise = morningRoutine(swimFortyLaps);
//afterExercise();

//afterExercise = morningRoutine(liftWeights);
//afterExercise();
