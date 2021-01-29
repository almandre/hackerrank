import { Heap } from '@almandre/algorithms-and-data-structures';

const createCookie = (a, b) => (1 * a) + (2 * b);

const cookies = (k, array) => {
    let operations = 0;

    const heap = new Heap();
    array.forEach(cookie => heap.add(cookie));

    while (heap.peek() < k) {
        if (heap.length === 1) { return -1; }

        const newCookie = createCookie(heap.poll(), heap.poll());

        heap.add(newCookie);

        operations += 1;
    }

    return operations;
};

export default cookies;
