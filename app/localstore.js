export function addItem (collection, data) {
    let existingData = getCollection(collection);
    data.id = Date.now();
    existingData.push(data);
    localStorage.setItem(collection, JSON.stringify(existingData));

    return existingData;
}

export function getCollection (collection) {
    return JSON.parse(localStorage.getItem(collection)) || [];
}

export function deleteItem (collection, id) {
    let existingData = getCollection(collection);
    existingData = existingData.filter(item => item.id !== id);
    localStorage.setItem(collection, JSON.stringify(existingData));

    return existingData;
}