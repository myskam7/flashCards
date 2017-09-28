var ClozeCard = function(text, cloze, choices) {
    // Convert the incoming strings to lower case
    var textToLower = text.toLowerCase();
    var clozeToLower = cloze.toLowerCase();
   
    this.full = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, '...');
}

module.exports = ClozeCard;