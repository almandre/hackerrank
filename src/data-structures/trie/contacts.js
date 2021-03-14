import { Trie } from '@almandre/algorithms-and-data-structures';

function contacts(queries) {
    const contact = new Trie();
    const partials = [];

    queries.forEach(query => {
        const [key, value] = query;

        if (key === 'add') {
            contact.add(value);
        } else if (key === 'find') {
            const partial = contact.startsWith(value);
            partials.push(partial);
        }
    });

    return partials;
}

export default contacts;
