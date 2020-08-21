#!/usr/bin/env node
const meanings = require("./meanings");
const program = require("commander");
const c = require("chalk");
const g = require("gradient-string");
const ora = require("ora");

// * Configures options to pass for CLI
program
  .option("-d, --draw", "Draw cards")
  .description("Consult the Tarot straight from your Command Line.")
  .parse(process.argv);

if (program.cast) {
  const spinner = ora("Drawing Cards").start();

  // ! Update for Tarot usage
  // TODO: configure optional amount of cards

  // setTimeout(() => {
  //   spinner.spinner = "flip";
  //   spinner.color = "yellow";
  //   spinner.text = "Casting Coins";
  // }, 1000);
  // setTimeout(() => {
  //   spinner.spinner = "hamburger";
  //   spinner.color = "white";
  //   spinner.text = "Generating Hexagrams";
  // }, 2000);
  setTimeout(() => {
    spinner.spinner = "star";
    spinner.color = "white";
    spinner.text = "Delivering Reading";
  }, 3000);
  setTimeout(() => {
    spinner.succeed();
  }, 4000);
  setTimeout(() => {
    // ! return generateReading();
  }, 4500);
}

const shuffleCards = () => {
  // TODO
};

const generateReading = () => {
  // logFormat();
};

const locateMeaning = (card) => {
  const found = meanings.find((e) => {
    // return
  });
  return found;
};

const logFormat = (type, label) => {
  const result = locateMeaning(type);
  //! todo: update with correlating data
  // console.log(`
  // ${c.cyan(label, ":")}
  // ${c.bgCyan.bold("   ", result.symbol, "   ")}
  // ${c.bgCyan.underline(result.name.en, result.name.zh)}
  // ${g.vice.multiline(result.image)}
  // ${c.bgMagenta("Judgement:")}
  // ${g.vice.multiline(result.judgment)}
  //  `);
};
