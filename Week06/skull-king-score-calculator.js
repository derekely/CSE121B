// There are two situations on how score can be calculated.
// 1) If the player gets their correct amount of bids
// 2) Player did not get the correct amount of bids

// Function to calculate the score.
function scoring_rules(round, bid, bids_won, bonus) {
    let score = 0;
    // Zero bid rule
    if (bid == 0) {
        score_to_bid = round * 10;
        if (bids_won == 0) {
            score += score_to_bid; // Cannot get a bonus from cards if you have no cards.
        }
        else {
            score -= score_to_bid;
        }
    }
    // <0 bid rule
    else {
        bid_to_score = bid * 10;
        if (bid == bids_won) {
            score += bid_to_score + bonus;
            }
        else {
            bid_to_score = bid * 10;
            won_to_score = bids_won * 10
            if (bid > bids_won) {
                score = won_to_score - bid_to_score;
            }
            else {
                score = bid_to_score - won_to_score;
            }}
    };
    return score
};


function calculate_score() {
    let bid = parseInt(document.querySelector("#bid").value);
    let won = parseInt(document.querySelector("#won").value);
    let bonus = parseInt(document.querySelector("#bonus").value); // Need to make an if that says if this is blank to make it zero.
    let round = parseInt(document.querySelector("#round").value);
    
    let score = scoring_rules(round, bid, won, bonus);
    document.querySelector("#score").value = score;



};





// Round 1, Player 1
document.querySelector("#calculate").addEventListener('click', calculate_score);