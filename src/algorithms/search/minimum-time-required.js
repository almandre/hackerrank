function getItems(machines, days) {
    let items = 0;

    machines.forEach(machine => {
        items += days / machine;
    });

    return items;
}

function getDays(machines, goal, isMax) {
    let duration;
    const { length } = machines;

    if (isMax) {
        duration = Math.max(...machines);
    } else {
        duration = Math.min(...machines);   
    }

    return Math.floor(goal * duration / length);
}

export default function minTime(machines, goal) {
    let days;

    let high = getDays(machines, goal, true);
    let low = getDays(machines, goal);

    while (low < high) {
        const middle =  Math.floor(low + (high - low) / 2);
        const items = getItems(machines, middle);

        if (items < goal) {
            low = middle + 1;
        } else {
            high = middle;
            days = middle;
        }
    }

    return days;
}
