type Action =
| {type: 'add/broad', payload: string}
| {type: 'add/cheese', payload: string}
| {type: 'add/sausage', payload: string}
| {type: 'remove', payload: string};

export default Action;


