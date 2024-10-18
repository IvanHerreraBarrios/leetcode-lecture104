const rules = {
    'PP': 'P',
    'BB': 'B',
    'RR': 'R',
    'BP': 'R',
    'PB': 'R',
    'RP': 'B',
    'PR': 'B',
    'BR': 'P',
    'RB': 'P',
}

function decorateTree(base){
    const result = []
    let currentRow = base.split(" ")
    let nextRow = []
    while (currentRow.length >= 2) {
        for(let i=0; i < currentRow.length - 1; i++){
            const str = currentRow[i] + currentRow[i+1]
            nextRow.push(rules[str])
        }
        result.unshift(nextRow.join(" "))
        currentRow = nextRow
        nextRow = []
    }

    result.push(base)
    return result
}