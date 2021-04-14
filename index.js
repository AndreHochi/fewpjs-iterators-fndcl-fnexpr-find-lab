function superbowlWin(array) {
    let results = array.find(game => game.result == 'W')
    try {
        return results.year
    } catch (err) {
        return results
    }
}