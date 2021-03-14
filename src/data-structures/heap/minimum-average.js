import { PriorityQueue } from '@almandre/algorithms-and-data-structures';

const compareArrivalTime = (a, b) => a[0] - b[0];

const minimumAverage = (customers) => {
    customers.sort(compareArrivalTime);

    const priorityQueue = new PriorityQueue();
    let elapsedTime = customers[0][0];
    let waitingTime = 0;
    let next = 0;

    for (let i = 0; i < customers.length; i++) {
        while (next < customers.length) {
            const [arrivalTime, requiredTime] = customers[next];

            if (arrivalTime > elapsedTime && priorityQueue.length > 0) {
                break;
            }

            priorityQueue.add(customers[next], requiredTime);

            next += 1;
        }

        const { data: customer } = priorityQueue.poll();
        const [arrivalTime, requiredTime] = customer;

        elapsedTime += requiredTime;
        waitingTime += elapsedTime - arrivalTime;
    }

    return Math.floor(waitingTime / customers.length);
};

export default minimumAverage;
