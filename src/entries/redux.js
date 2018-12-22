import { createStore } from 'redux';

const $form = document.getElementById('form');

const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData($form);
    const title = data.get('title');
    store.dispatch({
        type: 'ADD_SONG',
        payload: { title }
    });
}

$form.addEventListener('submit', handleSubmit);

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SONG':
            return [...state, action.payload]
            break;
        default:
            return state;
    }
}

const initialState = [
    { "title": "Despacito" },
    { "title": "One more time" },
    { "title": "Without me" }
];

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const $container = document.getElementById('playlist');

const render = () => {
    const playlist = store.getState();
    $container.innerHTML = '';
    playlist.forEach(s => {
        const template = document.createElement('p');
        template.textContent = s.title;
        $container.appendChild(template);
    });
};
render();

const handleChanges = () => {
    render();
}

store.subscribe(handleChanges);