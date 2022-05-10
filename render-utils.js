export function renderListItem(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
    div.style.top = animal.top;
    div.style.left = animal.left;

    const img = document.createElement('img');
    img.src = `./assets/${animal.type}.svg`;

    const a = document.createElement('a');
    a.href = `/animal-facts/?id=${animal.id}`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = animal.name;
    nameSpan.classList.add('name');

    const span = document.createElement('span');
    span.textContent = animal.says;

    a.append(img, nameSpan, span);
    div.append(a);
    return div;
}

export function renderListItemDetail(animal) {
    const div = document.createElement('div');
    div.classList.add('animal1');
    // div.style.top = animal.top;
    // div.style.left = animal.left;

    const h2 = document.createElement('h2');
    h2.textContent = `Info about ${animal.name}`;

    const img = document.createElement('img');
    img.src = `../assets/${animal.type}.svg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = animal.name;
    nameSpan.classList.add('name');

    const span = document.createElement('span');
    span.textContent = animal.says;

    div.append(h2, img, nameSpan, span,);
    return div;
}

