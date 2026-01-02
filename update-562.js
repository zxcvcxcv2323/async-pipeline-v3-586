/**
 * Async Pipeline v3-586
 * A simple functional pipeline for processing data through asynchronous stages.
 */

const runPipeline = async (initialValue, stages) => {
  return stages.reduce(async (previousPromise, nextStage) => {
    const currentValue = await previousPromise;
    console.log(`Processing stage: ${nextStage.name} with value: ${currentValue}`);
    return nextStage(currentValue);
  }, Promise.resolve(initialValue));
};

// Example Stages
const increment = async (n) => n + 1;
const multiplyByTwo = async (n) => n * 2;
const formatResult = async (n) => `Final Result: ${n}`;

// Execution
const stages = [increment, multiplyByTwo, formatResult];

runPipeline(10, stages)
  .then(result => console.log(result))
  .catch(err => console.error("Pipeline failed:", err));